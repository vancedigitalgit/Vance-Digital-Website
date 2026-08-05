import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "The Digital Accelerator | Vance Digital",
  description:
    "For businesses with no website, or one that no longer works for them. We build it, the same audit first way we build everything else.",
};

const PAIN_POINTS = [
  "Someone hears about your business, searches your name, and finds nothing.",
  "You're relying on word of mouth to carry the whole business.",
  "A competitor with a basic website looks more established than you, even when your work is better.",
];

const STEPS = [
  {
    n: "1",
    title: "Audit",
    desc: "One real conversation. We look at what you have online today, if anything, and what a customer sees when they search your name.",
  },
  {
    n: "2",
    title: "Proposal",
    desc: "A clear plan within 48 hours. What we'd build, and why.",
  },
  {
    n: "3",
    title: "Build",
    desc: "We build it with you, so you can explain your own site without us in the room.",
  },
  {
    n: "4",
    title: "Prove it, then keep going",
    desc: "Once it's live and working, we come back and find the next thing worth building.",
  },
];

const PROOF_ITEMS = [
  {
    name: "Adlees Fresh",
    detail:
      "Wholesale produce distributor, Gold Coast. We built their website first. We're now building them an ordering portal.",
  },
  {
    name: "San Marino Mantenimiento",
    detail: "Building maintenance company, Santiago, Chile. Website delivered.",
  },
  {
    name: "Fundación Tierra Digna",
    detail:
      "A foundation. Website delivered and live. We're now building them a second landing page.",
  },
];

export default function AcceleratorPage() {
  return (
    <>
      <Header />
      <main>
        <Container className="pt-32 pb-16 md:pt-40 md:pb-20">
          <span className="text-[12px] font-semibold tracking-[0.15em] text-[var(--color-muted)] uppercase">
            The Digital Accelerator
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-[36px] font-bold leading-[1.1] tracking-tight text-[var(--color-ink)] [text-wrap:balance] md:text-[52px]">
            If people can&apos;t find you online, you don&apos;t exist to
            them yet.
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-[var(--color-muted)]">
            A phone number and a listing on a map are not enough anymore.
            Someone hears about your business, looks you up, and finds
            nothing. They call someone else instead.
          </p>
        </Container>

        <section className="bg-[var(--color-bg-deep)] seam">
          <Container
            className="py-16 md:py-20"
          >
            <h2 className="font-display max-w-xl text-[24px] font-bold leading-[1.2] tracking-tight text-[var(--color-ink)] md:text-[28px]">
              What that actually costs you.
            </h2>
            <ul className="mt-8 flex flex-col gap-4">
              {PAIN_POINTS.map((point) => (
                <li
                  key={point}
                  className="rounded-xl border border-[var(--color-line)] bg-[var(--color-bg-raised)] px-5 py-4 text-[15px] leading-relaxed text-[var(--color-ink)]"
                >
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-[var(--color-muted)]">
              We build the website first. Once it&apos;s live and working
              for you, we come back and build the next thing your business
              actually needs.
            </p>
          </Container>
        </section>

        <section className="seam">
          <Container className="py-16 md:py-20">
            <h2 className="font-display text-[24px] font-bold leading-[1.2] tracking-tight text-[var(--color-ink)] md:text-[28px]">
              How we work.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--color-muted)]">
              Same process, no matter the industry. We audit before we
              build.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {STEPS.map((step) => (
                <div key={step.n} className="flex gap-4">
                  <span className="font-display flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-[13px] font-bold text-white">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-display text-[16px] font-semibold text-[var(--color-ink)]">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-[var(--color-muted)]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[var(--color-bg-deep)] seam">
          <Container className="py-16 md:py-20">
            <h2 className="font-display text-[24px] font-bold leading-[1.2] tracking-tight text-[var(--color-ink)] md:text-[28px]">
              What we&apos;ve built outside wholesale produce.
            </h2>
            <div className="mt-8 flex flex-col gap-4">
              {PROOF_ITEMS.map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl border border-[var(--color-line)] bg-[var(--color-bg-raised)] px-5 py-4"
                >
                  <div className="font-display text-[14px] font-semibold text-[var(--color-ink)]">
                    {item.name}
                  </div>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-[var(--color-muted)]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="seam">
          <Container className="flex flex-col items-center gap-5 py-16 text-center md:py-20">
            <h2 className="font-display max-w-lg text-[24px] font-bold leading-[1.2] tracking-tight text-[var(--color-ink)] md:text-[28px]">
              Tell us where your business is today. We&apos;ll tell you
              what it needs next.
            </h2>
            <Button size="md">Book a Call</Button>
            <Link
              href="/"
              className="mt-2 text-[13px] text-[var(--color-muted)] underline underline-offset-2 transition-colors hover:text-[var(--color-ink)]"
            >
              Back to home
            </Link>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
