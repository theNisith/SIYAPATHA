import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Sections from "@/components/Sections";

export default function Home() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Sections />
      </main>

      <footer
        id="stories"
        className="bg-slate-900 px-6 py-20 text-slate-200 sm:px-10 lg:px-16"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-slate-600">
                <Image
                  src="/images/logo.png"
                  alt="Towards Humanity logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <p className="text-sm uppercase tracking-[0.18em] text-blue-300">
                Towards Humanity
              </p>
            </div>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-300">
              Every story of change begins with empathy in action. Together, we
              can build safer, healthier futures for communities worldwide.
            </p>
          </div>
          <p className="text-sm text-slate-400">© 2026 Towards Humanity</p>
        </div>
      </footer>
    </div>
  );
}
