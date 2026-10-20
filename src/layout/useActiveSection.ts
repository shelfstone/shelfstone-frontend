import { useSyncExternalStore } from "react";
import { useLocation } from "react-router";
import { sections, type SectionId } from "../content/sections";

// A section is current once its top passes a line 40% down the screen
const READING_LINE = 0.4;

function currentSection(): SectionId | null {
  let current: SectionId | null = null;
  for (const section of sections) {
    const element = document.getElementById(section.id);
    if (!element) continue;
    if (current === null || element.getBoundingClientRect().top <= innerHeight * READING_LINE) {
      current = section.id;
    }
  }
  return current;
}

// Reading six positions is cheap, so this runs on every scroll event rather than waiting for an
// animation frame, which hidden or throttled pages never get.
function subscribe(onChange: () => void) {
  addEventListener("scroll", onChange, { passive: true });
  addEventListener("resize", onChange);
  // Route changes swap the sections in and out of the page
  const observer = new MutationObserver(onChange);
  observer.observe(document.body, { childList: true, subtree: true });
  return () => {
    removeEventListener("scroll", onChange);
    removeEventListener("resize", onChange);
    observer.disconnect();
  };
}

/** The catalog page currently under the reading line, or null away from the home page. */
export function useActiveSection(): SectionId | null {
  const { pathname } = useLocation();
  const seen = useSyncExternalStore(subscribe, currentSection, () => null);
  // The header renders before the sections exist, so the home page starts on its cover
  return seen ?? (pathname === "/" ? "top" : null);
}
