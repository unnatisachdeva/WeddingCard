"use client";

import { useEffect } from "react";

/**
 * Publishes the hero scroll offset as `--hero-scroll` on <html>, which the
 * `.parallax` layers use to drift at different depths. Stops updating once
 * the hero is well out of view, and stays off for reduced motion.
 */
export function ScrollParallax() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = Math.min(window.scrollY, window.innerHeight * 1.2);
      root.style.setProperty("--hero-scroll", y.toFixed(1));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
