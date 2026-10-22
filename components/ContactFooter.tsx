import { reveal } from "@/lib/reveal";
import { Divider } from "./ornaments";

export function ContactFooter() {
  return (
    <footer
      aria-label="Invitation design contact"
      className="relative px-6 pt-10 pb-8 text-center text-ivory sm:pt-12 sm:pb-10"
    >
      {/* Fine gold hairline with ornament */}
      <div {...reveal("fade")} className="mx-auto flex max-w-xl items-center gap-4">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-400/50" />
        <Divider className="w-14 shrink-0 text-gold-400" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-400/50" />
      </div>

      {/* Line 1 */}
      <p
        {...reveal("up", 100)}
        className="mt-6 font-display text-xl italic leading-snug text-ivory sm:text-2xl"
      >
        Fell in love with this card? Let&rsquo;s make one just for you!
      </p>

      {/* Line 2 */}
      <p
        {...reveal("fade", 150)}
        className="mt-2 font-display text-base text-cream/80 sm:text-lg"
      >
        Write to me at
      </p>

      {/* Line 3: email */}
      <a
        {...reveal("up", 200)}
        href="mailto:unnatiisachdevaa@gmail.com"
        className="group relative mt-1 inline-block font-caps text-xs tracking-[0.16em] text-gold-300 transition-colors duration-500 hover:text-ivory sm:text-sm"
      >
        unnatiisachdevaa@gmail.com
        <span className="absolute -bottom-1 left-0 h-px w-full origin-center scale-x-50 bg-gold-400/60 transition-transform duration-500 group-hover:scale-x-100" />
      </a>

      {/* Line 4: signature */}
      <p
        {...reveal("fade", 250)}
        className="mt-5 font-display text-sm text-cream/60"
      >
        Made with <span className="text-gold-300" aria-label="love">♡</span> by Unnati
      </p>
    </footer>
  );
}