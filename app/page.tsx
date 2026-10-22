import { Celebrations } from "@/components/Celebrations";
import { Closing } from "@/components/Closing";
import { ContactFooter } from "@/components/ContactFooter";
import { EnvelopeGate } from "@/components/EnvelopeGate";
import { Families } from "@/components/Families";
import { Hero } from "@/components/Hero";
import { Invitation } from "@/components/Invitation";
import { RevealObserver } from "@/components/RevealObserver";
import { SaveTheDate } from "@/components/SaveTheDate";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <>
      <EnvelopeGate />
      <MusicPlayer />
      <main>
        <Hero />
        <Invitation />
        <SaveTheDate />
        <Celebrations />
        <Families />
      </main>
      <Closing />
      <ContactFooter />
      <RevealObserver />
    </>
  );
}
