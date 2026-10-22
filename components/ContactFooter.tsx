import { Divider } from "./ornaments";

export function ContactFooter() {
  return (
    <footer
      aria-label="Invitation design contact"
      className="relative bg-[#4F101C] px-6 pt-10 pb-8 text-center sm:pt-12 sm:pb-10"
    >
      {/* Fine gold hairline with ornament */}
      <div className="mx-auto flex max-w-xl items-center gap-4">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D6B46A]/60" />
        <Divider className="w-14 shrink-0 text-[#D6B46A]" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D6B46A]/60" />
      </div>

      {/* Line 1 */}
      <p className="mt-6 font-display text-xl italic leading-snug text-[#FFF8EE] sm:text-2xl">
        Fell in love with this card? Let&rsquo;s make one just for you!
      </p>

      {/* Line 2 */}
      <p className="mt-2 font-display text-base text-[#F5EBDD]/80 sm:text-lg">
        Write to me at
      </p>

      {/* Line 3: email */}
      <a
        href="mailto:unnatiisachdevaa@gmail.com"
        className="mt-1 inline-block font-caps text-xs font-semibold tracking-[0.16em] text-[#F3D58A] underline decoration-[#D6B46A]/70 underline-offset-4 hover:text-[#FFF8EE] sm:text-sm"
      >
        unnatiisachdevaa@gmail.com
      </a>

      {/* Line 4: signature */}
      <p className="mt-5 font-display text-sm text-[#F5EBDD]/70">
        Made with <span className="text-[#F3D58A]" aria-label="love">♡</span> by Unnati
      </p>
    </footer>
  );
}