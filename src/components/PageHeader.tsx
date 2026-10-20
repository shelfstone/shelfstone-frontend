import type { ReactNode } from "react";
import styles from "./PageHeader.module.css";

/** Opening block of an inner page: label in the rail, title, intro and optional actions. */
export function PageHeader(props: {
  label: string;
  title: string;
  intro: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className={styles.head}>
      <div className="wrap">
        <div className={styles.page}>
          <p className={`label ${styles.rail}`}>{props.label}</p>
          <div className={styles.body}>
            <h1 className={styles.title}>{props.title}</h1>
            <p className={styles.intro}>{props.intro}</p>
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
}
