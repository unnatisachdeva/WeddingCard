"use client";

import { useState } from "react";
import { wedding } from "@/lib/wedding";

type Phase = "closed" | "opening" | "gone";

const STORAGE_KEY = "av-gate-opened";
/** Matches the love-letter choreography in globals.css. */
const REVEAL_SITE_AT = 1300;
const UNMOUNT_AT = 2900;

/* Envelope geometry, as % of the screen: the flap's sides meet the edges at
   46% and its point — where the seal sits — is at 57%. The lace follows
   those two edges, so its angle is atan2(11% of height, half the width). */
const FLAP_CLIP = "[clip-path:polygon(0_0,100%_0,100%_46%,50%_57%,0_46%)]";
const LACE_ANGLE = "atan2(11dvh, 50vw)";

/* ------------------------------------------------------------------ */
/*  Burgundy cotton-paper cover                                        */
/* ------------------------------------------------------------------ */

function CoverArt({ hidden = false }: { hidden?: boolean }) {
  const { partnerOne, partnerTwo } = wedding.couple;
  return (
    <div className="absolute inset-0 bg-[#5c0a1c]" aria-hidden={hidden || undefined}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(160,24,52,0.55)_0%,transparent_62%)]" />
      <div className="bg-cotton absolute inset-0 opacity-35 mix-blend-soft-light" />
      <div className="bg-cotton absolute inset-0 opacity-20 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,transparent_45%,rgba(22,0,6,0.55)_100%)]" />

      {/* envelope: top flap (slightly lifted, lighter) and lower folds */}
      <div className={`absolute inset-0 bg-[linear-gradient(180deg,rgba(255,200,210,0.05),rgba(255,200,210,0.09))] ${FLAP_CLIP}`} />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path d="M0 46.6L50 58L100 46.6" fill="none" stroke="rgba(20,0,6,0.55)" strokeWidth="10" vectorEffect="non-scaling-stroke" style={{ filter: "blur(7px)" }} />
        <path d="M0 46L50 57.2L100 46" fill="none" stroke="rgba(255,190,200,0.22)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <path d="M0 100L46 66M100 100L54 66" fill="none" stroke="rgba(20,0,6,0.35)" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
        <path d="M0 99.4L46 65.4M100 99.4L54 65.4" fill="none" stroke="rgba(255,190,200,0.12)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>

      <div className="gate-hint absolute inset-x-0 top-[24%] px-6 text-center text-[#f1e6dc]">
        <p className="font-display text-[clamp(1.3rem,6vw,1.75rem)] tracking-[0.05em] [font-variant-caps:small-caps]">
          A Love Letter From
        </p>
        <p className="mt-1 font-script text-[clamp(2.6rem,12.5vw,4rem)] leading-[1.15] text-[#f6ede4] [text-shadow:0_2px_10px_rgba(20,2,6,0.35)]">
          {partnerOne} &amp; {partnerTwo}
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Lace ribbon                                                        */
/* ------------------------------------------------------------------ */

const LACE_H = 132;

