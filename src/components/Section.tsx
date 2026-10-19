import type { ReactNode } from "react";
import styles from "./Section.module.css";

type Props = {
  id: string;
  number: number;
  label: string;
  /** The section title. Without one, the label is the section's heading. */
  title?: ReactNode;
  /** Notes under the label, such as an update date or downloads. */
  aside?: ReactNode;
  tone?: "light" | "dark";
  children?: ReactNode;
};

/** A numbered home page section: number and label in a rail on the left, content on the right,
 * under a full-width rule. */
export function Section({ id, number, label, title, aside, tone = "light", children }: Props) {
  const Label = title ? "p" : "h2";

  return (
    <section id={id} className={styles.section} data-tone={tone}>
      <div className="wrap">
        <div className={styles.grid}>
          <div className={styles.rail}>
            <p className={`num ${styles.number}`}>{String(number).padStart(2, "0")}</p>
            <Label className={`label ${styles.label}`}>{label}</Label>
            {aside && <div className={styles.aside}>{aside}</div>}
          </div>
          <div className={styles.body}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
