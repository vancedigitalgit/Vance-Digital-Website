"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Container } from "./Container";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

export function FinalCta() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start end", "end start"],
  });
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [0, 0, 0] : [0, 1, 0]
  );

  return (
    <section
      data-tone="ink"
      className="seam text-center"
      style={{ paddingTop: "var(--space-section-xl)", paddingBottom: "var(--space-section-xl)" }}
    >
      <Container>
        <div ref={wrapRef} className="relative mx-auto max-w-xl">
          <motion.div
            aria-hidden="true"
            style={{ opacity: glowOpacity }}
            className="pointer-events-none absolute inset-[-16%] z-0 rounded-[999px] blur-3xl"
          >
            <div
              className="h-full w-full"
              style={{
                background:
                  "radial-gradient(ellipse 60% 55% at 50% 45%, rgba(232,98,42,0.28), transparent 70%)",
              }}
            />
          </motion.div>

          <Reveal className="glow-accent relative z-10">
            <h2 className="font-display leading-[0.98] font-bold tracking-[-0.02em] text-[var(--color-ink-text)] text-[36px] md:text-[var(--text-display)]">
              Ready to see where yours breaks down?
            </h2>
            <div className="mt-9 flex justify-center">
              <Button size="lg">Contact Us</Button>
            </div>
            <p className="mt-8 text-[13px] font-medium text-[var(--color-ink-text)]">
              Call Renzo or Inigo directly.
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-[var(--color-ink-muted)]">
              <a
                href="tel:+61405683743"
                className="transition-colors hover:text-[var(--color-ink-text)]"
              >
                0405 683 743
              </a>
              <a
                href="mailto:inigop@vancedigital.com.au"
                className="transition-colors hover:text-[var(--color-ink-text)]"
              >
                inigop@vancedigital.com.au
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
