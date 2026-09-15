import { intro } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Intro() {
  return (
    <section className="px-6 py-28 sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[220px_1fr]">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-ink-faint">
            About
          </p>
        </Reveal>
        <div className="space-y-7">
          {intro.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="font-display max-w-3xl text-balance text-xl leading-relaxed text-ink sm:text-2xl">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
