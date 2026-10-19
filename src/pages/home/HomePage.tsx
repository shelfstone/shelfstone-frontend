import { AboutSection } from "./AboutSection";
import { Hero } from "./Hero";
import { HowItWorks } from "./HowItWorks";
import { LookForSection } from "./LookForSection";
import { SendListSection } from "./SendListSection";
import { WantedSection } from "./WantedSection";
import { WaysSection } from "./WaysSection";

/** The whole site is one page of numbered sections, 01 to 06. */
export function HomePage() {
  return (
    <>
      <Hero />
      <WaysSection />
      <LookForSection />
      <HowItWorks />
      <WantedSection />
      <SendListSection />
      <AboutSection />
    </>
  );
}
