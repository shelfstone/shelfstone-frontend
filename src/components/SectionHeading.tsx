import type { ReactNode } from "react";
import styles from "./SectionHeading.module.css";

/** "01 · Working with us" over a hairline, then the section title. */
export function SectionHeading(props: {
  number: number;
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className={styles.heading}>
      <p className={`label ${styles.kicker}`}>
        {String(props.number).padStart(2, "0")} · {props.label}
      </p>
      <h2>{props.title}</h2>
      {props.children}
    </header>
  );
}
