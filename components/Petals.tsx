import type { CSSProperties } from "react";

/* Fixed (not random) values so server and client markup always match. */
const PETALS = [
  { left: 6, size: 14, dur: 19, delay: 0, x: 60, r: 380, tone: "#b8945a", o: 0.55 },
  { left: 18, size: 10, dur: 23, delay: 6, x: -40, r: -320, tone: "#d9a77c", o: 0.45 },
  { left: 31, size: 12, dur: 21, delay: 11, x: 80, r: 460, tone: "#c9962b", o: 0.5 },
  { left: 47, size: 9, dur: 26, delay: 3, x: -70, r: 300, tone: "#b8945a", o: 0.45 },
  { left: 59, size: 13, dur: 20, delay: 14, x: 50, r: -420, tone: "#d9a77c", o: 0.4 },
  { left: 72, size: 11, dur: 24, delay: 8, x: -50, r: 360, tone: "#c9962b", o: 0.5 },
  { left: 84, size: 15, dur: 22, delay: 2, x: 40, r: -380, tone: "#b8945a", o: 0.5 },
  { left: 93, size: 9, dur: 27, delay: 16, x: -60, r: 440, tone: "#d9a77c", o: 0.4 },
];

/** Slowly drifting marigold & rose petals. Disabled for reduced motion. */
export function Petals({ count = PETALS.length }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {PETALS.slice(0, count).map((p, i) => (
        <svg
          key={i}
          viewBox="0 0 20 28"
          className="petal absolute -top-10"
          style={
            {
              left: `${p.left}%`,
              width: p.size,
              height: p.size * 1.4,
              color: p.tone,
              "--petal-x": `${p.x}px`,
              "--petal-r": `${p.r}deg`,
              "--petal-opacity": p.o,
              animation: `drift ${p.dur}s linear ${p.delay}s infinite`,
              opacity: 0,
            } as CSSProperties
          }
        >
          <path d="M10 1C17 8 19 17 10 27C1 17 3 8 10 1Z" fill="currentColor" />
          <path d="M10 5V23" stroke="#fbf6ec" strokeOpacity="0.35" strokeWidth="0.8" fill="none" />
        </svg>
      ))}
    </div>
  );
}
