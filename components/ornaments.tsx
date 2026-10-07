/**
 * Hand-drawn SVG ornaments. All artwork is inline vector, inherits
 * `currentColor`, and is purely decorative (hidden from assistive tech).
 */

type SvgProps = { className?: string; style?: React.CSSProperties };

const line = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function petal(r1: number, r2: number, w: number) {
  const mid = -(r1 + r2) / 2;
  return `M0 ${-r1} Q${w} ${mid} 0 ${-r2} Q${-w} ${mid} 0 ${-r1}Z`;
}

function sparkle(x: number, y: number, s: number) {
  return `M${x} ${y - s}Q${x} ${y} ${x + s} ${y}Q${x} ${y} ${x} ${y + s}Q${x} ${y} ${x - s} ${y}Q${x} ${y} ${x} ${y - s}Z`;
}

/* ------------------------------------------------------------------ */

export function Mandala({ className, style }: SvgProps) {
  const layers = [
    { count: 8, r1: 8, r2: 34, w: 10 },
    { count: 12, r1: 42, r2: 92, w: 16 },
    { count: 24, r1: 100, r2: 150, w: 12 },
    { count: 36, r1: 160, r2: 204, w: 8 },
    { count: 48, r1: 214, r2: 242, w: 5 },
  ];
  return (
    <svg viewBox="-260 -260 520 520" className={className} style={style} aria-hidden="true" {...line} strokeWidth={0.8}>
      {[38, 96, 155, 209, 248].map((r) => (
        <circle key={r} r={r} />
      ))}
      {layers.map((l) =>
        Array.from({ length: l.count }, (_, i) => (
          <path key={`${l.r1}-${i}`} d={petal(l.r1, l.r2, l.w)} transform={`rotate(${(360 / l.count) * i})`} />
        )),
      )}
      {Array.from({ length: 72 }, (_, i) => (
        <circle key={`d${i}`} cy={-254} r={1.3} fill="currentColor" stroke="none" transform={`rotate(${5 * i})`} />
      ))}
    </svg>
  );
}

export function Divider({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 240 24" className={className} aria-hidden="true" {...line} strokeWidth={0.9}>
      <path d="M4 12H96M144 12H236" />
      <path d="M120 3L129 12L120 21L111 12Z" />
      <path d="M120 8L124 12L120 16L116 12Z" fill="currentColor" />
      <circle cx="103" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="137" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Lotus({ className, style }: SvgProps) {
  return (
    <svg viewBox="0 0 80 42" className={className} style={style} aria-hidden="true" {...line} strokeWidth={1}>
      <path d="M40 4Q49 20 40 36Q31 20 40 4Z" />
      <path d="M40 36Q22 31 14 13Q31 16 40 36Z" />
      <path d="M40 36Q58 31 66 13Q49 16 40 36Z" />
      <path d="M40 36Q17 39 4 28Q22 24 40 36Z" />
      <path d="M40 36Q63 39 76 28Q58 24 40 36Z" />
      <path d="M22 40H58" />
    </svg>
  );
}

export function CornerFlourish({ className }: SvgProps) {
  const scallops = Array.from({ length: 5 }, (_, i) => 44 + i * 14);
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true" {...line} strokeWidth={0.9}>
      <path d="M4 118V22Q4 4 22 4H118" />
      <path d="M14 118V36Q14 14 36 14H118" strokeWidth={0.6} />
      <path d={`M44 14${scallops.map((x) => `Q${x + 7} 24 ${x + 14} 14`).join("")}`} strokeWidth={0.6} />
      <path d={`M14 44${scallops.map((y) => `Q24 ${y + 7} 14 ${y + 14}`).join("")}`} strokeWidth={0.6} />
      <path d="M26 26C46 18 62 32 54 48C47 60 30 56 32 45C34 38 43 38 44 45" />
      <path d="M26 26Q30 36 24 46" strokeWidth={0.6} />
      <circle cx="9" cy="9" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Event icons                                                        */
/* ------------------------------------------------------------------ */

export function RingIcon({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...line} strokeWidth={1.2}>
      <circle cx="32" cy="41" r="14" />
      <circle cx="32" cy="41" r="10.5" strokeWidth={0.7} />
      <path d="M32 13L39 20L32 27L25 20Z" />
      <path d="M25 20H39M29 20L32 27L35 20M29 20L32 13L35 20" strokeWidth={0.7} />
      <path d={sparkle(50, 14, 4)} strokeWidth={0.8} />
      <path d={sparkle(14, 20, 3)} strokeWidth={0.8} />
    </svg>
  );
}

export function HaldiIcon({ className }: SvgProps) {
  const marigold = (x: number, y: number, s: number) => (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {Array.from({ length: 10 }, (_, i) => (
        <path key={i} d={petal(2.5, 8, 3.5)} transform={`rotate(${36 * i})`} strokeWidth={0.7 / s} />
      ))}
      <circle r="2.2" fill="currentColor" stroke="none" />
    </g>
  );
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...line} strokeWidth={1.2}>
      {marigold(21, 28, 0.85)}
      {marigold(43, 28, 0.85)}
      {marigold(32, 22, 1)}
      <path d="M10 38H54Q52 54 32 54Q12 54 10 38Z" />
      <path d="M16 43Q32 47 48 43" strokeWidth={0.7} />
      <path d="M25 54L23 59H41L39 54" />
    </svg>
  );
}

export function NightIcon({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...line} strokeWidth={1.2}>
      <path d="M38 10A22 22 0 1 0 54 46A17 17 0 1 1 38 10Z" />
      <path d={sparkle(50, 16, 5)} strokeWidth={0.9} />
      <path d={sparkle(14, 14, 3.5)} strokeWidth={0.9} />
      <path d={sparkle(56, 32, 2.5)} strokeWidth={0.9} />
      <circle cx="44" cy="8" r="1" fill="currentColor" stroke="none" />
      <circle cx="8" cy="30" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MandapIcon({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...line} strokeWidth={1.2}>
      <path d="M32 3V9" />
      <circle cx="32" cy="2.5" r="1.4" fill="currentColor" stroke="none" />
      <path d="M12 26Q32 4 52 26" />
      <path d="M9 26H55" />
      <path d="M16 26V52M48 26V52" />
      <path d="M19 26V52M45 26V52" strokeWidth={0.6} />
      <path d="M19 31Q25.5 39 32 31Q38.5 39 45 31" strokeWidth={0.8} />
      <path d="M32 50Q26.5 44 32 37Q37.5 44 32 50Z" />
      <path d="M26 52H38" strokeWidth={0.8} />
      <path d="M8 52H56M5 57H59" />
    </svg>
  );
}

export const eventIcons = {
  ring: RingIcon,
  haldi: HaldiIcon,
  night: NightIcon,
  wedding: MandapIcon,
} as const;

/* ------------------------------------------------------------------ */

export function SealRing({ className }: SvgProps) {
  return (
    <svg viewBox="-100 -100 200 200" className={className} aria-hidden="true" {...line} strokeWidth={0.8}>
      <circle r="97" />
      <circle r="90" strokeDasharray="0.5 5" strokeWidth={1.6} />
      <circle r="83" />
      {Array.from({ length: 24 }, (_, i) => (
        <path key={i} d={petal(70, 81, 3)} transform={`rotate(${15 * i})`} strokeWidth={0.6} />
      ))}
      <circle r="66" strokeWidth={0.5} />
    </svg>
  );
}
