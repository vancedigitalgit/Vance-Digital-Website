"use client";

import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { LogoMarquee } from "./LogoMarquee";

export function AcceleratorTeaser() {
  return (
    <section
      id="digital-accelerator"
      className="seam bg-[var(--color-bg-raised)]"
      style={{ paddingTop: "var(--space-section-sm)", paddingBottom: "var(--space-section-sm)" }}
    >
      <Container>
        <Reveal>
          <span className="text-[11px] font-medium tracking-wide text-[var(--color-muted)] uppercase">
            Not ready for the portal yet
          </span>
          <h2 className="mt-2 font-display text-[28px] font-bold leading-[1.15] tracking-tight text-[var(--color-ink)] [text-wrap:balance] md:text-[36px]">
            Digital Accelerator
          </h2>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-[var(--color-muted)]">
            Everything above is built for a wholesaler ready to bring
            every order into one place. Not there yet? An outdated
            website, or no website at all, makes a customer hesitate
            before they ever pick up the phone. The Digital
            Accelerator fixes that first, wholesaler or not.
          </p>
        </Reveal>

        <Reveal delay={0.04} className="mt-10">
          <LogoMarquee />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <p className="text-[14px] leading-relaxed text-[var(--color-muted)]">
              No website yet, or one that no longer represents the
              business you have built?
            </p>
            <Button href="/accelerator" size="sm" variant="ghost">
              See how we do it
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
