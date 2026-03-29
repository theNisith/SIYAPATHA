"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";

type QuoteItem = {
  text: string;
  author: string;
  image: string;
};

const quotes: QuoteItem[] = [
  {
    text: "The best way to find yourself is to lose yourself in the service of others.",
    author: "Mahatma Gandhi",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    text: "It's not how much we give but how much love we put into giving.",
    author: "Mother Teresa",
    image:
      "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    text: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop",
  },
];

function QuoteCard({ quote, index }: { quote: QuoteItem; index: number }) {
  const cardRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      className="grid gap-6 rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-sm shadow-slate-200/60 md:grid-cols-2 md:items-stretch md:p-6"
    >
      <div className="order-2 flex flex-col justify-between rounded-2xl px-2 py-3 md:order-1 md:px-3">
        <Quote className="h-10 w-10 text-blue-500" strokeWidth={1.6} />
        <blockquote className="mt-6 text-2xl leading-tight tracking-[-0.01em] text-slate-900 sm:text-3xl md:text-4xl">
          <span className="font-serif">{quote.text}</span>
        </blockquote>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
          {quote.author}
        </p>
      </div>

      <div className="order-1 h-72 overflow-hidden rounded-2xl md:order-2 md:h-auto md:min-h-[320px]">
        <motion.img
          src={quote.image}
          alt={quote.author}
          style={{ y: imageY }}
          className="h-[120%] w-full object-cover rounded-2xl"
          loading="lazy"
        />
      </div>
    </motion.article>
  );
}

export default function Quotes() {
  return (
    <section className="bg-slate-50 px-6 py-20 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3b82f6]">
            Voices of Humanity
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-5xl">
            Words that continue to move service into action.
          </h3>
        </motion.div>

        <div className="space-y-8">
          {quotes.map((quote, index) => (
            <QuoteCard key={quote.author} quote={quote} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
