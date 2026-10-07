import type { CSSProperties } from "react";
import { seeded } from "@/lib/random";

const rand = seeded(2111);
const DUST = Array.from({ length: 40 }, () => ({
  left: rand() * 100,
  top: rand() * 100,
  size: 1 + rand() * 2.2,
  duration: 7 + rand() * 9,
  delay: -rand() * 16,
  rise: 16 + rand() * 40,
}));

const tones = {
  maroon: "bg-[radial-gradient(ellipse_at_50%_0%,#6b1828_0%,#4a0f1b_55%,#3b0a14_100%)]",
  velvet: "bg-[radial-gradient(ellipse_at_50%_42%,#6b1828_0%,#3b0a14_55%,#1c040a_100%)]",
} as const;

/**
 * A section backdrop: rich base colour, fine grain, soft vignette and
 * slowly twinkling gold dust. Fills its nearest positioned ancestor.
 */
export function DustBackdrop({ tone = "maroon", count = DUST.length }: { tone?: keyof typeof tones; count?: number }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className={`absolute inset-0 ${tones[tone]}`} />
      <div className="bg-grain absolute inset-0 opacity-60 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.35)_100%)]" />
      {DUST.slice(0, count).map((d, i) => (
        <span
          key={i}
          className="dust absolute rounded-full"
          style={
            {
              left: `${d.left}%`,
              top: `${d.top}%`,
              width: d.size,
              height: d.size,
              "--rise": `-${d.rise}px`,
              animation: `twinkle ${d.duration}s ease-in-out ${d.delay}s infinite`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
