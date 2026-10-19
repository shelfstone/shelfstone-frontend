import type { ReactNode } from "react";
import styles from "./PageHeader.module.css";

/** Opening block of an inner page: eyebrow, title, intro and optional actions. */
export function PageHeader(props: {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className={`dot-field ${styles.head}`}>
      <div className={`wrap ${styles.inner}`}>
        <p className="eyebrow">{props.eyebrow}</p>
        <h1>{props.title}</h1>
        <p className="lede">{props.intro}</p>
        {props.children}
      </div>
    </section>
  );
}
