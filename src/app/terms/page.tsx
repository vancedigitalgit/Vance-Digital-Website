import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Vance Digital",
  description: "Terms for using this site.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <Container className="py-20 md:py-28">
          <div className="mb-3 rounded-md border border-[var(--color-line)] bg-[var(--color-bg-raised)] px-4 py-3 text-[13px] text-[var(--color-muted)]">
            Draft. This page has not been reviewed by a lawyer and should be
            checked before relying on it.
          </div>
          <h1 className="font-display max-w-2xl text-[28px] font-bold leading-[1.18] tracking-tight text-[var(--color-ink)] md:text-[40px]">
            Terms of Service
          </h1>
          <p className="mt-2 text-[13px] text-[var(--color-muted)]">
            Last updated 21 July 2026.
          </p>

          <div className="mt-10 max-w-2xl space-y-8 text-[15px] leading-relaxed text-[var(--color-muted)]">
            <section>
              <h2 className="font-display text-[17px] font-semibold text-[var(--color-ink)]">
                Scope
              </h2>
              <p className="mt-3">
                These terms cover use of this website only. They do not
                cover any client project, build, or support agreement,
                which is set out separately in writing before work starts.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[17px] font-semibold text-[var(--color-ink)]">
                Using this site
              </h2>
              <p className="mt-3">
                This site, including the order calculator and the demo
                portal, is provided for information only. The demo portal
                uses sample data and does not represent a real business or
                real orders. The calculator is a rough estimate based on
                numbers you enter, not a quote.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[17px] font-semibold text-[var(--color-ink)]">
                No pricing on this site
              </h2>
              <p className="mt-3">
                We do not publish fixed prices or packages. Any figure
                discussed with you directly, verbally or in writing, is
                specific to that conversation and is not binding until set
                out in a signed proposal.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[17px] font-semibold text-[var(--color-ink)]">
                Intellectual property
              </h2>
              <p className="mt-3">
                The content, design, and code of this site belong to Vance
                Digital unless stated otherwise. You are welcome to link to
                it. Please do not copy it wholesale for your own use.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[17px] font-semibold text-[var(--color-ink)]">
                Contact
              </h2>
              <p className="mt-3">
                Questions about these terms can go to{" "}
                <a
                  href="mailto:inigop@vancedigital.com.au"
                  className="text-[var(--color-ink)] underline underline-offset-2"
                >
                  inigop@vancedigital.com.au
                </a>
                .
              </p>
            </section>
          </div>

          <Link
            href="/"
            className="mt-12 inline-block text-[13px] text-[var(--color-muted)] underline underline-offset-2 transition-colors hover:text-[var(--color-ink)]"
          >
            Back to home
          </Link>
        </Container>
      </main>
      <Footer />
    </>
  );
}
