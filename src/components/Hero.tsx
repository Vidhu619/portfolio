"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/content";
import SweepLink from "@/components/SweepLink";

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-svh flex-col justify-center px-6 pt-24 sm:px-10"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs uppercase tracking-[0.25em] text-ink-faint"
        >
          {profile.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-6 text-balance text-[13vw] leading-[0.95] tracking-tight text-ink sm:text-[9vw] lg:text-[7.5rem]"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-sm uppercase tracking-[0.3em] text-ink-soft"
        >
          {profile.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-10 max-w-xl text-balance text-2xl italic text-ink-soft sm:text-3xl"
        >
          &ldquo;{profile.tagline}&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-sm tracking-wide text-ink-faint"
        >
          {profile.subline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap gap-4 text-sm uppercase tracking-[0.15em]"
        >
          <SweepLink href="#experience" variant="solid">
            View Experience
          </SweepLink>
          <SweepLink href="#work" variant="outline">
            View Selected Work
          </SweepLink>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="mx-auto mt-20 flex w-full max-w-6xl items-center gap-3 text-xs uppercase tracking-[0.2em] text-ink-faint"
      >
        <span className="h-px w-10 bg-line-strong/40" />
        Scroll
      </motion.div>
    </section>
  );
}
