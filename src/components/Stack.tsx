import { stack } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Stack() {
  return (
    <section className="border-t border-line px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-ink-faint">
            Technical Stack
          </p>
        </Reveal>
        <div className="mt-10 space-y-8">
          {stack.map((group, i) => (
            <Reveal key={group.category} delay={0.06 + i * 0.05}>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-ink-faint">
                  {group.category}
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-ink/5 px-4 py-2 text-sm text-ink-soft transition-colors hover:bg-ink/10 hover:text-ink sm:text-base"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
