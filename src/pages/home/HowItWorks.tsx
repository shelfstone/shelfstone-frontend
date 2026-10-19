import { CropMarks } from "../../components/CropMarks";
import { SectionHeading } from "../../components/SectionHeading";
import { steps } from "../../content/home";
import styles from "./HowItWorks.module.css";

export function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="wrap">
        <SectionHeading number={3} label="How it works" title="From your list to a written offer" />
        <div className={styles.frame}>
          <CropMarks />
          <ol className={styles.steps}>
            {steps.map((step, index) => (
              <li key={step.title} className={styles.step}>
                <span className={`num ${styles.number}`} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.text}>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
