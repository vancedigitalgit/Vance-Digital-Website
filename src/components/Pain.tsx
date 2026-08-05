import { BleedRight } from "./Container";
import { Reveal } from "./Reveal";
import { ChaosFeed } from "./ChaosFeed";

export function Pain() {
  return (
    <section
      id="the-problem"
      className="seam scroll-mt-24"
      style={{ paddingTop: "var(--space-section-md)", paddingBottom: "var(--space-section-md)" }}
    >
      <BleedRight>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-5 md:pr-6">
            <Reveal variant="clip">
              <h2 className="font-display leading-[1.05] font-bold tracking-tight text-[var(--color-ink)] text-[36px] md:text-[var(--text-h2-lg)]">
                Orders come in four different ways.{" "}
                <span className="text-[var(--color-muted)]">
                  All of them get retyped by hand.
                </span>
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-7 md:pr-8">
            <Reveal delay={0.1}>
              <ChaosFeed />
            </Reveal>
          </div>
        </div>
      </BleedRight>
    </section>
  );
}
