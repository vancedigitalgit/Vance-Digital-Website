"use client";

import { useEffect } from "react";

/*
  Every .seam accent streak defaults to paused in CSS (still visible as a
  static hairline, just not moving). This is the one observer that starts
  each seam's loop when it actually enters the viewport and pauses it again
  when it leaves, instead of every seam on the page looping from load
  regardless of whether anyone can see it.
*/
export function SeamActivator() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(".seam"));
    if (elements.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.setAttribute(
            "data-seam-active",
            entry.isIntersecting ? "true" : "false"
          );
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 }
    );
    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
