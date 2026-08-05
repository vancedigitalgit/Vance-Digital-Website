import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { ChannelTag } from "./ChaosFeed";

const QUESTIONS = [
  {
    q: "What does it cost?",
    a: "No packages, no price list. The audit works out what your business actually needs, then you get a written proposal within 48 hours with real options. Nothing is quoted before we understand how you run.",
  },
  {
    q: "Do we have to replace Cin7, Xero, or MYOB?",
    a: "No. Vance Portal is built to work alongside what you already run, not instead of it. Nothing gets thrown out.",
  },
  {
    q: "What if my customers keep ordering by phone or fax?",
    a: "They can, and many will. Every channel keeps working. The portal is what catches all of them in one place, so nobody has to retype anything.",
    tags: ["Phone", "Fax"] as const,
  },
  {
    q: "How long does it take to build?",
    a: "It depends on what the audit finds, every business is running something different underneath. You will have a written timeline in the proposal before anything starts, and the same two people with you through the whole build.",
  },
  {
    q: "Who do we actually deal with?",
    a: "Renzo and Inigo. The person you meet on the audit is the person who builds it and the person who answers when you call. No account managers, no ticket queue.",
    serif: true,
  },
  {
    q: "What happens after it launches?",
    a: "A named person stays reachable, in plain language, and never disappears. Your own team can explain what we built without us in the room.",
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      className="seam scroll-mt-24"
      style={{ paddingTop: "var(--space-section-lg)", paddingBottom: "var(--space-section-lg)" }}
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:sticky md:top-28 md:col-span-4 md:self-start">
            <Reveal>
              <div className="mb-4 flex items-center gap-2 text-[13px] font-semibold tracking-[0.15em] text-[var(--color-muted)] uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                Straight answers
              </div>
              <h2 className="font-display text-[32px] font-bold leading-[1.15] tracking-tight text-[var(--color-ink)] md:text-[var(--text-h2)]">
                The questions we get asked first.
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <div className="border-t border-[var(--color-line)]">
              {QUESTIONS.map((item, i) => (
                <Reveal key={item.q} delay={Math.min(i * 0.05, 0.2)}>
                  <details className="group border-b border-[var(--color-line)]">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]">
                      <span className="font-display text-[17px] font-semibold text-[var(--color-ink)] md:text-[19px]">
                        {item.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className="font-display shrink-0 text-[22px] leading-none font-bold text-[color-mix(in_srgb,var(--color-ink)_28%,transparent)] transition-colors duration-200 group-open:text-[var(--color-accent)]"
                      >
                        +
                      </span>
                    </summary>
                    <div className="max-w-2xl pb-6">
                      {"tags" in item && item.tags && (
                        <div className="mb-2.5 flex gap-1.5">
                          {item.tags.map((tag) => (
                            <ChannelTag key={tag} channel={tag} />
                          ))}
                        </div>
                      )}
                      <p
                        className={
                          "serif" in item && item.serif
                            ? "font-serif text-[17px] leading-relaxed text-[var(--color-ink)] italic"
                            : "text-[15px] leading-relaxed text-[var(--color-muted)]"
                        }
                      >
                        {item.a}
                      </p>
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
