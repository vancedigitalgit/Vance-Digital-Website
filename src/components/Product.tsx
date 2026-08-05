"use client";

import { useState } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { PortalDemo } from "./PortalDemo";
import { SectionCta } from "./SectionCta";
import { ChannelTag } from "./ChaosFeed";

const POINTS = [
  "Nothing lives in one person's head. Anyone on the team can see where an order stands.",
  "No one stops what they're doing to relay a call. Phone, text, email, and fax land in the same place.",
  "Your customer stops wondering if it landed. They hear back the moment it comes in.",
  "Your customer can skip the call entirely and place the order themselves.",
];

export function Product() {
  const [view, setView] = useState<"admin" | "client">("admin");

  return (
    <section
      id="inside-the-portal"
      data-tone="ink"
      className="seam scroll-mt-24"
      style={{ paddingTop: "var(--space-section-lg)", paddingBottom: "var(--space-section-lg)" }}
    >
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-2">
              <ChannelTag channel="Phone" tone="ink" />
              <ChannelTag channel="Text" tone="ink" />
              <ChannelTag channel="Email" tone="ink" />
              <ChannelTag channel="Fax" tone="ink" />
            </div>
            <h2 className="mt-4 font-display text-[32px] font-bold leading-[1.1] tracking-tight text-[var(--color-ink-text)] [text-wrap:balance] md:text-[var(--text-h2)]">
              We call it{" "}
              <span className="text-[var(--color-ink-accent)]">Vance Portal.</span>
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-[var(--color-ink-muted)]">
              The screen your team opens every morning, and the one your
              customers can use to skip the call entirely.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} variant="scale" className="mt-10">
          <div className="glow-accent">
            <PortalDemo view={view} onViewChange={setView} />
          </div>
          <p className="mt-4 text-center text-[13px] text-[var(--color-ink-muted)]">
            A real look inside the build, with sample data. Click through
            the menu or open an order.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 max-w-3xl border-t border-[var(--color-ink-line)] pt-8">
          <span className="text-[11px] font-medium tracking-wide text-[var(--color-ink-muted)] uppercase">
            What this solves
          </span>
          <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {POINTS.map((point, i) => (
              <Reveal key={point} delay={Math.min(i * 0.06, 0.18)}>
                <div className="flex gap-3.5 border-l-2 border-[var(--color-ink-line)] pl-3.5">
                  <p className="text-[15px] leading-relaxed font-medium text-[var(--color-ink-text)]">
                    {point}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <SectionCta
          tone="ink"
          heading="That's the same screen your team would actually run."
        />
      </Container>
    </section>
  );
}
