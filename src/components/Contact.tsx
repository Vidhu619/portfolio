"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("mailto:")) {
      e.preventDefault();
      navigator.clipboard.writeText(href.replace("mailto:", ""));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-line px-6 py-28 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-ink-faint">
            Contact
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display mt-6 text-balance text-4xl tracking-tight text-ink sm:text-6xl">
            Let&rsquo;s build something useful.
          </h2>
        </Reveal>
        <div className="mt-12 flex flex-wrap gap-3">
          {profile.links.map((l, i) => (
            <Reveal key={l.label} delay={0.16 + i * 0.05}>
              <motion.a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  l.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                onClick={(e) => handleClick(e, l.href)}
                whileTap={{ scale: 0.96 }}
                className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-ink/5 px-5 py-3 text-sm uppercase tracking-[0.15em] text-ink-soft"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-300 ease-out group-hover:scale-x-100" />
                <span className="relative transition-colors duration-300 group-hover:text-paper">
                  {l.href.startsWith("mailto:") && copied
                    ? "Copied!"
                    : l.label}
                </span>
                <span className="relative transition-all duration-300 group-hover:translate-x-1 group-hover:text-paper">
                  &rarr;
                </span>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-28 flex max-w-6xl flex-col justify-between gap-4 border-t border-line pt-8 text-xs uppercase tracking-[0.15em] text-ink-faint sm:flex-row">
        <span>{profile.name}</span>
        <span>&copy; {new Date().getFullYear()}</span>
      </div>
    </section>
  );
}
