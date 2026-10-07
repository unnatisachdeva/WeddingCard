import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { wedding } from "@/lib/wedding";

export const alt = `${wedding.couple.partnerOne} & ${wedding.couple.partnerTwo} — ${wedding.date.display}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const [cormorantItalic, cinzel] = await Promise.all([
  readFile(join(process.cwd(), "assets/fonts/CormorantGaramond-MediumItalic.woff")),
  readFile(join(process.cwd(), "assets/fonts/Cinzel-Regular.woff")),
]);

const gold = "#cfb07a";

export default function Image() {
  const { couple, date, venue } = wedding;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(ellipse at center, #631626 0%, #3b0a14 55%, #2a070e 100%)",
          color: "#fbf6ec",
        }}
      >
        <div style={{ position: "absolute", top: 28, left: 28, right: 28, bottom: 28, border: `1.5px solid ${gold}`, display: "flex" }} />
        <div style={{ position: "absolute", top: 40, left: 40, right: 40, bottom: 40, border: `1px solid rgba(207,176,122,0.45)`, display: "flex" }} />

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ fontFamily: "Cinzel", fontSize: 22, letterSpacing: 10, color: gold }}>
            THE WEDDING OF
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 18,
              fontFamily: "Cormorant",
              fontStyle: "italic",
              fontSize: 150,
              lineHeight: 1,
            }}
          >
            <span>{couple.partnerOne}</span>
            <span style={{ color: gold, fontSize: 110, margin: "0 34px" }}>&amp;</span>
            <span>{couple.partnerTwo}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 34 }}>
            <div style={{ width: 120, height: 1, background: gold, display: "flex" }} />
            <div style={{ width: 12, height: 12, margin: "0 18px", border: `1px solid ${gold}`, transform: "rotate(45deg)", display: "flex" }} />
            <div style={{ width: 120, height: 1, background: gold, display: "flex" }} />
          </div>
          <div style={{ marginTop: 30, fontFamily: "Cinzel", fontSize: 34, letterSpacing: 8, color: "#e3cc9a" }}>
            {date.display.toUpperCase()}
          </div>
          <div style={{ marginTop: 14, fontFamily: "Cinzel", fontSize: 20, letterSpacing: 8, color: "rgba(251,246,236,0.6)" }}>
            {venue.name.toUpperCase()}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cormorant", data: cormorantItalic, style: "italic", weight: 500 },
        { name: "Cinzel", data: cinzel, style: "normal", weight: 400 },
      ],
    },
  );
}
