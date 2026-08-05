import { Container } from "./Container";
import { Reveal } from "./Reveal";

const PLATFORMS = ["Cin7", "Xero", "MYOB"];

export function IntegrationsStrip() {
  return (
    <div
      className="seam seam-b"
      style={{ paddingTop: "var(--space-section-tight)", paddingBottom: "var(--space-section-tight)" }}
    >
      <Container>
        <Reveal className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center sm:gap-3">
          <p className="text-[14px] leading-relaxed text-[var(--color-muted)]">
            Works alongside what you already run. Nothing gets replaced.
          </p>
          <p className="font-display text-[14px] font-semibold text-[var(--color-ink)]">
            {PLATFORMS.join("  ·  ")}
          </p>
        </Reveal>
      </Container>
    </div>
  );
}
