"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";

const WAVE_D = "M12.5,20 Q25,2 37.5,20 Q50,38 62.5,20 Q75,2 87.5,20";
const POINTS = [12.5, 37.5, 62.5, 87.5];

/*
  The line connecting the four steps. Draws left to right as the visitor
  scrolls (reusing the same pathLength-from-scroll idiom as the header's
  scroll-progress bar), and dips instead of sitting flat so the row doesn't
  read as another bordered card grid. Under reduced motion it renders fully
  drawn, matching Reveal's "static default is already correct" contract.
*/
export function ProcessPath({
  scrollYProgress,
  reduceMotion,
}: {
  scrollYProgress: MotionValue<number>;
  reduceMotion: boolean;
}) {
  const drawn = useTransform(scrollYProgress, (v) => (reduceMotion ? 1 : v));

  return (
    <svg
      viewBox="0 0 100 40"
      preserveAspectRatio="none"
      className="h-10 w-full md:h-14"
      aria-hidden="true"
    >
      <path
        d={WAVE_D}
        fill="none"
        stroke="var(--color-line)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <motion.path
        d={WAVE_D}
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        style={{ pathLength: drawn }}
      />
      {POINTS.map((x) => (
        <circle
          key={x}
          cx={x}
          cy={20}
          r={1.8}
          fill="var(--color-bg)"
          stroke="var(--color-line)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}
