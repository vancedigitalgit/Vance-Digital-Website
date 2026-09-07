"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { ProofGallery } from "./ProofGallery";
import { SectionCta } from "./SectionCta";
import { StatusTag } from "./StatusTag";

export function Proof() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="proof"
      className="seam scroll-mt-24 bg-[var(--color-bg-raised)]"
      style={{ paddingTop: "var(--space-section-lg)", paddingBottom: "var(--space-section-lg)" }}
    >
      <Container>
        <Reveal>
          <span className="text-[12px] font-semibold tracking-[0.15em] text-[var(--color-muted)] uppercase">
            Case study
          </span>

          <div className="mt-3 grid w-fit grid-cols-[auto_auto_auto] items-center gap-x-4 gap-y-1.5">
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
        </Reveal>

        <Reveal delay={0.1} variant="scale" className="mt-8 max-w-3xl">
          <ProofGallery
            activeIndex={activeIndex}
            onOpen={setActiveIndex}
            onClose={() => setActiveIndex(null)}
          />
        </Reveal>

        <Reveal delay={0.05}>
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

        <SectionCta
          heading="Every build starts with an audit. Yours would too."
        />
      </Container>
    </section>
  );
}
