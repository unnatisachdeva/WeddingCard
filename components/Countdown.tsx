"use client";

import { useSyncExternalStore } from "react";
import { wedding } from "@/lib/wedding";

const target = new Date(wedding.date.iso).getTime();

function subscribe(onTick: () => void) {
  const id = window.setInterval(onTick, 1000);
  return () => window.clearInterval(id);
}

/* Snapshot changes once per second; `null` on the server and during hydration. */
const getSnapshot = () => Math.floor(Date.now() / 1000);
const getServerSnapshot = () => null;

const pad = (n: number) => String(n).padStart(2, "0");

export function Countdown() {
  const now = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const remaining = now === null ? null : Math.max(0, Math.floor(target / 1000) - now);

  if (remaining === 0) {
    return (
      <p className="font-display text-3xl text-ivory italic">The celebrations have begun</p>
    );
  }

  const units = [
    { label: "Days", value: remaining === null ? null : Math.floor(remaining / 86400) },
    { label: "Hours", value: remaining === null ? null : Math.floor((remaining % 86400) / 3600) },
    { label: "Minutes", value: remaining === null ? null : Math.floor((remaining % 3600) / 60) },
    { label: "Seconds", value: remaining === null ? null : remaining % 60 },
  ];

  return (
    <div
      role="timer"
      aria-label={
        remaining === null
          ? "Countdown to the wedding"
          : `${units[0].value} days and ${units[1].value} hours until the wedding`
      }
      className="mx-auto grid max-w-md grid-cols-4"
    >
      {units.map((u, i) => (
        <div key={u.label} className={`flex flex-col items-center ${i > 0 ? "border-l border-gold-400/30" : ""}`}>
          <span
            aria-hidden="true"
            className="font-display text-[clamp(2.25rem,10vw,3.25rem)] leading-none font-light text-ivory tabular-nums"
          >
            {u.value === null ? "––" : pad(u.value)}
          </span>
          <span aria-hidden="true" className="eyebrow mt-3 text-[0.58rem] tracking-[0.3em] text-gold-400/80">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
}
