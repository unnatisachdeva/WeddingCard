import Image from "next/image";
import { wedding } from "@/lib/wedding";
import { delay } from "@/lib/reveal";

export function Hero() {
  const { couple, date, venue } = wedding;

  return (
    <section id="top" className="relative isolate min-h-svh overflow-hidden bg-brown-900 text-white">
      <Image
        src="/hero-couple2.jpeg"
        alt="Ansh and Vanshika dancing together at their wedding celebration"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[50%_46%]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(13,8,5,0.1)_0%,rgba(13,8,5,0.18)_40%,rgba(13,8,5,0.72)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_58%_42%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_34%),linear-gradient(90deg,rgba(18,10,6,0.62)_0%,rgba(18,10,6,0.22)_44%,rgba(18,10,6,0.08)_100%)]"
      />
      <div aria-hidden="true" className="bg-grain absolute inset-0 -z-10 opacity-[0.14] mix-blend-soft-light" />

      <div className="relative z-10 flex min-h-svh items-end px-[clamp(1.5rem,5vw,5.5rem)] pb-[calc(env(safe-area-inset-bottom)+clamp(3rem,10svh,6.75rem))] pt-20">
        <div className="max-w-[34rem] text-left text-white [text-shadow:0_2px_22px_rgba(0,0,0,0.62)]">
          {/* <p className="hero-in font-deva text-[clamp(1.25rem,4vw,1.75rem)] leading-none" style={delay(650)}>
            ॥ शुभ विवाह ॥
          </p> */}

          <h1 className="mt-[clamp(1.1rem,3svh,1.65rem)]">
            <span
              className="hero-in block font-script text-[clamp(4.75rem,17vw,8.4rem)] leading-[0.78] tracking-normal"
              style={delay(850)}
            >
              {couple.partnerOne}
            </span>
            <span
              className="hero-in my-[clamp(0.45rem,1.4svh,0.8rem)] block pl-[clamp(1.25rem,5vw,4.75rem)] font-display text-[clamp(1.9rem,6vw,3rem)] leading-none italic"
              style={delay(1050)}
            >
              &amp;
            </span>
            <span
              className="hero-in block font-script text-[clamp(4.75rem,17vw,8.4rem)] leading-[0.78] tracking-normal"
              style={delay(1250)}
            >
              {couple.partnerTwo}
            </span>
          </h1>

          <div className="hero-in mt-[clamp(1.4rem,4svh,2.5rem)]" style={delay(1500)}>
            <p className="font-caps text-[clamp(1.05rem,3.2vw,1.65rem)] leading-none tracking-[0.18em]">
              {date.numeric.replaceAll("·", "•")}
            </p>
            <p className="mt-4 font-sans text-[clamp(0.86rem,1.8vw,1rem)] font-medium tracking-[0.04em]">
              {date.weekday} · {venue.name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
