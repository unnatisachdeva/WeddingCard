import type { CSSProperties } from "react";

export type RevealKind = "up" | "down" | "left" | "right" | "scale" | "blur" | "fade";

/** Props that opt an element into the scroll-reveal system (see RevealObserver). */
export function reveal(kind: RevealKind = "up", delay = 0) {
  return {
    "data-reveal": kind,
    style: { "--delay": `${delay}ms` } as CSSProperties,
  };
}

/** Stagger delay for elements animated with a CSS class (e.g. `hero-in`). */
export function delay(ms: number): CSSProperties {
  return { "--delay": `${ms}ms` } as CSSProperties;
}
