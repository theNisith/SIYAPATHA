import Image from "next/image";
import { MapPin } from "lucide-react";
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

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="mt-0.5 h-5 w-5 flex-none text-blue-300" />
                <p className="max-w-xl text-sm leading-relaxed">
                  Sarvodaya District Centre, Old Tangalle Rd, Matara, Sri Lanka,
                  Matara, Sri Lanka 81000
                </p>
              </div>

              <div className="flex items-center gap-5">
                <a
                  href="https://www.facebook.com/siyapathayouth/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Siyapatha Facebook"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition-colors hover:text-blue-300"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.2-1.6 1.5-1.6H16V4.8c-.2 0-.9-.1-1.8-.1-1.8 0-3 1.1-3 3.2V11H9v3h2.4v7h2.1Z" />
                  </svg>
                  Facebook
                </a>

                <a
                  href="https://www.instagram.com/siyapatha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Siyapatha Instagram"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition-colors hover:text-blue-300"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-400">© 2026 Towards Humanity</p>
        </div>
      </footer>
    </div>
  );
}
