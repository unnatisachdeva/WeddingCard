import { wedding } from "@/lib/wedding";
import { reveal } from "@/lib/reveal";
import { EventCard } from "./EventCard";
import { LocationButton } from "./LocationButton";
import { Mandala } from "./ornaments";
import { ScallopEdge } from "./ScallopEdge";
import { SectionHeading } from "./SectionHeading";

export function Celebrations() {
  const { events, venue } = wedding;

  return (
    <section
      id="celebrations"
      aria-labelledby="celebrations-title"
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#efe2c8_0%,#e8d6b4_100%)] px-5 py-24 sm:px-8 sm:py-32"
    >
      <ScallopEdge color="#3b0a14" />
      <div className="bg-jaali absolute inset-0 -z-10 opacity-[0.22]" />
      <div className="bg-grain absolute inset-0 -z-10 opacity-30 mix-blend-multiply" />
      <div className="absolute -top-[25vmin] -left-[25vmin] -z-10 w-[70vmin] text-gold-600/[0.12]">
        <Mandala className="animate-spin-slower w-full" />
      </div>

      <SectionHeading
        id="celebrations-title"
        eyebrow="Three days · Four celebrations"
        title={
          <>
            The <span className="text-gold-600 italic">Celebrations</span>
          </>
        }
      />

      <p
        {...reveal("up", 450)}
        className="mx-auto mt-7 max-w-md text-center font-display text-xl leading-relaxed text-brown-700 italic"
      >
        From the exchange of rings to the sacred vows — every moment, together with you.
      </p>

      <div className="mx-auto mt-16 grid max-w-7xl gap-x-6 gap-y-10 sm:mt-20 sm:grid-cols-2 xl:grid-cols-4">
        {events.map((event, i) => (
          <EventCard key={event.id} event={event} venue={venue.name} index={i} />
        ))}
      </div>

      <div {...reveal("fade", 200)} className="mt-16 flex flex-col items-center text-center">
        <p className="eyebrow inline-flex items-center gap-3 text-maroon-700">
          <span aria-hidden="true" className="hidden h-px w-8 bg-current opacity-60 sm:block" />
          All celebrations at {venue.name}
          <span aria-hidden="true" className="hidden h-px w-8 bg-current opacity-60 sm:block" />
        </p>
        <p className="mt-3 font-caps text-[0.8rem] tracking-[0.3em] text-brown-500">{venue.locality}</p>
        <div className="mt-8">
          <LocationButton />
        </div>
      </div>
    </section>
  );
}
