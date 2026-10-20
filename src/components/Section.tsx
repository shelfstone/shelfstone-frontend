import type { ReactNode } from "react";
import styles from "./Section.module.css";

type Props = {
  id: string;
  number: string;
  label: string;
  /** The section title. Without one, the label is the section's heading. */
  title?: ReactNode;
  /** Notes under the label, such as an update date or downloads. */
  aside?: ReactNode;
  children?: ReactNode;
};

/** One catalog page: its number and label in the left rail, content to the right, under a
 * heavy rule. The number matches the page's thumb-index tab. */
export function Section({ id, number, label, title, aside, children }: Props) {
  const Label = title ? "p" : "h2";

  return (
    <section id={id} className={styles.section}>
      <div className="wrap">
        <div className={styles.page}>
          <div className={styles.rail}>
            <p className={styles.number} aria-hidden="true">
              {number}
            </p>
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
