import { Section } from "../../components/Section";
import { steps } from "../../content/home";
import styles from "./HowItWorks.module.css";

export function HowItWorks() {
  return (
    <Section
      id="how"
      number="01"
      label="How it works"
      title={
        <>
          <span className="line">From your list</span>{" "}
          <span className="line">to a written offer</span>
        </>
      }
    >
      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <li key={step.title} className={styles.step}>
            <h3>
              <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>{" "}
              {step.title}
            </h3>
            <p className={styles.text}>{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
