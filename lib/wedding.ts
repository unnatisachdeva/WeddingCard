/**
 * Central wedding configuration.
 *
 * Every name, date, time and link shown on the site comes from this file,
 * so details can be updated here without touching any component.
 */

export type EventTheme = "ring" | "haldi" | "night" | "wedding";

export type Swatch = { name: string; hex: string };

export type Attire = {
  /** Dress code shown on the card, e.g. "Royal Indo-Western". */
  style: string;
  /** Suggested colours, shown as swatches. */
  palette: Swatch[];
};

export type WeddingEvent = {
  id: string;
  /** Short label shown above the date, e.g. "Day I". */
  day: string;
  weekday: string;
  /** Display date, e.g. "19 November". */
  date: string;
  /** Calendar date (YYYY-MM-DD), used to mark the calendar. */
  isoDate: string;
  /** Display title, e.g. "The Royal Beginning". */
  title: string;
  /** The ceremony itself, e.g. "Ring Ceremony". */
  ceremony: string;
  time: string;
  theme: EventTheme;
  attire: Attire;
};

export const wedding = {
  couple: {
    partnerOne: "Ansh",
    partnerTwo: "Vanshika",
    monogram: ["A", "V"] as const,
  },

  /** The wedding day itself. */
  date: {
    display: "21 November 2026",
    weekday: "Saturday",
    numeric: "21 · 11 · 2026",
    /** Calendar date (YYYY-MM-DD) of the wedding day. */
    isoDate: "2026-11-21",
    /** Start of the wedding ceremony (IST), used for the countdown. */
    iso: "2026-11-21T19:00:00+05:30",
  },

  /*
   * Attire styles and palettes below are placeholders — edit them to match
   * the dress code you'd like guests to follow.
   */
  events: [
    {
      id: "ring-ceremony",
      day: "Day I",
      weekday: "Thursday",
      date: "19 November",
      isoDate: "2026-11-19",
      title: "The Royal Beginning",
      ceremony: "Ring Ceremony",
      time: "7:30 PM",
      theme: "ring",
      attire: {
        style: "Evening Glamour",
        palette: [
          { name: "Black", hex: "#141214" },
          { name: "Emerald", hex: "#0F5C45" },
          { name: "Silver", hex: "#C3C6CC" },
          { name: "Gold", hex: "#C9A24B" },
          { name: "Navy Blue", hex: "#1B2A4A" },
          { name: "Rose Pink", hex: "#D98A9C" },
        ],
      },
    },
    {
      id: "haldi",
      day: "Day II",
      weekday: "Friday",
      date: "20 November",
      isoDate: "2026-11-20",
      title: "Haldi Utsav",
      ceremony: "Haldi Carnival",
      time: "11:00 AM",
      theme: "haldi",
      attire: {
        style: "Colours of Joy",
        palette: [
          { name: "Butter Yellow", hex: "#F6E3A1" },
          { name: "Hot Pink", hex: "#FF2E93" },
          { name: "Powder Blue", hex: "#BFD7EA" },
          { name: "Classic Orange", hex: "#FFA500" },
          { name: "Lilac", hex: "#D7C4E8" },
          { name: "Blush", hex: "#F2C4CE" },
         
        ],
      },
    },
    {
      id: "after-party",
      day: "Day II",
      weekday: "Friday",
      date: "20 November",
      isoDate: "2026-11-20",
      title: "After Hours",
      ceremony: "The After Party",
      time: "8:00 PM",
      theme: "night",
      attire: {
        style: "Disco Glam",
        palette: [
          { name: "Hot Pink", hex: "#FF2E93" },
          { name: "Electric Blue", hex: "#1F51FF" },
          { name: "Neon Purple", hex: "#9D4EDD" },
          { name: "Disco Silver", hex: "#C9CCD3" },
          { name: "Sequin Gold", hex: "#E5B83B" },
          { name: "Neon Lime", hex: "#B6F23A" },
          { name: "Jet Black", hex: "#111111" },
        ],
      },
    },
    {
      id: "wedding",
      day: "Day III",
      weekday: "Saturday",
      date: "21 November",
      isoDate: "2026-11-21",
      title: "The Big Day",
      ceremony: "The Wedding",
      time: "7:00 PM",
      theme: "wedding",
      attire: {
        style: "Royal Vibrance",
        palette: [
          { name: "Rani Pink", hex: "#D6246E" },
          { name: "Royal Blue", hex: "#1D3F9A" },
          { name: "Emerald", hex: "#046A4B" },
          { name: "Royal Purple", hex: "#5B2A86" },
          { name: "Maroon", hex: "#7A0F25" },
          { name: "Saffron", hex: "#E8731C" },
          { name: "Gold", hex: "#D4A017" },
        ],
      },
    },
  ] satisfies readonly WeddingEvent[],

  families: {
    eyebrow: "With love & blessings from",
    title: "Our Families",
    list: [
      {
        name: "The Sachdevas",
        members: [
          { role: "Grandparents", names: "Smt. Santosh & Sh. Om Prakash Sachdeva" },
          { role: "Parents", names: "Mrs. Sonia & Mr. Brajesh Sachdeva" },
          { role: "Sister", names: "Unnati Sachdeva" },
        ],
      },
      {
        name: "The Punjanis",
        members: [
          // Placeholder — replace with the grandparents' names.
          { role: "Grandparents", names: "Smt. Kamla & Sh. Mohan Lal Punjani" },
          { role: "Parents", names: "Mrs. Suman & Mr. Naresh Punjani" },
          { role: "Brother", names: "Puneet Punjani" },
        ],
      },
    ],
    note: "Awaiting the presence of our beloved family and friends",
  },

  venue: {
    name: "Patram Haveli",
    locality: "Roorkee, Uttarakhand",
    /**
     * Google Maps link opened by the "View Location" button.
     * Replace with a pinned share link (maps.app.goo.gl/…) any time.
     */
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Patram+Haveli%2C+Badheri+Rajputan%2C+Haridwar%2C+Uttarakhand",
  },

  site: {
    title: "Ansh & Vanshika | Wedding Invitation",
    description:
      "Join Ansh & Vanshika as they celebrate their wedding on 21 November 2026.",
    /** Public URL of the deployed site, used for share previews. */
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  },
} as const;
