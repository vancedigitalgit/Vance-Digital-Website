"use client";

import { useEffect, useState } from "react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { Button } from "./Button";

const NAV_ITEMS = [
  { label: "Order Intake", href: "#the-problem" },
  { label: "Portal", href: "#inside-the-portal" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Proof", href: "#proof" },
  { label: "Digital Accelerator", href: "#digital-accelerator" },
  { label: "Calculator", href: "#calculator" },
  { label: "FAQ", href: "#faq" },
];

// Reuses the page's one signature motif (see .seam in globals.css, the
// accent streak that travels across every section boundary) instead of
// inventing new decoration: a static hairline that's always there, plus an
// accent gradient streak that sweeps across it on hover. Snaps back off
// screen instantly on mouse-leave (0ms transition) so it always replays as
// a clean left-to-right sweep on the next hover, never a visible reverse.
function SeamSweep({ edge, active }: { edge: "top" | "bottom"; active: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 overflow-hidden ${
        edge === "top" ? "top-full border-t" : "bottom-full border-b"
      }`}
      style={{ height: 2, borderColor: "var(--color-line)" }}
    >
      <span
        className="absolute inset-y-0 w-2/5 motion-reduce:hidden"
        style={{
          background: "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
          transform: active ? "translateX(220%)" : "translateX(-140%)",
          transition: active ? "transform 700ms ease-out" : "transform 0ms",
        }}
      />
    </div>
  );
}

function EdgeTab({
  edge,
  label,
  forceExpanded,
  onClick,
  ariaLabel,
}: {
  edge: "top" | "bottom";
  label: string;
  forceExpanded: boolean;
  onClick: () => void;
  ariaLabel: string;
}) {
  const [hovered, setHovered] = useState(false);
  const expanded = hovered || forceExpanded;

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 z-[60] flex justify-center ${
        edge === "top" ? "top-[58px] sm:top-0" : "bottom-0"
      }`}
    >
      <div
        className="pointer-events-auto relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <SeamSweep edge={edge} active={expanded} />

        <button
          type="button"
          onClick={onClick}
          onFocus={() => setHovered(true)}
          onBlur={() => setHovered(false)}
          aria-label={ariaLabel}
          className={`font-display flex items-center justify-center border border-[var(--color-line)] bg-[var(--color-bg-raised)] font-semibold uppercase tracking-[0.04em] text-[var(--color-ink)] transition-all duration-300 hover:text-[var(--color-accent)] ${
            edge === "top"
              ? "rounded-b-lg shadow-[0_3px_0_0_rgba(28,24,17,0.85)] hover:shadow-[0_4px_0_0_rgba(28,24,17,0.85)]"
              : "rounded-t-lg shadow-[0_-3px_0_0_rgba(28,24,17,0.85)] hover:shadow-[0_-4px_0_0_rgba(28,24,17,0.85)]"
          } ${
            expanded
              ? "h-[64px] w-[160px] text-[18px] sm:h-[96px] sm:w-[220px] sm:text-[24px]"
              : "h-[30px] w-[112px] text-[13px] sm:h-[36px] sm:w-[136px]"
          }`}
        >
          {label}
        </button>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[padding,background-color,backdrop-filter,border-color] duration-300 ${
          condensed
            ? "border-b border-[var(--color-line)] bg-[var(--color-bg)]/85 pt-3 pb-2 backdrop-blur-md"
            : "border-b border-transparent bg-transparent pt-5 pb-2 md:pt-7"
        }`}
      >
        <Container className="flex items-center justify-between gap-4">
          <a href="#top" onClick={() => setOpen(false)}>
            <Logo />
          </a>

          <Button size="sm" className={open ? "max-sm:invisible" : ""}>
            <span className="sm:hidden">Book Audit</span>
            <span className="hidden sm:inline">Book Your Audit</span>
          </Button>
        </Container>
      </header>

      <EdgeTab
        edge="top"
        label="Menu"
        forceExpanded={open}
        onClick={() => setOpen((v) => !v)}
        ariaLabel={open ? "Close menu" : "Open menu"}
      />

      <div
        id="site-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-[var(--color-bg)] transition-opacity duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <Container className="md:grid md:grid-cols-[2fr_1fr] md:items-center md:gap-14">
          <nav className="grid grid-cols-1 xl:grid-cols-2 xl:gap-x-8">
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`group flex items-baseline gap-4 border-b border-[var(--color-line)] py-4 transition-all duration-300 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
              >
                <span className="font-display shrink-0 text-[13px] text-[var(--color-muted)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[19px] font-bold tracking-tight text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)] sm:whitespace-nowrap sm:text-[28px] xl:text-[32px]">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          <div
            className={`mt-10 rounded-2xl border border-[var(--color-line)] bg-[var(--color-bg-raised)] p-7 transition-all duration-300 md:mt-0 ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: open ? `${80 + NAV_ITEMS.length * 60}ms` : "0ms" }}
          >
            <h3 className="font-display text-[20px] font-bold leading-tight text-[var(--color-ink)]">
              Ready to stop retyping orders by hand?
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-muted)]">
              Twenty minutes, no pitch, no price. Just a map of where your
              order intake breaks down.
            </p>
            <div className="mt-5">
              <Button size="lg" className="w-full">
                Book Your Audit
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {open && (
        <EdgeTab edge="bottom" label="Close" forceExpanded onClick={() => setOpen(false)} ariaLabel="Close menu" />
      )}
    </>
  );
}
