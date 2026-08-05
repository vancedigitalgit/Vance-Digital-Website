import { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

/*
  Full-bleed row: left edge lines up with Container's max-w-6xl reading
  column (same inset math as --bleed-inset), right edge runs to the
  viewport edge on desktop. Used in place of Container for the handful
  of sections that intentionally break out of the centered layout.
  Stays a normal padded block on mobile (no bleed at that width).
*/
export function BleedRight({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full pr-6 md:pr-0 ${className}`}
      style={{ paddingLeft: "var(--bleed-inset)" }}
    >
      {children}
    </div>
  );
}
