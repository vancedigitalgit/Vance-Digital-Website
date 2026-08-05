"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

type Channel = "Phone" | "Text" | "Email" | "Fax";

const CHANNEL_DOT: Record<Channel, string> = {
  Phone: "bg-[var(--color-accent)]",
  Text: "bg-[var(--color-accent-blue)]",
  Email: "bg-[var(--color-accent-green)]",
  Fax: "bg-[var(--color-muted)]",
};

const CHANNEL_BORDER: Record<Channel, string> = {
  Phone: "var(--color-accent)",
  Text: "var(--color-accent-blue)",
  Email: "var(--color-accent-green)",
  Fax: "var(--color-muted)",
};

/*
  The same channel-tag idiom ChaosFeed uses for each message bubble,
  reusable standalone wherever the site needs to point at "one of the
  four channels" without repeating the whole animated feed. Keeps the
  motif recurring (Pain, Product, Faq) instead of a one-off flourish.
*/
export function ChannelTag({ channel, tone = "light" }: { channel: Channel; tone?: "light" | "ink" }) {
  const textClass = tone === "ink" ? "text-[var(--color-ink-muted)] border-[var(--color-ink-line)]" : "text-[var(--color-muted)] border-[var(--color-line)]";
  return (
    <span className={`inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 font-display text-[9px] font-semibold tracking-wide uppercase ${textClass}`}>
      <span className={`h-1 w-1 rounded-full ${CHANNEL_DOT[channel]}`} />
      {channel}
    </span>
  );
}

const MESSAGES: { channel: Channel; text: string; rot: number; tx: number }[] = [
  { channel: "Text", text: "2 boxes romas, 1 lettuce, the usual salad mix", rot: -2, tx: -8 },
  { channel: "Phone", text: "Voicemail 0:42. Can I add a tray of eggs to today's order", rot: 1.5, tx: 14 },
  { channel: "Email", text: "Re: this week's delivery, order attached again", rot: -1.5, tx: -10 },
  { channel: "Fax", text: "Incoming fax, 1 page, handwritten", rot: 2, tx: 16 },
  { channel: "Text", text: "can u add 3 cucumbers to my order? cheers", rot: -1, tx: -3 },
];

export function ChaosFeed() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.setAttribute("data-primed", "true");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-play", "true");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="overflow-x-hidden">
      <div className="flex items-center gap-2 px-6 pb-3">
        <span className="chaos-live h-2 w-2 rounded-full bg-[var(--color-accent)]" />
        <span className="text-[11px] font-medium tracking-wide text-[var(--color-muted)]">
          This morning, before 9am
        </span>
      </div>
      <ul className="relative px-6">
        {MESSAGES.map((m, i) => (
          <li
            key={m.text}
            className="chaos-item relative flex items-start gap-2.5 rounded-[3px] border-y border-r border-[var(--color-line)] bg-[var(--color-bg-raised)] px-3.5 py-2.5 shadow-[0_1px_0_rgba(0,0,0,0.05),0_8px_18px_-14px_rgba(0,0,0,0.3)]"
            style={
              {
                "--rot": `${m.rot}deg`,
                "--tx": `${m.tx}px`,
                marginTop: i === 0 ? 0 : "2px",
                zIndex: i + 1,
                animationDelay: `${(i * 0.22).toFixed(2)}s`,
                borderLeft: `3px solid ${CHANNEL_BORDER[m.channel]}`,
              } as CSSProperties
            }
          >
            <span className="shrink-0 font-display text-[9px] font-semibold tracking-wide text-[var(--color-muted)] uppercase">
              {m.channel}
            </span>
            <span className="text-[12px] leading-snug text-[var(--color-ink)]">
              {m.text}
            </span>
          </li>
        ))}
      </ul>
      <div className="px-6 pt-4 text-center text-[11px] text-[var(--color-muted)]">
        And it keeps coming. None of these are in a system yet.
      </div>
    </div>
  );
}
