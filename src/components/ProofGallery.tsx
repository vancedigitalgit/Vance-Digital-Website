"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const SLIDES = [
  {
    src: "/images/portal/admin-dashboard.png",
    width: 1440,
    height: 900,
    alt: "Dashboard screen, Adlees Fresh portal build",
    caption: "Dashboard",
  },
  {
    src: "/images/portal/details/detail-orders-tall.png",
    width: 1116,
    height: 665,
    alt: "Orders screen, Adlees Fresh portal build",
    caption: "Order detail",
  },
  {
    src: "/images/portal/admin-orders.png",
    width: 1440,
    height: 900,
    alt: "Full orders list, Adlees Fresh portal build",
    caption: "Orders list",
  },
  {
    src: "/images/portal/customer-shop.png",
    width: 1440,
    height: 900,
    alt: "Customer ordering screen, Adlees Fresh portal build",
    caption: "Customer ordering",
  },
  {
    src: "/images/portal/details/detail-cutoff.png",
    width: 372,
    height: 497,
    alt: "Order cutoff time detail, Adlees Fresh portal build",
    caption: "Cutoff times",
  },
  {
    src: "/images/portal/details/detail-notices.png",
    width: 1104,
    height: 223,
    alt: "Notices detail, Adlees Fresh portal build",
    caption: "Notices",
  },
];

export function ProofGallery({
  activeIndex,
  onOpen,
  onClose,
}: {
  activeIndex: number | null;
  onOpen: (index: number) => void;
  onClose: () => void;
}) {
  const isOpen = activeIndex !== null;
  const current = isOpen ? SLIDES[activeIndex] : null;
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onOpen((activeIndex! + 1) % SLIDES.length);
      if (e.key === "ArrowLeft") onOpen((activeIndex! - 1 + SLIDES.length) % SLIDES.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, activeIndex, onOpen, onClose]);

  return (
    <>
      <div className="gallery-strip">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => onOpen(i)}
            className="group overflow-hidden rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-raised)] text-left transition-colors hover:border-[var(--color-accent)]/50"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              width={slide.width}
              height={slide.height}
              className="h-32 w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <figcaption className="border-t border-[var(--color-line)] bg-[var(--color-bg-raised)] px-2.5 py-1.5 text-[11px] font-semibold text-[var(--color-ink)]">
              {slide.caption}
            </figcaption>
          </button>
        ))}
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpen && current && (
              <motion.div
                key="proof-gallery-modal"
                className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
                role="dialog"
                aria-modal="true"
                aria-label={`${current.caption}, Adlees Fresh portal build`}
                onClick={onClose}
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:top-6 sm:right-6"
                >
                  &#10005;
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpen((activeIndex! - 1 + SLIDES.length) % SLIDES.length);
                  }}
                  aria-label="Previous screenshot"
                  className="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
                >
                  &#8592;
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpen((activeIndex! + 1) % SLIDES.length);
                  }}
                  aria-label="Next screenshot"
                  className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
                >
                  &#8594;
                </button>

                <motion.div
                  className="flex max-h-full max-w-4xl flex-col items-center gap-4"
                  onClick={(e) => e.stopPropagation()}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-[var(--color-bg-raised)]">
                    <Image
                      src={current.src}
                      alt={current.alt}
                      width={current.width}
                      height={current.height}
                      className="max-h-[75vh] w-auto object-contain"
                    />
                  </div>
                  <p className="text-[13px] font-semibold text-white/80">
                    {current.caption} &middot; {activeIndex! + 1} / {SLIDES.length} &middot; working demo, sample data
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
