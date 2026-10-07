import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost, Pinyon_Script, Tiro_Devanagari_Hindi } from "next/font/google";
import localFont from "next/font/local";
import { wedding } from "@/lib/wedding";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

// Self-hosted: next/font/google currently fails to resolve Cinzel's files under Turbopack.
const cinzel = localFont({
  variable: "--font-cinzel",
  src: [
    { path: "./fonts/Cinzel-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Cinzel-500.woff2", weight: "500", style: "normal" },
  ],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const tiro = Tiro_Devanagari_Hindi({
  variable: "--font-tiro",
  subsets: ["devanagari"],
  weight: "400",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(wedding.site.url),
  title: wedding.site.title,
  description: wedding.site.description,
  openGraph: {
    title: wedding.site.title,
    description: wedding.site.description,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: wedding.site.title,
    description: wedding.site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#3b0a14",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/**
 * Runs before first paint: marks JS as available (enables reveal animations)
 * and skips the opening gate for guests who already opened it this session.
 */
const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');try{if(sessionStorage.getItem('av-gate-opened')){d.setAttribute('data-opened','');d.setAttribute('data-gate','skip')}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${cinzel.variable} ${jost.variable} ${pinyon.variable} ${tiro.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
