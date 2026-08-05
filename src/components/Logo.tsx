export function Logo({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "ink";
}) {
  const isInk = tone === "ink";
  const textColor = isInk ? "var(--color-ink-text)" : "var(--color-ink)";
  const accentColor = isInk ? "var(--color-ink-accent)" : "var(--color-accent)";

  return (
    <div className={`flex flex-col leading-none ${className}`}>
      <span
        className="font-display text-[20px] font-bold tracking-tight"
        style={{ color: textColor }}
      >
        Vance<span style={{ color: accentColor }}>.</span>
      </span>
      <span
        className="mt-1 font-display text-[10px] font-extralight tracking-[0.3em]"
        style={{ color: textColor, opacity: 0.7 }}
      >
        DIGITAL
      </span>
    </div>
  );
}
