import { steps } from "@/data/site";
import styles from "./Process.module.css";

export default function Process() {
  return (
    <section id="process" className={styles.process}>
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">How it works</div>
          <h2>From first message to a system that runs</h2>
        </div>
        <ol className={styles.steps}>
          {steps.map((step) => (
            <li key={step.title} className={styles.step}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
