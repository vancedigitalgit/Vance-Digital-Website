const DOT: Record<"green" | "blue", string> = {
  green: "bg-[var(--color-accent-green)]",
  blue: "bg-[var(--color-accent-blue)]",
};

export function StatusTag({ label, tone }: { label: string; tone: "green" | "blue" }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-line)] bg-[var(--color-bg-raised)] px-3 py-1 font-display text-[11px] font-semibold tracking-[0.04em] text-[var(--color-ink)]">
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${DOT[tone]}`} />
      {label}
    </span>
  );
}
