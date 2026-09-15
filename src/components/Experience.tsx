import { experience } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Experience
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-line">
          {experience.map((role, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="grid gap-4 py-10 sm:grid-cols-[160px_1fr] sm:gap-10">
                <p className="text-sm uppercase tracking-[0.15em] text-ink-faint">
                  {role.range}
                </p>
                <div>
                  <h3 className="font-display text-2xl text-ink sm:text-3xl">
                    {role.org}
                  </h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.15em] text-ink-soft">
                    {role.title}
                  </p>
                  <p className="mt-4 max-w-2xl text-ink-soft">
                    {role.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
