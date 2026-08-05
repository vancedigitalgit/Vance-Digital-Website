"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { Reveal } from "./Reveal";
import { useScrollReached } from "@/lib/useScrollReached";

// Same ghost-ink-tint -> solid-accent transform as ScrollStepCard's numeral,
// so this row list and the HowItWorks tile grid read as one system.
const GHOST_TO_ACCENT: [string, string] = [
  "color-mix(in srgb, var(--color-ink) 22%, transparent)",
  "var(--color-accent)",
];

export function CapabilityRow({
  title,
  desc,
  index,
  count,
  scrollYProgress,
  reduceMotion,
}: {
  title: string;
  desc: string;
  index: number;
  count: number;
  scrollYProgress: MotionValue<number>;
  reduceMotion: boolean;
}) {
  const reached = useScrollReached(scrollYProgress, index, count, reduceMotion);
  const numberColor = useTransform(reached, [0, 1], GHOST_TO_ACCENT);
  const borderColor = useTransform(
    reached,
    [0, 1],
    ["var(--color-line)", "var(--color-accent)"]
  );

  return (
    <Reveal delay={Math.min(index * 0.05, 0.2)}>
      <motion.div
        style={{ borderColor }}
        className="group grid grid-cols-[2.25rem_1fr] items-baseline gap-x-4 gap-y-1 border-t-2 py-3.5 transition-colors duration-200 hover:bg-[var(--color-bg)] sm:grid-cols-[3rem_15rem_1fr] sm:items-start sm:gap-x-6 sm:py-5"
      >
        <motion.span
          aria-hidden="true"
          style={{ color: numberColor }}
          className="font-display text-[26px] leading-none font-bold tabular-nums transition-transform duration-200 group-hover:translate-x-0.5 sm:text-[30px]"
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>
        <h4 className="font-display text-[15px] font-bold leading-snug text-[var(--color-ink)] transition-transform duration-200 group-hover:translate-x-0.5 sm:text-[16px] sm:pt-1.5">
          {title}
        </h4>
        <p className="col-span-2 text-[13px] leading-relaxed text-[var(--color-muted)] sm:col-span-1 sm:pt-1.5 sm:text-[14px]">
          {desc}
        </p>
      </motion.div>
    </Reveal>
  );
}
