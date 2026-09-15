"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { selectedWork } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function SelectedWork() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <section
      id="work"
      className="border-t border-line bg-contrast px-6 py-28 text-contrast-foreground sm:px-10"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-20">
        <Reveal>
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            Selected Work
          </h2>
        </Reveal>

        {selectedWork.map((project, i) => {
          const primaryLink = project.links[0];
          return (
            <div
              key={project.title}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setPos({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
              }}
              onMouseEnter={() => setHovered(project.title)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => {
                if (primaryLink) window.open(primaryLink.href, "_blank");
              }}
              className="relative cursor-pointer"
            >
              <AnimatePresence>
                {hovered === project.title && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    style={{ left: pos.x, top: pos.y }}
                    className="pointer-events-none absolute z-10 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-contrast-foreground text-[10px] uppercase tracking-[0.1em] text-contrast"
                  >
                    View &rarr;
                  </motion.div>
                )}
              </AnimatePresence>

              <Reveal delay={0.05}>
                <p className="text-xs uppercase tracking-[0.25em] text-contrast-foreground/50">
                  {project.eyebrow}
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-display text-balance text-5xl tracking-tight sm:text-7xl">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <span className="text-sm uppercase tracking-[0.15em] text-contrast-foreground/50">
                      {project.subtitle}
                    </span>
                  )}
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-contrast-foreground/70">
                  {project.description}
                </p>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="mt-10 flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-contrast-foreground/25 px-3 py-1 text-xs uppercase tracking-[0.1em] text-contrast-foreground/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.28}>
                <div className="mt-12 flex gap-8 text-sm uppercase tracking-[0.15em]">
                  {project.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="border-b border-contrast-foreground/40 pb-1 transition-colors hover:border-contrast-foreground"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </Reveal>

              {i < selectedWork.length - 1 && (
                <div className="mt-20 border-t border-contrast-foreground/15" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
