// src/components/home/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#1A1A1A]">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Dukes HTX bar interior"
          className="absolute inset-0 h-full w-full object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-[#1A1A1A]" />
      </div>

      <div
        className="
          relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center
          px-6 text-center
          min-h-[clamp(560px,72svh,860px)]
          py-16 md:py-20
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="w-full max-w-4xl"
        >
          <p className="mb-5 text-[11px] uppercase tracking-[0.42em] text-[#D4A853] md:text-xs">
            Humble, Texas
          </p>

          <h1 className="font-['Playfair_Display'] text-[clamp(3.5rem,10vw,6.75rem)] font-bold leading-[0.92] text-[#F5F0E8]">
            DUKES
            <span className="mt-2 block text-[clamp(2rem,5vw,4rem)] font-normal italic text-[#D4A853]">
              HTX
            </span>
          </h1>

          <div className="mx-auto my-6 h-px w-16 bg-[#D4A853]" />

          <p className="mx-auto max-w-2xl text-[clamp(1rem,2vw,1.25rem)] leading-relaxed text-[#F5F0E8]/75">
            Booze, brews, weekly specials, and Texas-style kitchen favorites
            in a relaxed neighborhood setting.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="tel:8326441861"
            className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[#D4A853] px-8 py-4 text-sm font-semibold tracking-wide text-[#1A1A1A] transition-all duration-300 hover:bg-[#E8C97A]"
          >
            Reserve for a Party
          </a>

          <a
            href="#events-preview"
            className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#F5F0E8]/20 px-8 py-4 text-sm font-medium tracking-wide text-[#F5F0E8] transition-all duration-300 hover:border-[#D4A853] hover:text-[#D4A853]"
          >
            See What’s On
          </a>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="h-6 w-6 text-[#D4A853]/55" />
        </motion.div>
      </div>
    </section>
  );
}