import { Celebrations } from "@/components/Celebrations";
import { Closing } from "@/components/Closing";
import { EnvelopeGate } from "@/components/EnvelopeGate";
import { Families } from "@/components/Families";
import { Hero } from "@/components/Hero";
import { Invitation } from "@/components/Invitation";
import { RevealObserver } from "@/components/RevealObserver";
import { SaveTheDate } from "@/components/SaveTheDate";

export default function Home() {
  return (
    <>
      <EnvelopeGate />
      <main>
        <Hero />
        <Invitation />
        <SaveTheDate />
        <Celebrations />
        <Families />
      </main>
      <Closing />
      <RevealObserver />
    </>
  );
}
