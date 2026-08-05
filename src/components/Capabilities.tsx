"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { CapabilityRow } from "./CapabilityRow";

const CAPABILITIES = [
  {
    title: "Custom pricing",
    desc: "Each client's own pricing, applied the moment they order, not worked out by hand.",
  },
  {
    title: "Invoicing",
    desc: "Invoices built straight from the order that came in, not typed up after it.",
  },
  {
    title: "Debt collection",
    desc: "Overdue accounts get followed up on their own, so it's nobody's job to remember.",
  },
  {
    title: "Account holds",
    desc: "Accounts past due get put on hold, no more orders going out until the balance is sorted.",
  },
  {
    title: "Remittance matching",
    desc: "Payments matched to the invoices they're for, so Friday stops being a guessing game.",
  },
];

export function Capabilities() {
  const rowRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start 0.85", "end 0.35"],
  });

  return (
    <section
      id="capabilities"
      className="seam scroll-mt-24 bg-[var(--color-bg-raised)]"
      style={{ paddingTop: "var(--space-section-md)", paddingBottom: "var(--space-section-md)" }}
    >
      <Container>
        <Reveal>
          <span className="text-[11px] font-medium tracking-wide text-[var(--color-muted)] uppercase">
            Added as you need it
          </span>
          <h2 className="mt-2 font-display text-[26px] font-bold leading-[1.2] tracking-tight text-[var(--color-ink)] [text-wrap:balance] md:text-[32px]">
            Once the portal is trusted, we add capability one piece at a time.
          </h2>
        </Reveal>

        <div ref={rowRef} className="relative mt-8">
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-0 hidden w-px bg-[var(--color-line)] sm:block"
          />
          <motion.div
            aria-hidden="true"
            className="absolute top-0 left-0 hidden w-px origin-top bg-[var(--color-accent)] sm:block"
            style={{ bottom: 0, scaleY: reduceMotion ? 0 : scrollYProgress }}
          />
          <div className="sm:pl-5">
            {CAPABILITIES.map((cap, i) => (
              <CapabilityRow
                key={cap.title}
                title={cap.title}
                desc={cap.desc}
                index={i}
                count={CAPABILITIES.length}
                scrollYProgress={scrollYProgress}
                reduceMotion={Boolean(reduceMotion)}
              />
            ))}
            <div className="border-t border-[var(--color-line)]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
