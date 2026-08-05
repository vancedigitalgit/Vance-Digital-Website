import { useTransform, useSpring, type MotionValue } from "framer-motion";

/**
 * Springed 0→1 value that flips on once scrollYProgress crosses this item's
 * threshold. Under reduced motion it stays permanently at 0 (resting/ghost
 * state) rather than snapping straight to 1 or mid-animating: motion here is
 * an enhancement only, so "no motion" means "never animate", not "skip to
 * the end", matching Reveal.tsx's own no-JS/no-motion contract.
 */
export function useScrollReached(
  scrollYProgress: MotionValue<number>,
  index: number,
  count: number,
  reduceMotion: boolean
): MotionValue<number> {
  const threshold = (index + 0.5) / count;
  const reachedRaw = useTransform(scrollYProgress, (v) =>
    !reduceMotion && v >= threshold ? 1 : 0
  ) as MotionValue<number>;
  return useSpring(reachedRaw, { stiffness: 220, damping: 28 });
}
