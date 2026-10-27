import { aboutParagraphs, facts } from "@/data/site";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className="wrap">
      <div className={styles.grid}>
        <div>
          <div className="eyebrow">Who you&apos;re working with</div>
          <h2>A VA who can actually read the code</h2>
          <div className={styles.bio}>
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className={styles.facts}>
          {facts.map((fact) => (
            <div key={fact.label} className={styles.fact}>
              <div className={styles.k}>{fact.label}</div>
              <div className={styles.v}>
                {fact.value}
                <small>{fact.detail}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
