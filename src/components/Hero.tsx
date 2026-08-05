import { Reveal } from "./Reveal";
import { Button } from "./Button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-[100dvh] min-h-[560px] items-center justify-center overflow-hidden"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero/produce-sorting-line-poster.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <video
        className="hero-video absolute inset-0 h-full w-full object-cover"
        poster="/images/hero/produce-sorting-line-poster.jpg"
        src="/videos/hero/produce-sorting-line.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 65% at 32% 48%, color-mix(in srgb, var(--color-bg) 76%, transparent) 0%, color-mix(in srgb, var(--color-bg) 54%, transparent) 50%, color-mix(in srgb, var(--color-bg) 30%, transparent) 100%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <h1 className="font-display leading-[1.05] font-bold tracking-[-0.03em] text-[var(--color-ink)] [text-wrap:balance]">
              <span className="text-[32px] sm:text-[44px] md:text-[58px] xl:text-[64px]">
                We build the order portal that ends{" "}
                <span className="text-[var(--color-accent)]">
                  phone, text, email, and fax
                </span>{" "}
                chaos.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-[var(--color-muted)] sm:text-[18px]">
              A custom order portal for wholesale food and produce businesses
              in Australia. No more retyping the same order twice.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-9 flex justify-start">
              <Button size="lg">Book Your Audit</Button>
            </div>
          </Reveal>
        </div>
      </div>

      <a
        href="#the-problem"
        aria-label="Scroll to learn more"
        className="absolute bottom-8 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-[var(--color-ink)]/15 bg-[var(--color-bg-raised)]/80 text-[var(--color-ink)] backdrop-blur-md transition-colors hover:border-[var(--color-ink)]/35"
      >
        <span aria-hidden="true">&#8595;</span>
      </a>
    </section>
  );
}
