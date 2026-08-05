"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { Reveal } from "./Reveal";
import { useScrollReached } from "@/lib/useScrollReached";

// Ghost ink tint -> solid accent. Shared with CapabilityRow's numeral so
// both sections read as one typographic system.
const GHOST_TO_ACCENT: [string, string] = [
  "color-mix(in srgb, var(--color-ink) 22%, transparent)",
  "var(--color-accent)",
];

export function ScrollStepCard({
  label,
  title,
  desc,
  index,
  count,
  scrollYProgress,
  reduceMotion,
  titleClassName = "",
}: {
  label: string;
  title: string;
  desc: string;
  index: number;
  count: number;
  scrollYProgress: MotionValue<number>;
  reduceMotion: boolean;
  titleClassName?: string;
}) {
  const reached = useScrollReached(scrollYProgress, index, count, reduceMotion);
  const numeralColor = useTransform(reached, [0, 1], GHOST_TO_ACCENT);

  return (
    <Reveal delay={Math.min(index * 0.06, 0.18)}>
      <motion.div className="relative flex h-full flex-col gap-3">
        <motion.span
          aria-hidden="true"
          style={{ color: numeralColor }}
          className="font-display text-[44px] leading-none font-bold tabular-nums sm:text-[52px]"
        >
          {label}
        </motion.span>
        <h4
          className={`font-display text-[17px] leading-snug font-bold text-[var(--color-ink)] ${titleClassName}`}
        >
          {title}
        </h4>
        <p className="text-[14px] leading-relaxed text-[var(--color-muted)]">{desc}</p>
      </motion.div>
    </Reveal>
  );
}
