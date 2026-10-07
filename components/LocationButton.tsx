import { wedding } from "@/lib/wedding";

/** Prominent link to the venue on Google Maps (URL lives in lib/wedding.ts). */
export function LocationButton() {
  return (
    <a
      href={wedding.venue.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex min-h-14 items-center gap-4 overflow-hidden border border-gold-400 bg-[linear-gradient(160deg,#6d1a2b_0%,#4f101c_100%)] px-9 py-4 text-ivory shadow-[0_18px_40px_-16px_rgba(59,10,20,0.75)] transition-[filter] duration-700 hover:brightness-115 focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-maroon-700"
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-gold-300/30 to-transparent transition-transform duration-[1.4s] ease-luxe group-hover:translate-x-[420%]"
      />
      <span aria-hidden="true" className="absolute inset-[3px] border border-gold-400/35" />
      <svg viewBox="0 0 24 24" className="relative h-5 w-5 text-gold-300" fill="none" stroke="currentColor" strokeWidth={1.2} aria-hidden="true">
        <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </svg>
      <span className="relative font-sans text-[0.8rem] font-normal tracking-[0.32em]">VIEW LOCATION</span>
      <svg viewBox="0 0 24 24" className="relative h-4 w-4 text-gold-300 transition-transform duration-700 ease-luxe group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={1.2} aria-hidden="true">
        <path d="M4 12h15M14 7l5 5-5 5" />
      </svg>
      <span className="sr-only">(opens Google Maps in a new tab)</span>
    </a>
  );
}
