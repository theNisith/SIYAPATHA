"use client";

import { Globe, Heart, Users } from "lucide-react";
import { motion } from "framer-motion";

const impactCards = [
  {
    title: "People Reached",
    stat: "1.2M+ Impacted",
    description:
      "From rapid relief to long-term care, we deliver support where it matters most.",
    reveal:
      "Local teams collaborate with global partners to keep aid fast, accountable, and human-centered.",
    icon: Heart,
    image: "/images/WhatsApp Image 2026-03-29 at 11.52.16.jpeg",
  },
  {
    title: "Global Footprint",
    stat: "45+ Countries",
    description:
      "Our network activates across continents to respond to crises and rebuild communities.",
    reveal:
      "Each mission is designed with local voices first, creating resilient and culturally aligned outcomes.",
    icon: Globe,
    image: "/images/WhatsApp Image 2026-03-29 at 11.52.16 (1).jpeg",
  },
  {
    title: "Community Partners",
    stat: "8,000+ Volunteers",
    description:
      "People-powered programs enable dignified access to health, education, and essentials.",
    reveal:
      "We invest in training and leadership so communities can sustain momentum beyond emergency windows.",
    icon: Users,
    image: "/images/WhatsApp Image 2026-03-29 at 11.52.16 (2).jpeg",
  },
];

export function MissionSection() {
  return (
    <section id="mission" className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto max-w-5xl text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3b82f6]">
          Mission
        </p>
        <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-6xl">
          Our mission is to bridge the gap between hope and action
        </h2>
      </motion.div>
    </section>
  );
}

export function ImpactSection() {
  return (
    <section id="impact" className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3b82f6]">
            Impact
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-5xl">
            Measurable change, delivered with compassion.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {impactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{ scale: 1.05, y: -6 }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-blue-100/60"
              >
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-4 inline-flex rounded-full bg-blue-50 p-2 text-[#3b82f6]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <p className="text-sm font-medium text-slate-500">{card.title}</p>
                  <p className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
                    {card.stat}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {card.description}
                  </p>
                  <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-slate-700 opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100">
                    {card.reveal}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Sections() {
  return (
    <>
      <MissionSection />
      <ImpactSection />
    </>
  );
}
