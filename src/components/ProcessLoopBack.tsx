/*
  A dashed return arc from step 4 back to step 1, under the four columns.
  This is the point of the layout: the process isn't a one-time checklist,
  it's a loop (audit, propose, build, prove, then find the next thing).
  Static, no scroll dependency, always fully visible.
*/
export function ProcessLoopBack() {
  return (
    <div className="mt-10 flex flex-col items-center gap-2 lg:mt-14">
      <svg
        viewBox="0 0 100 24"
        preserveAspectRatio="none"
        className="h-6 w-full"
        aria-hidden="true"
      >
        <path
          d="M87.5,2 C87.5,22 12.5,22 12.5,2"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.25"
          strokeDasharray="3 2.4"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <p className="font-display text-[12px] font-semibold tracking-[0.04em] text-[var(--color-muted)]">
        Then we come back and find the next thing.
      </p>
    </div>
  );
}
