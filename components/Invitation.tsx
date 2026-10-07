import { wedding } from "@/lib/wedding";
import { reveal } from "@/lib/reveal";
import { CornerFlourish, Lotus } from "./ornaments";
import { ScallopEdge } from "./ScallopEdge";

export function Invitation() {
  const { couple, venue } = wedding;

  return (
    <section
      id="invitation"
      aria-labelledby="invitation-title"
      className="bg-paper relative isolate overflow-hidden bg-ivory px-6 py-24 sm:py-32"
    >
      <ScallopEdge color="#ece1cf" />
      <div className="bg-jaali pointer-events-none absolute inset-0 -z-10 opacity-[0.16] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <CornerFlourish className="absolute top-8 left-4 w-14 text-gold-500/60 sm:left-8 sm:w-20" />
      <CornerFlourish className="absolute top-8 right-4 w-14 -scale-x-100 text-gold-500/60 sm:right-8 sm:w-20" />

      <div className="relative mx-auto max-w-2xl text-center">
        <p {...reveal("fade")} className="font-deva text-xl text-gold-600">
          सादर आमंत्रण
        </p>

        <h2
          id="invitation-title"
          {...reveal("up", 150)}
          className="mt-6 font-display text-[clamp(2.4rem,9vw,4rem)] leading-[1.05] font-light text-maroon-800"
        >
          With joy in our hearts
          <span className="mt-2 block text-[0.72em] text-gold-600 italic">&amp; the blessings of our families</span>
        </h2>

        <p
          {...reveal("up", 300)}
          className="mx-auto mt-9 max-w-lg font-display text-[1.35rem] leading-relaxed text-brown-700 sm:text-2xl"
        >
          We invite you to share in the celebration of our wedding — three days of ritual, music, colour and
          togetherness at {venue.name}.
        </p>
        <p {...reveal("up", 400)} className="mx-auto mt-5 max-w-md text-[0.95rem] leading-relaxed text-brown-500">
          Your presence and blessings would make our celebrations complete.
        </p>

        <div {...reveal("fade", 500)}>
          <Lotus className="mx-auto mt-10 w-10 text-gold-500" />
          <p className="mt-3 font-script text-[2.6rem] leading-none text-maroon-700">
            {couple.partnerOne} &amp; {couple.partnerTwo}
          </p>
        </div>
      </div>
    </section>
  );
}
