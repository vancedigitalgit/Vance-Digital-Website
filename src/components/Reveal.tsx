"use client";

import { ReactNode, useEffect, useRef } from "react";

const VARIANT_CLASSES = {
  rise: { out: "reveal-out", in: "reveal-in" },
  scale: { out: "reveal-scale-out", in: "reveal-scale-in" },
  clip: { out: "reveal-clip-out", in: "reveal-clip-in" },
} as const;

/*
  Content is fully visible in the server-rendered HTML. The hidden state is
  only applied after mount, so crawlers, link previews, and no-JS visitors
  always see the page. Elements already on screen at mount (the hero, most
  often) play their entrance immediately instead of being skipped; elements
  still below the fold wait for IntersectionObserver.
*/
export function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "rise",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: keyof typeof VARIANT_CLASSES;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const classes = VARIANT_CLASSES[variant];
    el.classList.add(classes.out);

    if (el.getBoundingClientRect().top < window.innerHeight - 60) {
      // Already visible on mount: play the entrance immediately instead of
      // skipping it. Double rAF so the browser paints the "out" state first
      // and the class swap actually transitions.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => el.classList.add(classes.in));
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add(classes.in);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [variant]);

  return (
    <div
      ref={ref}
      className={className}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
