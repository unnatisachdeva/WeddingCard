"use client";

import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  async function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch (error) {
        console.error("Unable to play wedding music:", error);
      }
    } else {
      audio.pause();
    }
  }

  return (
    <div className="fixed bottom-6 right-5 z-50">
      <audio
        ref={audioRef}
        src="/wed-invite-song.mp3"
        loop
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />

      <button
        type="button"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause wedding music" : "Play wedding music"}
        title={isPlaying ? "Pause music" : "Play music"}
        className="group flex flex-col items-center gap-1.5 outline-none
          focus-visible:ring-2 focus-visible:ring-[#C5A46D]
          focus-visible:ring-offset-4"
      >
        {/* Elegant rotating CD */}
        <div
          className={`relative h-[62px] w-[62px] rounded-full
            border border-[#B89A60] p-[3px]
            shadow-[0_4px_18px_rgba(65,35,25,0.22)]
            transition-transform duration-300
            group-hover:scale-110
            ${isPlaying ? "animate-spin" : ""}`}
          style={{
            background:
              "conic-gradient(from 0deg, #FFF8E7, #B99B60, #F9EFD7, #AAA18F, #FFFDF5, #C5A46D, #F3E5C6, #FFF8E7)",
          }}
        >
          {/* CD grooves */}
          <div
            className="flex h-full w-full items-center justify-center
              rounded-full border border-white/70"
            style={{
              background:
                "radial-gradient(circle, #F8F0E3 0%, #D5C4A0 18%, #FDF8EE 19%, #B8A77F 20%, #F4E9D2 35%, #C9B78F 36%, #F8F0E3 52%, #D1C09A 53%, #F9F2E5 69%, #B8A77F 70%, #F4E8D0 100%)",
            }}
          >
            {/* Maroon centre label */}
            <div
              className="flex h-[25px] w-[25px] items-center
                justify-center rounded-full border-2 border-[#D7B66D]"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, #984B55, #692531 75%)",
              }}
            >
              <div
                className="h-[7px] w-[7px] rounded-full
                  border border-[#E5CC91] bg-[#F7EEDD]"
              />
            </div>
          </div>

          {/* Small decorative highlight */}
          <div
            className="pointer-events-none absolute right-[13px]
              top-[10px] h-[5px] w-[12px] rotate-[-35deg]
              rounded-full bg-white/80 blur-[1px]"
          />
        </div>

        {/* Sub-button hint label */}
        <span
          className="inline-flex items-center gap-1 rounded-full
            border border-[#D7B66D] bg-[#FFF8E7]/95 px-2.5 py-0.5
            text-[0.55rem] font-semibold uppercase tracking-[0.15em]
            text-[#692531] shadow-sm backdrop-blur-sm
            transition-colors duration-300 group-hover:bg-[#692531]
            group-hover:text-[#FFF8E7]"
        >
          {isPlaying ? (
            <>
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
              Pause
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" className="h-2 w-2 fill-current" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
              Play
            </>
          )}
        </span>
      </button>
    </div>
  );
}