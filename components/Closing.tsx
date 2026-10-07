import { wedding } from "@/lib/wedding";
import { reveal } from "@/lib/reveal";
import { Divider, Mandala } from "./ornaments";
import { Monogram } from "./Monogram";
import { Petals } from "./Petals";
import { ScallopEdge } from "./ScallopEdge";

export function Closing() {
  const { couple, date, venue } = wedding;

  return (
    <footer
      aria-label="Closing note"
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#f1e2c0_0%,#e6cf9d_55%,#d9bc84_100%)] px-6 pt-24 pb-12 text-center text-maroon-800 sm:pt-32"
    >
      <ScallopEdge color="#f1e9db" />
      <div className="bg-grain absolute inset-0 -z-10 opacity-35 mix-blend-multiply" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,250,236,0.55),transparent_62%)]" />
      <div className="absolute top-[42%] left-1/2 -z-10 w-[130vmin] -translate-x-1/2 -translate-y-1/2 text-maroon-700/[0.07]">
        <Mandala className="animate-spin-slower w-full" />
      </div>
      <Petals count={5} />

      <div {...reveal("scale")}>
        <Monogram className="mx-auto w-32 text-[0.95rem] sm:w-36" ringClassName="text-maroon-700" letterClassName="text-maroon-800" />
      </div>

      <p {...reveal("up", 200)} className="mx-auto mt-12 max-w-md font-display text-2xl leading-snug font-light text-brown-700 italic sm:text-3xl">
        Your love and blessings are the most beautiful part of our story.
        <span className="mt-2 block">We can&rsquo;t wait to celebrate with you.</span>
      </p>

      <p {...reveal("fade", 300)} className="eyebrow mt-14 text-gold-700">
        With love
      </p>
      <p
        {...reveal("blur", 400)}
        className="mt-4 font-script text-[clamp(3.6rem,15vw,6.5rem)] leading-[1.1] text-maroon-800"
      >
        {couple.partnerOne} <span className="text-gold-700">&amp;</span> {couple.partnerTwo}
      </p>

      <div {...reveal("up", 500)}>
        <Divider className="mx-auto mt-8 w-44 text-gold-700" />
        <p className="mt-7 font-caps text-base tracking-[0.4em] text-maroon-700">{date.numeric}</p>
        <p className="eyebrow mt-4 text-brown-700">{venue.name}</p>
        <p className="eyebrow mt-2 text-[0.6rem] text-brown-500">{venue.locality}</p>
      </div>

      <a
        href="#top"
        className="eyebrow mt-24 inline-flex flex-col items-center gap-3 text-[0.6rem] text-brown-500 transition-colors duration-700 hover:text-maroon-700"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.2} aria-hidden="true">
          <path d="M6 14l6-6 6 6" />
        </svg>
        Back to top
      </a>
    </footer>
  );
}
