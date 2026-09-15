import { areasOfExperience } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function AreasOfExperience() {
  return (
    <section className="border-t border-line px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            What I Build
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-4 max-w-xl text-ink-soft">
            Business domains and software categories I&rsquo;ve worked with
            professionally.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-4">
          {areasOfExperience.map((area, i) => (
            <Reveal key={area} delay={(i % 4) * 0.05}>
              <div className="border-t border-line-strong/60 pt-4">
                <span className="text-xs text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display mt-2 text-lg text-ink">{area}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
