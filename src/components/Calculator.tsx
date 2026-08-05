"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionCta } from "./SectionCta";

function clamp(value: number, min: number, max: number) {
  if (Number.isNaN(value)) return min;
  return Math.min(max, Math.max(min, value));
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/*
  Tweens the displayed number toward `target` instead of snapping to it, so
  the calculator's one payoff moment (the big hours figure) actually moves
  when a visitor edits an input. Skips the tween entirely under reduced
  motion.
*/
function useTweenedNumber(target: number, duration = 400) {
  const [display, setDisplay] = useState(target);
  const fromRef = useRef(target);
  const rafRef = useRef<number | null>(null);
  // Reduced motion bypasses the tween state entirely (returned directly
  // below) rather than syncing `display` to `target` from inside the
  // effect.
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reduceMotion) {
      fromRef.current = target;
      return;
    }
    const from = fromRef.current;
    const to = target;
    if (from === to) return;

    const start = performance.now();
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = easeOutCubic(t);
      setDisplay(from + (to - from) * eased);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        fromRef.current = to;
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, reduceMotion]);

  return reduceMotion ? target : display;
}

function InlineNumberField({
  value,
  onChange,
  min,
  max,
  width,
  label,
}: {
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  width: string;
  label: string;
}) {
  return (
    <input
      type="number"
      inputMode="numeric"
      aria-label={label}
      title="Click to edit"
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(clamp(e.target.valueAsNumber, min, max))}
      className={`rule-underline mx-1 inline-block text-center align-baseline font-display font-bold text-[var(--color-accent)] ${width}`}
    />
  );
}

export function Calculator() {
  const [orders, setOrders] = useState(120);
  const [minutes, setMinutes] = useState(4);

  const hours = (orders * minutes) / 60;
  const displayedHours = useTweenedNumber(hours);
  const rounded =
    displayedHours >= 10
      ? Math.round(displayedHours)
      : Math.round(displayedHours * 10) / 10;

  return (
    <div
      id="calculator"
      className="seam seam-b scroll-mt-24 bg-[var(--color-bg-deep)]"
      style={{ paddingTop: "var(--space-section-lg)", paddingBottom: "var(--space-section-lg)" }}
    >
      <Container>
        <Reveal>
          <p className="mx-auto max-w-3xl text-center font-display text-[26px] leading-[1.3] font-semibold text-[var(--color-ink)] md:text-[40px]">
            If you get{" "}
            <InlineNumberField
              value={orders}
              onChange={setOrders}
              min={0}
              max={2000}
              width="w-[4ch]"
              label="Orders in a typical week"
            />{" "}
            orders a week, and typing one in takes{" "}
            <InlineNumberField
              value={minutes}
              onChange={setMinutes}
              min={0}
              max={60}
              width="w-[2.5ch]"
              label="Minutes to type one order in"
            />{" "}
            minutes, that&apos;s
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-6 max-w-2xl text-center">
            <div className="font-display text-[72px] font-bold leading-none tracking-tight text-[var(--color-ink)] md:text-[var(--text-display)]">
              {rounded}
              <span className="text-[28px] font-semibold text-[var(--color-muted)] md:text-[38px]">
                {" "}
                hours a week
              </span>
            </div>
            <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-[var(--color-muted)]">
              Spent typing orders that already arrived once. That is time
              that could be going into serving more customers, not typing.
              Your numbers, not ours. Nothing is saved or sent anywhere.
            </p>
          </div>
        </Reveal>

        <SectionCta
          heading="That time is going somewhere every week, whether you plan for it or not."
        />
      </Container>
    </div>
  );
}
