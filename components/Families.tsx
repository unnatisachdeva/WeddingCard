import { wedding } from "@/lib/wedding";
import { reveal } from "@/lib/reveal";
import { Lotus } from "./ornaments";
import { ScallopEdge } from "./ScallopEdge";

/* Dome-topped card: elliptical top corners, softly rounded bottom. */
const DOME = "rounded-[50%_50%_1.25rem_1.25rem/8rem_8rem_1.25rem_1.25rem]";
const DOME_INNER = "rounded-[50%_50%_0.9rem_0.9rem/7.4rem_7.4rem_0.9rem_0.9rem]";

export function Families() {
  const { eyebrow, title, list, note } = wedding.families;

  return (
    <section
      id="families"
      aria-labelledby="families-title"
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#f9f4ea_0%,#f1e9db_100%)] px-6 py-24 sm:py-32"
    >
      <ScallopEdge color="#e8d6b4" />
      <div aria-hidden="true" className="bg-grain absolute inset-0 -z-10 opacity-30 mix-blend-multiply" />
      <div aria-hidden="true" className="absolute -top-1/4 -left-1/4 -z-10 h-[90%] w-[70%] bg-[radial-gradient(ellipse,rgba(255,238,200,0.75),transparent_65%)]" />

      <header className="text-center">
        <p {...reveal("fade")} className="font-caps text-[0.72rem] font-medium tracking-[0.32em] text-[#9a7a2e] uppercase">
          {eyebrow}
        </p>
        <h2
          id="families-title"
          {...reveal("up", 150)}
          className="mt-3 font-script text-[clamp(3.6rem,15vw,6.25rem)] leading-[1.1] text-maroon-800"
        >
          {title}
        </h2>
      </header>

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:mt-14 md:grid-cols-2 md:gap-10">
        {list.map((family, i) => (
          <article
            key={family.name}
            {...reveal("up", 200 + i * 160)}
            className={`relative mx-auto w-full max-w-[33rem] border border-gold-400/55 bg-[linear-gradient(180deg,#fefcf8_0%,#fbf7ef_100%)] px-6 pt-[4.5rem] pb-12 text-center shadow-[0_30px_60px_-30px_rgba(120,90,50,0.35)] max-sm:px-4 sm:px-10 ${DOME}`}
          >
            <div aria-hidden="true" className={`pointer-events-none absolute inset-2.5 border border-gold-400/35 ${DOME_INNER}`} />
            <h3 className="relative font-script text-[clamp(2.6rem,10vw,3.4rem)] leading-tight text-maroon-800">{family.name}</h3>
            <dl className="relative mt-5 space-y-5">
              {family.members.map((m) => (
                <div key={m.role}>
                  <dt className="font-caps text-[0.68rem] font-medium tracking-[0.3em] text-[#9a7a2e] uppercase">{m.role}</dt>
                  <dd className="mt-1 font-display text-[1.22rem] leading-snug font-medium text-brown-900 sm:text-[1.4rem]">{m.names}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>

      <div {...reveal("up", 250)} className="mx-auto mt-14 max-w-xl text-center">
        <Lotus className="mx-auto w-10 text-gold-500" />
        <p className="mt-4 font-display text-[1.45rem] leading-relaxed text-brown-700 italic sm:text-2xl">{note}</p>
      </div>
    </section>
  );
}
