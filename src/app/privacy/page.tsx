import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Vance Digital",
  description: "How Vance Digital handles information on this site.",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-2 text-[13px] text-[var(--color-muted)]">
            Last updated 21 July 2026.
          </p>

          <div className="mt-10 max-w-2xl space-y-8 text-[15px] leading-relaxed text-[var(--color-muted)]">
            <section>
              <h2 className="font-display text-[17px] font-semibold text-[var(--color-ink)]">
                Who we are
              </h2>
              <p className="mt-3">
                This site is operated by Vance Digital (ABN 17 423 231 414),
                Gold Coast, Australia. For anything on this page, contact us
                at{" "}
                <a
                  href="mailto:inigop@vancedigital.com.au"
                  className="text-[var(--color-ink)] underline underline-offset-2"
                >
                  inigop@vancedigital.com.au
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-[17px] font-semibold text-[var(--color-ink)]">
                What this site collects
              </h2>
              <p className="mt-3">
                This site does not have a contact form and does not run
                analytics or tracking scripts. The order calculator on the
                homepage runs entirely in your browser. The numbers you type
                into it are never saved or sent anywhere.
              </p>
              <p className="mt-3">
                If you book a call through our Calendly link, or email or
                call us directly, the information you provide (name, contact
                details, and anything you tell us about your business) is
                handled by us and by Calendly under its own privacy policy.
                We use it only to prepare for and run that conversation, and
                for related follow up.
              </p>
              <p className="mt-3">
                Our hosting provider may keep standard server logs (such as
                IP address and browser type) for security and reliability.
                We do not use these logs to identify individual visitors.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[17px] font-semibold text-[var(--color-ink)]">
                What we do with client information
              </h2>
              <p className="mt-3">
                For clients we work with directly, any business or order
                data we handle as part of building or running a portal is
                covered by our client agreement, not this page. We do not
                sell client or visitor information to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[17px] font-semibold text-[var(--color-ink)]">
                Changes
              </h2>
              <p className="mt-3">
                If this policy changes, we will update the date at the top
                of this page.
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
