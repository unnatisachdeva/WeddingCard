import type { CSSProperties } from "react";
import { wedding } from "@/lib/wedding";
import { delay } from "@/lib/reveal";
import { EnvelopeBack, EnvelopeFront, LightBeams, Pampas, StillPetals } from "./HeroStillLife";
import { Petals } from "./Petals";
import { ScrollParallax } from "./ScrollParallax";

function HeartRule() {
  return (
    <div className="flex items-center justify-center gap-4 text-gold-600" aria-hidden="true">
      <span className="h-px w-16 bg-current opacity-50" />
      <svg viewBox="0 0 32 29" className="h-3.5 w-3.5 text-maroon-800">
        <path
          d="M16 28.5S1 19.4 1 9.3C1 4.6 4.6 1 9 1c3 0 5.6 1.7 7 4.2C17.4 2.7 20 1 23 1c4.4 0 8 3.6 8 8.3 0 10.1-15 19.2-15 19.2Z"
          fill="currentColor"
        />
      </svg>
      <span className="h-px w-16 bg-current opacity-50" />
    </div>
  );
}

/**
 * Hero: a soft-lit still life — an ivory invitation card standing in an
 * open envelope with dried pampas and petals.
 */
export function Hero() {
  const { couple, date, venue } = wedding;

  return (
    <section
      id="top"
      className="relative isolate min-h-svh overflow-hidden bg-[radial-gradient(ellipse_at_28%_18%,#f8f2e8_0%,#ede3d3_52%,#e1d3bf_100%)] [--env-w:140vw] sm:[--env-w:54rem]"
    >
      <div aria-hidden="true" className="bg-grain absolute inset-0 -z-10 opacity-40 mix-blend-multiply" />
      <ScrollParallax />

      <EnvelopeBack />

      {/* left sprig, tucked behind the card */}
      <Pampas
        className="parallax absolute bottom-[calc(var(--env-w)*0.2)] left-[calc(50%-min(43vw,15rem)-4rem)] z-[1] h-[44svh] w-[30vw] max-w-[11rem] opacity-90 [animation-delay:-4s]"
        style={{ "--speed": 0.05 } as CSSProperties}
        flip
      />

      {/* the card */}
      <div className="absolute inset-x-0 top-[max(4.5rem,8svh)] bottom-[calc(var(--env-w)*0.18)] z-10 flex justify-center px-[7vw]">
        <div
          className="card-rise relative flex h-full w-full max-w-[30rem] flex-col items-center overflow-hidden rounded-[2rem] bg-[linear-gradient(170deg,#fffcf6_0%,#f8f1e5_60%,#f1e7d6_100%)] px-6 pt-[clamp(2.25rem,6svh,3.5rem)] text-center shadow-[0_40px_70px_-30px_rgba(110,80,50,0.55),inset_0_1px_0_rgba(255,255,255,0.9)] ring-1 ring-white/70"
          style={delay(200)}
        >
          <div aria-hidden="true" className="bg-grain pointer-events-none absolute inset-0 opacity-25 mix-blend-multiply" />

          <p className="hero-in relative font-deva text-[1.35rem] text-gold-600" style={delay(900)}>
            ॥ शुभ विवाह ॥
          </p>

          <h1 className="relative mt-[clamp(1.25rem,4svh,2.25rem)] font-display font-medium">
            <span className="hero-in text-antique-foil block text-[clamp(3rem,13.5vw,4.4rem)] leading-[1.02]" style={delay(1100)}>
              {couple.partnerOne}
            </span>
            <span className="hero-in my-2 flex items-center justify-center gap-5 text-gold-600" style={delay(1300)}>
              <span aria-hidden="true" className="h-px w-10 bg-current opacity-50" />
              <span className="font-display text-[clamp(1.8rem,7vw,2.4rem)] leading-none font-light italic">&amp;</span>
              <span aria-hidden="true" className="h-px w-10 bg-current opacity-50" />
            </span>
            <span className="hero-in text-antique-foil block text-[clamp(3rem,13.5vw,4.4rem)] leading-[1.02]" style={delay(1500)}>
              {couple.partnerTwo}
            </span>
          </h1>

          <div className="hero-in relative mt-[clamp(1.25rem,3.6svh,2rem)] w-full" style={delay(1800)}>
            <HeartRule />
            <p className="mt-5 font-display text-[1.45rem] tracking-[0.18em] text-brown-800">
              {date.numeric.replaceAll("·", "•")}
            </p>
            <p className="mt-1.5 font-display text-lg text-brown-500 italic">We&rsquo;re getting married</p>
            <p className="eyebrow mt-4 text-[0.6rem] text-gold-700">
              {date.weekday} · {venue.name}
            </p>
          </div>

          <a
            href="#invitation"
            aria-label="Scroll to the invitation"
            className="hero-in relative mt-[clamp(1.25rem,4svh,2.25rem)] flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-500/70 text-gold-600 transition-colors duration-700 hover:bg-gold-500/10"
            style={delay(2200)}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 animate-[float_2.6s_ease-in-out_infinite]" fill="none" stroke="currentColor" strokeWidth={1.4} aria-hidden="true">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
        </div>
      </div>

      {/* right sprig, in front of the card's edge */}
      <Pampas
        className="parallax absolute bottom-[calc(var(--env-w)*0.12)] left-[calc(50%+min(43vw,15rem)-5.5rem)] z-[15] h-[46svh] w-[42vw] max-w-[15rem] sm:left-[calc(50%+min(43vw,15rem)-8rem)] sm:h-[58svh]"
        style={{ "--speed": -0.06 } as CSSProperties}
      />

      <EnvelopeFront />
      <StillPetals />
      <Petals count={4} />
      <LightBeams />
    </section>
  );
}
