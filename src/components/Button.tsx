"use client";

import { ReactNode, useRef } from "react";
import Link from "next/link";

const CALENDLY_URL = "https://calendly.com/inigop-vancedigital-s_ae/30min";

export function Button({
  children,
  size = "md",
  variant = "solid",
  className = "",
  href,
}: {
  children: ReactNode;
  size?: "md" | "lg" | "sm";
  variant?: "solid" | "ghost";
  className?: string;
  href?: string;
}) {
  const sizes = {
    sm: "px-5 py-2.5 text-[13px]",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4.5 text-base",
  };

  const variants = {
    solid:
      "bg-[var(--color-accent)] text-white shadow-[0_3px_0_0_rgba(28,24,17,0.85)] hover:brightness-110 hover:-translate-y-px hover:shadow-[0_4px_0_0_rgba(28,24,17,0.85)] active:translate-y-px active:shadow-[0_1px_0_0_rgba(28,24,17,0.85)]",
    ghost:
      "border border-[var(--color-ink)]/25 text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
  };

  const classes = `font-display group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold uppercase tracking-[0.04em] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] ${sizes[size]} ${variants[variant]} ${className}`;

  const arrow = (
    <span className="transition-transform duration-200 group-hover:translate-x-0.5">
      &#8594;
    </span>
  );

  // A light magnetic pull: the button nudges toward the cursor within its
  // own bounds and eases back on leave via the transition-all above.
  // Skipped on touch (no hover capability) and reduced motion.
  const magneticRef = useRef<HTMLAnchorElement>(null);
  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = magneticRef.current;
    if (!el) return;
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.3}px)`;
  };
  const onMouseLeave = () => {
    const el = magneticRef.current;
    if (!el) return;
    el.style.transform = "";
  };

  if (href && !href.startsWith("http")) {
    return (
      <Link
        href={href}
        ref={magneticRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={classes}
      >
        {children}
        {arrow}
      </Link>
    );
  }

  return (
    <a
      href={href ?? CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      ref={magneticRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={classes}
    >
      {children}
      {arrow}
    </a>
  );
}
