import { wedding } from "@/lib/wedding";
import { SealRing } from "./ornaments";

type MonogramProps = {
  className?: string;
  ringClassName?: string;
  letterClassName?: string;
};

/** Circular wax-seal style monogram with the couple's initials. */
export function Monogram({ className = "", ringClassName = "", letterClassName = "" }: MonogramProps) {
  const [first, second] = wedding.couple.monogram;
  return (
    <div className={`relative aspect-square ${className}`}>
      <SealRing className={`absolute inset-0 h-full w-full ${ringClassName}`} />
      <div
        className={`absolute inset-0 flex items-center justify-center font-display italic leading-none ${letterClassName}`}
        aria-hidden="true"
      >
        <span className="-translate-y-[12%] text-[2.6em]">{first}</span>
        <span className="mx-[0.18em] h-[1.5em] w-px rotate-[22deg] bg-current opacity-60" />
        <span className="translate-y-[12%] text-[2.6em]">{second}</span>
      </div>
    </div>
  );
}
