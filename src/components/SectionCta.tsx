import { Button } from "./Button";

export function SectionCta({
  heading,
  subhead,
  tone = "light",
}: {
  heading: string;
  subhead?: string;
  tone?: "light" | "ink";
}) {
  const isInk = tone === "ink";

  return (
    <div
      className={`mt-16 flex flex-col items-center gap-4 border-t pt-12 text-center ${
        isInk ? "border-[var(--color-ink-line)]" : "border-[var(--color-line)]"
      }`}
    >
      <p
        className={`max-w-md text-[16px] leading-relaxed font-semibold ${
          isInk ? "text-[var(--color-ink-text)]" : "text-[var(--color-ink)]"
        }`}
      >
        {heading}
      </p>
      {subhead && (
        <p
          className={`max-w-md text-[13px] leading-relaxed ${
            isInk ? "text-[var(--color-ink-muted)]" : "text-[var(--color-muted)]"
          }`}
        >
          {subhead}
        </p>
      )}
      <div className="mt-2">
        <Button size="md">Contact Us</Button>
      </div>
    </div>
  );
}
