"use client";

import { useRef } from "react";
import { useReducedMotion, useScroll } from "framer-motion";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { ScrollStepCard } from "./ScrollStepCard";
import { ProcessPath } from "./ProcessPath";
import { ProcessLoopBack } from "./ProcessLoopBack";

const STEPS = [
  {
    n: "01",
    title: "Audit",
    desc: "One real conversation, twenty minutes. We map where your orders break down, and you keep that map either way.",
  },
  {
    n: "02",
    title: "Proposal",
    desc: "Two or three real options within 48 hours, built around what we actually found. In writing, with a timeline.",
  },
  {
    n: "03",
    title: "Build",
    desc: "We build it with you, so your own team can explain it without us in the room.",
  },
  {
    n: "04",
    title: "Prove it",
    desc: "Once you trust it is working, we come back and find the next thing worth fixing.",
  },
];

export function HowItWorks() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    // "start center"/"end center" maps 0..1 to the scroll distance of the
    // card row's own height, which on a single desktop row is short enough
    // that all four thresholds crossed almost together. Tracking from just
    // above the viewport to just below it spreads the same 0..1 range over
    // a realistic scroll distance so the cards actually light up in order.
    target: timelineRef,
    offset: ["start 0.85", "end 0.35"],
  });

  return (
    <section
      id="how-it-works"
      className="seam scroll-mt-24"
      style={{ paddingTop: "var(--space-section-lg)", paddingBottom: "var(--space-section-lg)" }}
    >
      <Container>
        <div className="max-w-2xl">
          <Reveal variant="clip">
            <h2 className="font-display text-[32px] font-bold leading-[1.1] tracking-tight text-[var(--color-ink)] md:text-[var(--text-h2)]">
              How we work.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[16px] leading-relaxed text-[var(--color-muted)]">
              We audit before we build. No two operators need the same
              mix, so the audit decides yours.
            </p>
          </Reveal>
        </div>

        <div ref={timelineRef} className="relative mt-16">
          <div className="hidden lg:block">
            <ProcessPath scrollYProgress={scrollYProgress} reduceMotion={Boolean(reduceMotion)} />
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:-mt-3">
            {STEPS.map((step, i) => (
              <ScrollStepCard
                key={step.n}
                label={step.n}
                title={step.title}
                desc={step.desc}
                index={i}
                count={STEPS.length}
                scrollYProgress={scrollYProgress}
                reduceMotion={Boolean(reduceMotion)}
              />
            ))}
          </div>
          <div className="hidden lg:block">
            <ProcessLoopBack />
          </div>
          <p className="mt-8 text-center text-[12px] font-medium tracking-wide text-[var(--color-muted)] lg:hidden">
            Then we come back and find the next thing.
          </p>
        </div>
      </Container>
    </section>
  );
}
