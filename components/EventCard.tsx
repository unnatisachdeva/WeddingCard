import type { EventTheme, WeddingEvent } from "@/lib/wedding";
import { reveal } from "@/lib/reveal";
import { CornerFlourish, eventIcons } from "./ornaments";

type Theme = {
  /** Card surface. */
  surface: string;
  /** Hairline frames and corner ornaments. */
  frame: string;
  heading: string;
  accent: string;
  muted: string;
  pill: string;
  medallion: string;
  /** Optional texture laid over the surface. */
  texture?: string;
};

const themes: Record<EventTheme, Theme> = {
  ring: {
    surface: "bg-[linear-gradient(160deg,#7a1f30_0%,#5a1220_55%,#430b17_100%)]",
    frame: "text-gold-400/70 border-gold-400/45",
    heading: "text-ivory",
    accent: "text-gold-300",
    muted: "text-ivory/60",
    pill: "border-gold-400/50 text-gold-300",
    medallion: "border-gold-400/50 bg-maroon-950/30 text-gold-300",
    texture: "bg-jaali opacity-[0.07]",
  },
  haldi: {
    surface: "bg-[linear-gradient(160deg,#f8dd92_0%,#efc463_50%,#e2a843_100%)]",
    frame: "text-[#9a6418]/60 border-[#9a6418]/40",
    heading: "text-[#4a2a0c]",
    accent: "text-[#8a4f12]",
    muted: "text-[#5c3a14]/70",
    pill: "border-[#8a4f12]/45 text-[#4a2a0c]",
    medallion: "border-[#8a4f12]/40 bg-[#fff4d6]/50 text-[#9a5a12]",
    texture: "bg-grain opacity-25 mix-blend-multiply",
  },
  night: {
    surface: "bg-[linear-gradient(160deg,#2e2129_0%,#1c1319_55%,#120b10_100%)]",
    frame: "text-gold-400/55 border-gold-400/35",
    heading: "text-ivory",
    accent: "text-gold-300",
    muted: "text-ivory/55",
    pill: "border-gold-400/40 text-gold-300",
    medallion: "border-gold-400/40 bg-black/20 text-gold-300",
    texture:
      "bg-[radial-gradient(circle,rgba(227,204,154,0.55)_0.8px,transparent_1.2px)] bg-[length:22px_22px] opacity-40",
  },
  wedding: {
    surface: "bg-[linear-gradient(160deg,#fffaf1_0%,#f7ecd8_55%,#efdcbc_100%)]",
    frame: "text-maroon-700/55 border-maroon-700/35",
    heading: "text-maroon-800",
    accent: "text-gold-600",
    muted: "text-brown-500",
    pill: "border-maroon-800 bg-maroon-800 text-ivory",
    medallion: "border-maroon-700/35 bg-white/50 text-maroon-700",
    texture: "bg-grain opacity-25 mix-blend-multiply",
  },
};

type EventCardProps = {
  event: WeddingEvent;
  venue: string;
  index: number;
};

export function EventCard({ event, venue, index }: EventCardProps) {
  const t = themes[event.theme];
  const Icon = eventIcons[event.theme];
  const [dayNumber, ...monthParts] = event.date.split(" ");

  return (
    <article
      {...reveal("up", index * 140)}
      aria-labelledby={`${event.id}-title`}
      className={`group relative mx-auto flex w-full max-w-[22rem] overflow-hidden rounded-[22px] p-2.5 shadow-[0_28px_50px_-18px_rgba(59,10,20,0.55)] transition-[translate,box-shadow] duration-1000 ease-luxe hover:-translate-y-1.5 hover:shadow-[0_36px_60px_-18px_rgba(59,10,20,0.65)] ${t.surface}`}
    >
      {t.texture && <div className={`pointer-events-none absolute inset-0 ${t.texture}`} />}

      {/* double frame with ornamental corners */}
      <div className={`relative flex w-full flex-col items-center rounded-[15px] border px-6 pt-9 pb-8 text-center ${t.frame}`}>
        <div className={`pointer-events-none absolute inset-1.5 rounded-[11px] border opacity-50 ${t.frame}`} />
        {[
          "top-1 left-1",
          "top-1 right-1 -scale-x-100",
          "bottom-1 left-1 -scale-y-100",
          "right-1 bottom-1 -scale-x-100 -scale-y-100",
        ].map((pos) => (
          <CornerFlourish key={pos} className={`pointer-events-none absolute w-9 ${pos} ${t.frame}`} />
        ))}

        {/* medallion */}
        <div className={`flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border ${t.medallion}`}>
          <Icon className="h-11 w-11 transition-transform duration-[1.6s] ease-luxe group-hover:scale-110" />
        </div>

        <p className={`eyebrow mt-6 text-[0.62rem] ${t.muted}`}>
          {event.day} · {event.weekday}
        </p>
        <p className={`mt-3 font-display text-[4.25rem] leading-none font-light ${t.heading}`}>{dayNumber}</p>
        <p className={`mt-1 font-caps text-[0.8rem] tracking-[0.34em] ${t.accent}`}>{monthParts.join(" ")}</p>

        <h3
          id={`${event.id}-title`}
          className={`mt-6 font-caps text-[1.02rem] leading-snug tracking-[0.2em] uppercase ${t.heading}`}
        >
          {event.title}
        </h3>
        <p className={`mt-1.5 font-display text-[1.6rem] leading-tight italic ${t.accent}`}>{event.ceremony}</p>

        <p className={`mt-6 rounded-full border px-6 py-2 font-sans text-[0.72rem] font-normal tracking-[0.28em] ${t.pill}`}>
          {event.time}
        </p>

        {/* attire */}
        <div className="mt-8 w-full">
          <div className={`flex items-center gap-3 ${t.muted}`}>
            <span className="h-px flex-1 bg-current opacity-40" />
            <span className="eyebrow text-[0.58rem]">Attire</span>
            <span className="h-px flex-1 bg-current opacity-40" />
          </div>
          <p className={`mt-3 font-display text-xl italic ${t.heading}`}>{event.attire.style}</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2.5 xl:gap-[7px]" aria-label={`${event.attire.style} colour palette`}>
            {event.attire.palette.map((c) => (
              <li key={c.name} title={c.name}>
                <span
                  aria-hidden="true"
                  className="block h-7 w-7 rounded-full xl:h-[22px] xl:w-[22px] shadow-[inset_0_-3px_5px_rgba(0,0,0,0.22),0_2px_5px_rgba(0,0,0,0.2)] ring-1 ring-current/35 ring-offset-2 ring-offset-transparent"
                  style={{ background: `radial-gradient(circle at 32% 28%, rgba(255,255,255,0.45), transparent 42%), ${c.hex}` }}
                />
                <span className="sr-only">{c.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className={`eyebrow mt-auto pt-7 text-[0.56rem] ${t.muted}`}>{venue}</p>
      </div>
    </article>
  );
}
