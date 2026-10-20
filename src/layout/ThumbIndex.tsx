import { Link } from "react-router";
import { sections, type SectionId } from "../content/sections";
import styles from "./ThumbIndex.module.css";

/** Thumb-index tabs down the right edge (along the bottom on phones), one per catalog page.
 * The current page's tab is filled. */
export function ThumbIndex({ active }: { active: SectionId | null }) {
  return (
    <nav className={styles.index} aria-label="Sections">
      {sections.map((section) => {
        const current = section.id === active;
        return (
          <Link
            key={section.id}
            className={styles.tab}
            to={section.id === "top" ? "/#top" : `/#${section.id}`}
            aria-current={current ? "location" : undefined}
            aria-label={section.number ? `${section.number} ${section.label}` : section.label}
          >
            <span className={styles.number}>{section.number ?? section.label}</span>
            {section.number && <span className={styles.name}>{section.tab}</span>}
          </Link>
        );
      })}
    </nav>
  );
}
