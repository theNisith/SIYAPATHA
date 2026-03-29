"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { label: "Mission", href: "#mission" },
  { label: "Impact", href: "#impact" },
  { label: "Stories", href: "#stories" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between rounded-2xl border border-white/40 bg-white/70 px-4 backdrop-blur-md sm:h-16 sm:px-6">
        <Link
          href="#"
          className="flex items-center gap-2 sm:gap-3"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-slate-200 sm:h-12 sm:w-12">
            <Image
              src="/images/logo.png"
              alt="Towards Humanity logo"
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </div>
          <span className="text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
            SIYAPATHA
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-full bg-gradient-to-r from-[#3b82f6] to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20"
        >
          Donate
        </motion.button>
      </nav>
    </header>
  );
}
