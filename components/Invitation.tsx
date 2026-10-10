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

      ```tsx
<div className="relative mx-auto max-w-2xl text-center">
  {/* Elegant Square Invitation Panel */}
  <div className="relative border border-gold-500/70 bg-[#FFFCF5] px-6 py-12 shadow-[0_10px_40px_rgba(91,35,35,0.06)] sm:px-12 sm:py-16">

    {/* Inner Gold Border */}
    <div className="pointer-events-none absolute inset-2 border border-gold-500/25 sm:inset-3" />

    {/* Top Om Symbol */}
    <p
      {...reveal("fade")}
      className="relative font-deva text-5xl text-gold-600 sm:text-6xl"
      aria-label="Om"
    >
      ॐ
    </p>

    <p
      {...reveal("fade", 100)}
      className="relative mt-5 font-deva text-xl text-gold-600"
    >
      सादर आमंत्रण
    </p>

    <h2
      id="invitation-title"
      {...reveal("up", 200)}
      className="relative mt-6 font-display text-[clamp(2rem,7vw,3.5rem)] leading-tight font-light text-maroon-800"
    >
      We Cordially Invite You
    </h2>

    <p
      {...reveal("up", 300)}
      className="relative mx-auto mt-7 max-w-lg font-display text-lg leading-relaxed text-brown-700 sm:text-xl"
    >
      <span className="block">
        Together with our beloved families,
      </span>
      <span className="mt-2 block">
        we request the honour of your gracious presence to celebrate the
        wedding of
      </span>
    </p>

    {/* Groom */}
    <div {...reveal("up", 400)} className="relative mt-9">
      <h3 className="font-script text-5xl leading-tight text-maroon-700 sm:text-6xl">
        {couple.partnerOne}
      </h3>

      <p className="mt-3 text-sm tracking-wide text-brown-500">
        Son of
      </p>

      <p className="mt-2 font-display text-base text-brown-700 sm:text-lg">
        Mrs. Sonia &amp; Mr. Brajesh Sachdeva
      </p>
    </div>

    {/* Lotus Divider */}
    <div {...reveal("fade", 450)} className="relative my-7">
      <div className="flex items-center justify-center gap-4">
        <span className="h-px w-12 bg-gold-500/50" />
        <Lotus className="w-9 text-gold-500" />
        <span className="h-px w-12 bg-gold-500/50" />
      </div>
      <p className="mt-2 font-script text-3xl italic text-gold-600">
        With
      </p>
    </div>

    {/* Bride */}
    <div {...reveal("up", 500)} className="relative">
      <h3 className="font-script text-5xl leading-tight text-maroon-700 sm:text-6xl">
        {couple.partnerTwo}
      </h3>

      <p className="mt-3 text-sm tracking-wide text-brown-500">
        Daughter of
      </p>

      <p className="mt-2 font-display text-base text-brown-700 sm:text-lg">
        Mrs. Suman &amp; Mr. Naresh Punjani
      </p>
    </div>

    {/* Bottom Ornament */}
    <div className="relative mt-9 flex justify-center">
      <Lotus className="w-7 rotate-180 text-gold-500/70" />
    </div>
  </div>
</div>

    </section>
  );
}