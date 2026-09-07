"use client";

import Image from "next/image";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

const FOUNDERS = [
  { name: "Renzo Bozzo", src: "/images/founders/renzo.jpg" },
  { name: "Inigo Pennequin", src: "/images/founders/inigo.jpeg" },
];

export function About() {
  return (
    <section
      id="about"
      data-tone="ink"
      className="seam scroll-mt-24"
      style={{ paddingTop: "var(--space-section-lg)", paddingBottom: "var(--space-section-lg)" }}
    >
      <Container>
        <Reveal>
          <blockquote className="max-w-3xl">
            <p className="text-[28px] leading-[1.25] font-medium text-[var(--color-ink-text)] italic [text-wrap:balance] md:text-[var(--text-h2-lg)]">
              &ldquo;Repetitive, rule-based work was never a human&apos;s
              job. It just became one because there was no other
              option. There is now.&rdquo;
            </p>
            <footer className="mt-6 text-[13px] font-semibold tracking-wide text-[var(--color-ink-muted)]">
              The Vance Digital mission
            </footer>
          </blockquote>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-14 gap-y-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal delay={0.05}>
              <span className="text-[12px] font-semibold tracking-[0.15em] text-[var(--color-ink-muted)] uppercase">
                About us
              </span>
              <h2 className="mt-3 font-display text-[var(--text-h3)] font-bold leading-[1.18] tracking-tight text-[var(--color-ink-text)]">
                No account managers. Just us.
              </h2>
              <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-[var(--color-ink-muted)]">
                Renzo and Inigo run the audit, build the portal, and
                answer when you call. There is no handover to a
                support queue once the contract is signed, and no
                software you are left to figure out on your own.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            {FOUNDERS.map((founder, i) => (
              <Reveal key={founder.name} delay={0.1 + i * 0.06}>
                <div
                  className={`group flex items-center gap-4 py-5 ${
                    i !== 0 ? "border-t border-[var(--color-ink-line)]" : ""
                  }`}
                >
                  <div className="relative h-[88px] w-[88px] shrink-0 overflow-hidden rounded-full bg-[var(--color-ink-bg-raised)]">
                    <Image
                      src={founder.src}
                      alt={`${founder.name}, co-founder of Vance Digital`}
                      fill
                      sizes="88px"
                      className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                  </div>
                  <div>
                    <div className="font-display text-[17px] font-bold text-[var(--color-ink-text)]">
                      {founder.name}
                    </div>
                    <div className="mt-0.5 text-[12px] font-medium tracking-wide text-[var(--color-ink-muted)] uppercase">
                      Co-founder, Vance Digital
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
