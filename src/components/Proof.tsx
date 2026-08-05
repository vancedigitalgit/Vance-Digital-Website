"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { ProofGallery } from "./ProofGallery";
import { SectionCta } from "./SectionCta";
import { StatusTag } from "./StatusTag";

const FOUNDERS = [
  { name: "Renzo Bozzo", src: "/images/founders/renzo.jpg" },
  { name: "Inigo Pennequin", src: "/images/founders/inigo.jpeg" },
];

export function Proof() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="proof"
      className="seam scroll-mt-24 bg-[var(--color-bg-deep)]"
      style={{ paddingTop: "var(--space-section-lg)", paddingBottom: "var(--space-section-lg)" }}
    >
      <Container>
        <Reveal>
          <blockquote className="max-w-3xl">
            <p className="font-serif text-[28px] leading-[1.25] font-medium text-[var(--color-ink)] italic [text-wrap:balance] md:text-[var(--text-h2-lg)]">
              &ldquo;Repetitive, rule-based work was never a human&apos;s
              job. It just became one because there was no other
              option. There is now.&rdquo;
            </p>
            <footer className="mt-6 text-[13px] font-semibold tracking-wide text-[var(--color-muted)]">
              The Vance Digital mission
            </footer>
          </blockquote>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal delay={0.05}>
              <span className="text-[12px] font-semibold tracking-[0.15em] text-[var(--color-muted)] uppercase">
                Case study
              </span>

              <div className="mt-3 grid grid-cols-[auto_auto_auto] items-center justify-items-center gap-x-4 gap-y-1.5">
                <span className="font-display text-[56px] leading-none font-bold tabular-nums text-[var(--color-ink)] md:text-[64px]">
                  4
                </span>
                <span className="font-display text-[24px] leading-none font-semibold text-[var(--color-muted)] md:text-[28px]">
                  &rarr;
                </span>
                <span className="font-display text-[56px] leading-none font-bold tabular-nums text-[var(--color-accent)] md:text-[64px]">
                  1
                </span>
                <span className="text-[11px] font-semibold tracking-[0.08em] text-[var(--color-muted)] uppercase">
                  order channels
                </span>
                <span />
                <span className="text-[11px] font-semibold tracking-[0.08em] text-[var(--color-accent)] uppercase">
                  one portal
                </span>
              </div>

              <Reveal delay={0.1} variant="scale" className="mt-6">
                <ProofGallery
                  activeIndex={activeIndex}
                  onOpen={setActiveIndex}
                  onClose={() => setActiveIndex(null)}
                />
              </Reveal>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveIndex(0)}
                  className="group flex items-center gap-2.5"
                >
                  <Image
                    src="/images/clients/adlees-logo-v2.png"
                    alt="Adlees Fresh"
                    width={1222}
                    height={632}
                    className="h-8 w-auto"
                  />
                  <span className="text-[12px] font-semibold text-[var(--color-accent)] underline decoration-[var(--color-accent)]/40 underline-offset-4 transition-colors group-hover:decoration-[var(--color-accent)]">
                    View the build &#8594;
                  </span>
                </button>
                <StatusTag label="Website: delivered" tone="green" />
                <StatusTag label="Portal: in progress" tone="blue" />
              </div>

              <p className="mt-5 max-w-lg text-[14px] leading-relaxed text-[var(--color-muted)]">
                Four different places to check, sorted out by hand every
                time. The portal is closing that gap, order by order,
                so the team spends less of the week untangling paper
                and more of it on customers.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <h2 className="font-display text-[var(--text-h3)] font-bold leading-[1.18] tracking-tight text-[var(--color-ink)]">
                Meet the founders.
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-[var(--color-muted)]">
                The person you meet on the audit builds your portal
                and answers when you call. No account managers, no
                ticket queue, no software you buy and figure out on
                your own.
              </p>
              <div className="mt-6">
                {FOUNDERS.map((founder, i) => (
                  <div
                    key={founder.name}
                    className={`flex items-center gap-4 py-4 ${
                      i !== 0 ? "border-t border-[var(--color-line)]" : ""
                    }`}
                  >
                    <Image
                      src={founder.src}
                      alt={`${founder.name}, co-founder of Vance Digital`}
                      width={48}
                      height={48}
                      className="h-[48px] w-[48px] rounded-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                    />
                    <div className="font-display text-[14px] font-semibold text-[var(--color-ink)]">
                      {founder.name}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <SectionCta
          heading="Every build starts with an audit. Yours would too."
        />
      </Container>
    </section>
  );
}
