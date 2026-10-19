import type { ReactNode } from "react";
import styles from "./PageHeader.module.css";

/** Opening block of an inner page: label over a hairline, title, intro and optional actions. */
export function PageHeader(props: {
  label: string;
  title: string;
  intro: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className={styles.head}>
      <div className={`wrap ${styles.inner}`}>
        <p className={`label ${styles.kicker}`}>{props.label}</p>
        <h1>{props.title}</h1>
        <p className="lede">{props.intro}</p>
        {props.children}
      </div>
    </section>
  );
}
