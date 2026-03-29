"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import ParticleSphere from "@/components/ParticleSphere";

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center overflow-hidden px-6 pt-24 sm:px-10 lg:px-16">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 4], fov: 55 }} dpr={[1, 2]}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.7} />
            <ParticleSphere />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-slate-900 sm:text-7xl lg:text-8xl"
        >
          Towards humanity
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-xl"
        >
          Empowering the underserved through radical empathy and global action.
        </motion.p>
      </div>
    </section>
  );
}
