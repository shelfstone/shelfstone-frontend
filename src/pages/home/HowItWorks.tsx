import { Section } from "../../components/Section";
import { steps } from "../../content/home";
import styles from "./HowItWorks.module.css";

export function HowItWorks() {
  return (
    <Section
      id="how"
      number={1}
      label="How it works"
      title={
        <>
          <span className="line">From your list</span> <span className="line">to a written</span>{" "}
          <span className="line">offer</span>
        </>
      }
    >
      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <li key={step.title} className={styles.step}>
            <span className={styles.rule} aria-hidden="true">
              <span className={`num ${styles.number}`}>{String(index + 1).padStart(2, "0")}</span>
            </span>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.text}>{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
