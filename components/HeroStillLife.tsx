import type { CSSProperties } from "react";
import { seeded } from "@/lib/random";

/*
 * Pieces of the hero "still life": soft window light, an open cream
 * envelope, dried pampas and scattered petals. All decorative.
 */

/* ------------------------------------------------------------------ */
/*  Window light & shadow                                              */
/* ------------------------------------------------------------------ */

export function LightBeams() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
      <div className="light-beams absolute -top-[30%] -left-[40%] h-[120%] w-[160%] origin-top-left">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent_0_9%,rgba(255,252,244,0.55)_9%_17%,transparent_17%_27%,rgba(255,252,244,0.4)_27%_31%,transparent_31%_46%)] opacity-70 mix-blend-screen blur-[28px]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent_0_17%,rgba(120,88,58,0.16)_17%_19%,transparent_19%_31%,rgba(120,88,58,0.12)_31%_34%,transparent_34%_46%)] mix-blend-multiply blur-[18px]" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Envelope (back + open flap behind the card, pocket in front)       */
/* ------------------------------------------------------------------ */

const ENV_BOX = "absolute bottom-0 left-1/2 w-(--env-w) -translate-x-1/2";

export function EnvelopeBack() {
  return (
    <div aria-hidden="true" className={`${ENV_BOX} z-0`}>
      <svg viewBox="0 0 1000 400" className="block h-auto w-full overflow-visible">
        <defs>
          <linearGradient id="hero-env-back" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e3d5c0" />
            <stop offset="100%" stopColor="#d9c8af" />
          </linearGradient>
          <linearGradient id="hero-env-flap" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#ddcdb6" />
            <stop offset="100%" stopColor="#ece2d2" />
          </linearGradient>
        </defs>
        <path d="M0 64L470 -138Q500 -150 530 -138L1000 64Z" fill="url(#hero-env-flap)" />
        <path d="M0 64L470 -138Q500 -150 530 -138L1000 64" fill="none" stroke="#fffaf0" strokeOpacity="0.7" strokeWidth="1.5" />
        <rect x="0" y="62" width="1000" height="338" fill="url(#hero-env-back)" />
      </svg>
    </div>
  );
}

