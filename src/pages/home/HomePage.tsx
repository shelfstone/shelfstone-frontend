import { AboutSection } from "./AboutSection";
import { Hero } from "./Hero";
import { HowItWorks } from "./HowItWorks";
import { LookForSection } from "./LookForSection";
import { SendListSection } from "./SendListSection";
import { Ticker } from "./Ticker";
import { WaysSection } from "./WaysSection";

export function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <WaysSection />
      <LookForSection />
      <HowItWorks />
      <SendListSection />
      <AboutSection />
    </>
  );
}
