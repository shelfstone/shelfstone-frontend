import { AboutSection } from "./AboutSection";
import { Hero } from "./Hero";
import { HowItWorks } from "./HowItWorks";
import { LookForSection } from "./LookForSection";
import { SendListSection } from "./SendListSection";
import { WantedSection } from "./WantedSection";

/** The whole site is one page: the hero, then numbered sections 01 to 05. */
export function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <LookForSection />
      <WantedSection />
      <SendListSection />
      <AboutSection />
    </>
  );
}