/** Shared lace mask: a net body with scalloped, looped edges and picots. */
function LaceDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <pattern id="lace-net" width="40" height={LACE_H - 48} patternUnits="userSpaceOnUse" patternTransform="translate(0 24)">
          <rect width="40" height={LACE_H - 48} fill="white" />
          {/* rosette */}
          <circle cx="20" cy="42" r="3" fill="black" />
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <ellipse key={a} cx="20" cy="34" rx="2.6" ry="4.6" fill="black" transform={`rotate(${a} 20 42)`} />
          ))}
          {/* leaves */}
          {[
            [9, 28, 40],
            [31, 28, -40],
            [9, 56, -40],
            [31, 56, 40],
          ].map(([x, y, r]) => (
            <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="4.4" ry="1.7" fill="black" transform={`rotate(${r} ${x} ${y})`} />
          ))}
          {/* mesh */}
          {[10, 30].map((x) => (
            <g key={x} fill="black">
              <circle cx={x} cy="12" r="3.6" />
              <circle cx={x} cy="72" r="3.6" />
            </g>
          ))}
          {[0, 20, 40].map((x) => (
            <g key={x} fill="black">
              <circle cx={x} cy="12" r="1.5" />
              <circle cx={x} cy="72" r="1.5" />
            </g>
          ))}
          <path d="M0 38L4 42L0 46ZM40 38L36 42L40 46Z" fill="black" />
        </pattern>
        <pattern id="lace-scallop-top" width="40" height="26" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="27" r="17" fill="white" />
          <circle cx="20" cy="26" r="8.5" fill="black" />
          <circle cx="20" cy="26" r="4" fill="white" />
          <circle cx="11" cy="20" r="1.6" fill="black" />
          <circle cx="29" cy="20" r="1.6" fill="black" />
          <circle cx="20" cy="7" r="2.3" fill="white" />
          <circle cx="8" cy="12" r="1.8" fill="white" />
          <circle cx="32" cy="12" r="1.8" fill="white" />
        </pattern>
        <pattern id="lace-scallop-bottom" width="40" height="26" patternUnits="userSpaceOnUse" patternTransform={`translate(0 ${LACE_H - 26})`}>
          <circle cx="20" cy="-1" r="17" fill="white" />
          <circle cx="20" cy="0" r="8.5" fill="black" />
          <circle cx="20" cy="0" r="4" fill="white" />
          <circle cx="11" cy="6" r="1.6" fill="black" />
          <circle cx="29" cy="6" r="1.6" fill="black" />
          <circle cx="20" cy="19" r="2.3" fill="white" />
          <circle cx="8" cy="14" r="1.8" fill="white" />
          <circle cx="32" cy="14" r="1.8" fill="white" />
        </pattern>
        <filter id="lace-warp" x="-5%" y="-25%" width="110%" height="150%">
          <feTurbulence type="fractalNoise" baseFrequency="0.006 0.03" numOctaves="2" seed="4" />
          <feDisplacementMap in="SourceGraphic" scale="9" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <mask id="lace-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="5000" height={LACE_H}>
          <rect x="0" y="0" width="5000" height="26" fill="url(#lace-scallop-top)" />
          <rect x="0" y={LACE_H - 26} width="5000" height="26" fill="url(#lace-scallop-bottom)" />
          <rect x="0" y="24" width="5000" height={LACE_H - 48} fill="url(#lace-net)" />
          {/* woven rails along both edges of the net */}
          <rect x="0" y="24" width="5000" height="4" fill="white" />
          <rect x="0" y={LACE_H - 28} width="5000" height="4" fill="white" />
          <rect x="0" y="31" width="5000" height="1.4" fill="black" />
          <rect x="0" y={LACE_H - 32} width="5000" height="1.4" fill="black" />
        </mask>
        <linearGradient id="lace-shade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#86223a" />
          <stop offset="45%" stopColor="#6d1229" />
          <stop offset="100%" stopColor="#801d35" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function LaceBand() {
  return (
    <svg width="100%" height={LACE_H} className="block overflow-visible drop-shadow-[0_6px_5px_rgba(14,1,4,0.6)]" aria-hidden="true">
      <g filter="url(#lace-warp)">
        <rect width="100%" height={LACE_H} fill="url(#lace-shade)" mask="url(#lace-mask)" />
        <rect width="100%" height={LACE_H} fill="#f0a9b6" opacity="0.15" mask="url(#lace-mask)" transform="translate(-0.7 -0.9)" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Oval ivory wax seal with an embossed calla lily                    */
/* ------------------------------------------------------------------ */

/** Points around an ellipse, joined with outward-bulging curves. */
function scallopedOval(rx: number, ry: number, n: number, depth: number, cx = 100, cy = 128) {
  const p = (a: number, k = 1) => `${(cx + Math.cos(a) * rx * k).toFixed(2)} ${(cy + Math.sin(a) * ry * k).toFixed(2)}`;
  const step = (Math.PI * 2) / n;
  let d = `M${p(-Math.PI / 2)}`;
  for (let i = 0; i < n; i++) {
    const a = -Math.PI / 2 + i * step;
    d += `Q${p(a + step / 2, 1 + depth / Math.min(rx, ry))} ${p(a + step)}`;
  }
  return `${d}Z`;
}

const WAX_OVAL = (() => {
  const pts: string[] = [];
  const n = 48;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const wobble = 1 + Math.sin(i * 2.3) * 0.012 + Math.cos(i * 1.7) * 0.01;
    pts.push(`${(100 + Math.cos(a) * 96 * wobble).toFixed(2)} ${(128 + Math.sin(a) * 124 * wobble).toFixed(2)}`);
  }
  return `M${pts.join("L")}Z`;
})();

function SealArt() {
  const { monogram } = wedding.couple;
  return (
    <svg viewBox="0 0 200 256" className="h-full w-full overflow-visible" aria-hidden="true">
      <defs>
        <radialGradient id="seal-wax" cx="38%" cy="30%" r="78%">
          <stop offset="0%" stopColor="#f8f2e6" />
          <stop offset="55%" stopColor="#ece2cf" />
          <stop offset="100%" stopColor="#d3c2a5" />
        </radialGradient>
        <radialGradient id="seal-rim" cx="50%" cy="50%" r="50%">
          <stop offset="82%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#7a6446" stopOpacity="0.28" />
        </radialGradient>

        {/* relief lines (stroked) */}
        <g id="seal-lines" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d={scallopedOval(72, 100, 26, 5)} />
          <path d={scallopedOval(62, 90, 26, 0)} />
          {/* lily stem & leaf veins */}
          <path d="M100 150C99 132 98 114 100 96" />
          <path d="M99 140C92 130 86 120 84 108M101 136C106 128 110 120 112 112" />
          {/* spadix & the spathe's rolled lip */}
          <path d="M100 90Q101 76 104 64" />
          <path d="M91 58C99 63 110 62 118 52" />
        </g>

        {/* relief solids (filled) */}
        <g id="seal-solids">
          {/* calla spathe: narrow throat flaring to a pointed, curling tip */}
          <path d="M100 98C93 90 89 78 90 64C90 52 96 44 106 40C114 37 124 34 132 28C128 38 122 46 118 52C114 66 108 84 100 98Z" />
          {/* leaves */}
          <path d="M99 150C82 142 72 124 76 102C90 110 98 128 99 150Z" />
          <path d="M101 146C116 138 122 124 120 108C108 116 102 130 101 146Z" />
          {/* frame dots */}
          {[
            [100, 32],
            [100, 224],
            [36, 128],
            [164, 128],
          ].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="3" />
          ))}
          <text x="100" y="192" textAnchor="middle" fontSize="27" letterSpacing="2" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
            {monogram[0]} &amp; {monogram[1]}
          </text>
        </g>
      </defs>

      <path d={WAX_OVAL} fill="url(#seal-wax)" />
      <path d={WAX_OVAL} fill="url(#seal-rim)" />
      <ellipse cx="78" cy="60" rx="34" ry="16" fill="#ffffff" opacity="0.16" transform="rotate(-28 78 60)" />

      {/* emboss: shadow, highlight, face */}
      <use href="#seal-lines" transform="translate(1.1 1.4)" stroke="rgba(118,96,64,0.42)" strokeWidth="2.6" />
      <use href="#seal-lines" transform="translate(-0.9 -0.9)" stroke="rgba(255,255,255,0.95)" strokeWidth="2.2" />
      <use href="#seal-lines" stroke="#e8dcc6" strokeWidth="1.8" />
      <use href="#seal-solids" transform="translate(1.1 1.4)" fill="rgba(118,96,64,0.4)" />
      <use href="#seal-solids" transform="translate(-0.9 -0.9)" fill="rgba(255,255,255,0.95)" />
      <use href="#seal-solids" fill="#ece2cf" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */

/**
 * Burgundy love-letter cover tied with lace and an ivory wax seal. Tapping
 * lifts the seal away, slides the lace off and parts the cover onto the
 * home page. Skipped for the rest of the session once opened (see the boot
 * script in app/layout.tsx).
 */
export function EnvelopeGate() {
  const [phase, setPhase] = useState<Phase>("closed");

  if (phase === "gone") return null;

  const open = () => {
    if (phase !== "closed") return;
    setPhase("opening");
    window.scrollTo({ top: 0 });
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* storage unavailable — the letter simply shows again next visit */
    }
    window.setTimeout(() => document.documentElement.setAttribute("data-opened", ""), REVEAL_SITE_AT);
    window.setTimeout(() => setPhase("gone"), UNMOUNT_AT);
  };

  const { partnerOne, partnerTwo } = wedding.couple;

  return (
    <div className={`gate fixed inset-0 z-50 isolate overflow-hidden ${phase === "opening" ? "is-opening" : ""}`}>
      <LaceDefs />

      {/* cover, in two halves that part */}
      <div className="cover-half cover-half--l absolute inset-y-0 left-0 w-1/2 overflow-hidden" style={{ transformOrigin: "left center" }}>
        <div className="absolute inset-y-0 left-0 w-screen">
          <CoverArt />
        </div>
      </div>
      <div className="cover-half cover-half--r absolute inset-y-0 right-0 w-1/2 overflow-hidden" style={{ transformOrigin: "right center" }}>
        <div className="absolute inset-y-0 right-0 w-screen">
          <CoverArt hidden />
        </div>
      </div>

      {/* lace along the flap's two edges, meeting under the seal; each arm slides off along itself */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-[57%] right-[calc(50%-40px)] w-[calc(50vw+11dvh+60px)] origin-right sm:scale-y-125"
          style={{ height: LACE_H, transform: `translateY(-50%) rotate(${LACE_ANGLE})` }}
        >
          <div className="lace-half lace-half--l h-full w-full">
            <LaceBand />
          </div>
        </div>
        <div
          className="absolute top-[57%] left-[calc(50%-40px)] w-[calc(50vw+11dvh+60px)] origin-left sm:scale-y-125"
          style={{ height: LACE_H, transform: `translateY(-50%) rotate(calc(-1 * ${LACE_ANGLE}))` }}
        >
          <div className="lace-half lace-half--r h-full w-full">
            <LaceBand />
          </div>
        </div>
      </div>

      {/* wax seal */}
      <button
        type="button"
        onClick={open}
        disabled={phase !== "closed"}
        aria-label={`Open the wedding invitation of ${partnerOne} and ${partnerTwo}`}
        className="seal-oval group absolute top-[57%] left-1/2 aspect-[200/256] w-[clamp(150px,44vw,220px)] rounded-[50%] outline-none drop-shadow-[0_14px_16px_rgba(18,2,6,0.5)] focus-visible:ring-1 focus-visible:ring-[#f1e6dc]/60 focus-visible:ring-offset-8 focus-visible:ring-offset-transparent"
      >
        <span className="block h-full w-full transition-transform duration-1000 ease-luxe group-hover:scale-[1.03]">
          <SealArt />
        </span>
      </button>

      <button
        type="button"
        onClick={open}
        tabIndex={-1}
        className="gate-hint absolute inset-x-0 top-[80%] mx-auto w-fit px-4 py-2 font-display text-[clamp(1.15rem,5vw,1.45rem)] tracking-[0.06em] text-[#f1e6dc] [font-variant-caps:small-caps]"
      >
        Open the invitation
      </button>
    </div>
  );
}
