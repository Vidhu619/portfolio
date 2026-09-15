"use client";

import { useState } from "react";
import { profile } from "@/lib/content";
import ThemeToggle from "@/components/ThemeToggle";
import ResumeModal from "@/components/ResumeModal";

const sections = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleResumeClick = () => {
    setResumeOpen(true);
    const link = document.createElement("a");
    link.href = profile.resumeHref;
    link.download = "Vidhu Krishnan.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/0 bg-paper/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <a href="#top" className="font-display text-sm tracking-wide text-ink">
          {profile.name}
        </a>
        <div className="flex items-center gap-8">
          <nav className="hidden gap-8 text-xs uppercase tracking-[0.15em] text-ink-soft sm:flex">
            {sections.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="transition-colors hover:text-ink"
              >
                {s.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={handleResumeClick}
            className="hidden text-xs uppercase tracking-[0.15em] text-ink-soft transition-colors hover:text-ink sm:inline"
          >
            Resume
          </button>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="text-xs uppercase tracking-[0.15em] text-ink-soft transition-colors hover:text-ink sm:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-paper px-6 py-6 text-sm uppercase tracking-[0.15em] text-ink-soft sm:hidden">
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              onClick={() => setOpen(false)}
              className="py-3 transition-colors hover:text-ink"
            >
              {s.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              handleResumeClick();
            }}
            className="py-3 text-left transition-colors hover:text-ink"
          >
            Resume
          </button>
        </nav>
      )}

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </header>
  );
}