export function EnvelopeFront() {
  return (
    <div aria-hidden="true" className={`${ENV_BOX} z-20 drop-shadow-[0_-10px_18px_rgba(110,80,50,0.16)]`}>
      <svg viewBox="0 0 1000 400" className="block h-auto w-full">
        <defs>
          <linearGradient id="hero-env-side" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ebe0cf" />
            <stop offset="100%" stopColor="#f2e9db" />
          </linearGradient>
          <linearGradient id="hero-env-bottom" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f7f0e4" />
            <stop offset="100%" stopColor="#ece1cf" />
          </linearGradient>
        </defs>
        <path d="M0 62L484 236Q500 243 484 250L0 400Z" fill="url(#hero-env-side)" />
        <path d="M1000 62L516 236Q500 243 516 250L1000 400Z" fill="url(#hero-env-side)" />
        <path d="M0 400L450 214Q500 190 550 214L1000 400Z" fill="url(#hero-env-bottom)" />
        <path d="M0 400L450 214Q500 190 550 214L1000 400" fill="none" stroke="#fffdf7" strokeWidth="1.6" />
        <path d="M0 62L484 236M1000 62L516 236" fill="none" stroke="#fffaf0" strokeOpacity="0.8" strokeWidth="1.4" />
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Dried pampas & baby's breath                                       */
/* ------------------------------------------------------------------ */

type Stem = { x0: number; cx: number; cy: number; x1: number; y1: number; plume: number; seed: number };

function bez(t: number, a: number, b: number, c: number) {
  return (1 - t) * (1 - t) * a + 2 * (1 - t) * t * b + t * t * c;
}

function Plume({ s }: { s: Stem }) {
  const rand = seeded(s.seed);
  const strokes = [];
  const y0 = 600;
  for (let i = 0; i < s.plume; i++) {
    const t = 0.42 + (i / s.plume) * 0.58;
    const px = bez(t, s.x0, s.cx, s.x1);
    const py = bez(t, y0, s.cy, s.y1);
    // tangent direction of the stem
    const dx = 2 * (1 - t) * (s.cx - s.x0) + 2 * t * (s.x1 - s.cx);
    const dy = 2 * (1 - t) * (s.cy - y0) + 2 * t * (s.y1 - s.cy);
    const base = Math.atan2(dy, dx);
    const side = i % 2 === 0 ? 1 : -1;
    const spread = (0.35 + rand() * 0.55) * side;
    const taper = Math.sin(Math.PI * Math.min(1, (t - 0.38) / 0.64));
    const len = (10 + rand() * 22) * (0.45 + taper * 0.75);
    const a = base + spread;
    const ex = px + Math.cos(a) * len;
    const ey = py + Math.sin(a) * len;
    const mx = px + Math.cos(base + spread * 0.4) * len * 0.6;
    const my = py + Math.sin(base + spread * 0.4) * len * 0.6;
    strokes.push(
      <path
        key={i}
        d={`M${px.toFixed(1)} ${py.toFixed(1)}Q${mx.toFixed(1)} ${my.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`}
        stroke={rand() > 0.45 ? "#d8c29d" : "#eadcc0"}
        strokeOpacity={0.55 + rand() * 0.4}
        strokeWidth={0.7 + rand() * 0.9}
      />,
    );
  }
  return (
    <g fill="none" strokeLinecap="round">
      <path d={`M${s.x0} ${y0}Q${s.cx} ${s.cy} ${s.x1} ${s.y1}`} stroke="#b89c74" strokeWidth="1.6" />
      {strokes}
    </g>
  );
}

function BabysBreath({ x, y, seed }: { x: number; y: number; seed: number }) {
  const rand = seeded(seed);
  const buds = Array.from({ length: 16 }, () => ({ dx: (rand() - 0.5) * 46, dy: -rand() * 40, r: 1.6 + rand() * 1.6 }));
  return (
    <g>
      <path d={`M${x} 600Q${x - 6} ${y + 120} ${x} ${y}`} stroke="#b9a07c" strokeWidth="1" fill="none" />
      {buds.map((b, i) => (
        <g key={i}>
          <path d={`M${x} ${y}L${x + b.dx} ${y + b.dy}`} stroke="#c2ab88" strokeWidth="0.5" />
          <circle cx={x + b.dx} cy={y + b.dy} r={b.r} fill="#fffaf2" stroke="#e2d3bb" strokeWidth="0.4" />
        </g>
      ))}
    </g>
  );
}

const STEMS: Stem[] = [
  { x0: 110, cx: 90, cy: 300, x1: 120, y1: 30, plume: 150, seed: 7 },
  { x0: 120, cx: 160, cy: 330, x1: 186, y1: 110, plume: 120, seed: 19 },
  { x0: 104, cx: 50, cy: 360, x1: 36, y1: 150, plume: 100, seed: 31 },
];

export function Pampas({ className = "", style, flip = false }: { className?: string; style?: CSSProperties; flip?: boolean }) {
  return (
    <div aria-hidden="true" className={`pampas ${className}`} style={style}>
      <svg viewBox="0 0 220 600" className={`h-full w-full overflow-visible ${flip ? "-scale-x-100" : ""}`}>
        {STEMS.map((s) => (
          <Plume key={s.seed} s={s} />
        ))}
        <BabysBreath x={150} y={300} seed={5} />
        <BabysBreath x={70} y={340} seed={11} />
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Scattered petals                                                   */
/* ------------------------------------------------------------------ */

const STILL_PETALS = [
  { left: "9%", top: "13%", size: 18, rot: 30, delay: 0 },
  { left: "84%", top: "8%", size: 14, rot: -40, delay: -2 },
  { left: "6%", top: "46%", size: 15, rot: 70, delay: -4 },
  { left: "91%", top: "40%", size: 12, rot: 10, delay: -1 },
  { left: "17%", top: "70%", size: 13, rot: -20, delay: -3 },
];

export function StillPetals() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
      {STILL_PETALS.map((p, i) => (
        <svg
          key={i}
          viewBox="0 0 20 28"
          className="absolute animate-[float_8s_ease-in-out_infinite] drop-shadow-[2px_4px_3px_rgba(110,80,50,0.18)]"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size * 1.4, rotate: `${p.rot}deg`, animationDelay: `${p.delay}s` }}
        >
          <path d="M10 1C17 8 19 17 10 27C1 17 3 8 10 1Z" fill="#fbf5ea" />
          <path d="M10 5V22" stroke="#e7dac4" strokeWidth="0.7" />
        </svg>
      ))}
    </div>
  );
}
