import { wedding } from "@/lib/wedding";
import { reveal } from "@/lib/reveal";
import { Countdown } from "./Countdown";
import { DustBackdrop } from "./DustBackdrop";
import { ScallopEdge } from "./ScallopEdge";
import { Divider, Lotus } from "./ornaments";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function parseISODate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return { year: y, month: m - 1, day: d };
}

/** Builds the month grid for the wedding month (leading blanks + days). */
function monthGrid(year: number, month: number) {
  const firstWeekday = new Date(Date.UTC(year, month, 1)).getUTCDay();
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  return [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
}

function Heart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 29" className={className} aria-hidden="true">
      <path
        d="M16 28.5S1 19.4 1 9.3C1 4.6 4.6 1 9 1c3 0 5.6 1.7 7 4.2C17.4 2.7 20 1 23 1c4.4 0 8 3.6 8 8.3 0 10.1-15 19.2-15 19.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SaveTheDate() {
  const { date, events } = wedding;
  const { year, month, day: weddingDay } = parseISODate(date.isoDate);
  const monthName = new Date(Date.UTC(year, month, 1)).toLocaleString("en-GB", { month: "long", timeZone: "UTC" });

  const celebrationDays = new Set(
    events
      .map((e) => parseISODate(e.isoDate))
      .filter((d) => d.year === year && d.month === month && d.day !== weddingDay)
      .map((d) => d.day),
  );

  const cells = monthGrid(year, month);

  return (
    <section id="save-the-date" aria-labelledby="save-the-date-title" className="relative isolate overflow-hidden px-5 py-24 sm:py-32">
      <DustBackdrop tone="maroon" />
      <ScallopEdge color="var(--color-ivory)" />
      <p {...reveal("fade")} className="eyebrow text-center text-gold-400">
        Save the date
      </p>

      {/* calendar card */}
      <div
        {...reveal("up", 150)}
        className="relative mx-auto mt-10 w-full max-w-[24rem] overflow-hidden rounded-[22px] border border-gold-500/35 bg-[linear-gradient(135deg,#fdfaf6_0%,#f7efe3_50%,#f1e3cc_100%)] px-5 pt-8 pb-7 text-maroon-900 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55),inset_0_0_24px_rgba(201,161,74,0.12)] sm:px-7"
      >
        <div className="bg-grain pointer-events-none absolute inset-0 opacity-25 mix-blend-multiply" />
        <div className="pointer-events-none absolute inset-2 rounded-[16px] border border-gold-500/20" />

        <header className="relative text-center">
          <p className="eyebrow text-[0.6rem] text-maroon-600/70">Our special date</p>
          <h2
            id="save-the-date-title"
            className="mt-3 font-caps text-[2.35rem] leading-none font-medium tracking-[0.14em] text-maroon-800 uppercase"
          >
            {monthName}
          </h2>
          <p className="mt-1.5 font-display text-xl tracking-[0.2em] text-gold-600 italic">{year}</p>
        </header>

        <div className="relative mt-7 grid grid-cols-7 text-center">
          {WEEKDAYS.map((w) => (
            <span key={w} className="pb-3 font-sans text-[0.6rem] font-medium tracking-[0.12em] text-maroon-600/60 uppercase">
              {w}
            </span>
          ))}

          {cells.map((d, i) => {
            if (d === null) return <span key={`blank-${i}`} aria-hidden="true" />;
            const isWedding = d === weddingDay;
            const isCelebration = celebrationDays.has(d);
            return (
              <span
                key={d}
                {...reveal("fade", 200 + i * 22)}
                className="relative flex h-11 items-center justify-center font-display text-[1.2rem]"
              >
                {isWedding ? (
                  <>
                    <Heart className="absolute h-9 w-9 text-maroon-700 drop-shadow-[0_4px_8px_rgba(99,22,38,0.45)] [animation:heartbeat_2.6s_var(--ease-luxe)_infinite]" />
                    <span className="relative font-semibold text-ivory">{d}</span>
                    <span className="sr-only"> November — the wedding</span>
                  </>
                ) : (
                  <>
                    <span className={isCelebration ? "font-semibold text-maroon-700" : "text-maroon-900/80"}>{d}</span>
                    {isCelebration && (
                      <span aria-hidden="true" className="absolute bottom-1 h-1 w-1 rounded-full bg-gold-500" />
                    )}
                  </>
                )}
              </span>
            );
          })}
        </div>

        <div className="relative mt-5 flex items-center justify-center gap-6 border-t border-gold-500/25 pt-4 font-sans text-[0.6rem] tracking-[0.22em] text-maroon-700/70 uppercase">
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-gold-500" /> Celebrations
          </span>
          <span className="flex items-center gap-2">
            <Heart className="h-2.5 w-2.5 text-maroon-700" /> The Wedding
          </span>
        </div>
      </div>

      {/* the day itself */}
      <div className="mt-14 text-center">
        <p {...reveal("fade", 100)} className="eyebrow text-ivory/80">
          The Wedding Celebration
        </p>
        <p {...reveal("up", 200)} className="text-gold-foil mt-5 font-caps text-[clamp(1.9rem,8vw,2.8rem)] leading-tight tracking-[0.12em]">
          {date.display.toUpperCase()}
        </p>
        <p {...reveal("up", 300)} className="mt-3 font-display text-2xl text-ivory/85 italic">
          {date.weekday} — the beginning of a beautiful new chapter 
        </p>
        <div {...reveal("scale", 400)}>
          <Divider className="mx-auto mt-8 w-40 text-gold-400" />
        </div>

        <div {...reveal("up", 300)} className="mt-14">
          <Lotus className="mx-auto w-12 text-gold-400" />
          <p className="eyebrow mt-4 mb-8 text-gold-400">Counting down to the big day</p>
          <Countdown />
        </div>
      </div>
    </section>
  );
}
