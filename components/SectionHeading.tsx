import { reveal } from "@/lib/reveal";
import { Divider } from "./ornaments";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  tone?: "light" | "dark";
  id?: string;
};

export function SectionHeading({ eyebrow, title, tone = "light", id }: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <header className="text-center">
      <p {...reveal("fade")} className={`eyebrow ${dark ? "text-gold-400" : "text-gold-600"}`}>
        {eyebrow}
      </p>
      <h2
        id={id}
        {...reveal("up", 150)}
        className={`mt-5 font-display text-[clamp(2.75rem,11vw,4.75rem)] leading-[0.95] font-light ${
          dark ? "text-ivory" : "text-maroon-800"
        }`}
      >
        {title}
      </h2>
      <div {...reveal("scale", 350)}>
        <Divider className={`mx-auto mt-7 w-40 ${dark ? "text-gold-400" : "text-gold-500"}`} />
      </div>
    </header>
  );
}
