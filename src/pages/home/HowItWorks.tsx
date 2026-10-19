import { steps } from "../../content/home";
import styles from "./HowItWorks.module.css";

/** The four steps drawn as a shipping route with stops. */
export function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="wrap">
        <p className="eyebrow">How it works</p>
        <h2>From your list to a written offer</h2>
        <ol className={styles.route}>
          {steps.map((step, index) => (
            <li key={step.title} className={styles.stop}>
              <span className={styles.stopLabel}>Stop {index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
