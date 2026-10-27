import { heroBadges } from "@/data/site";
import WorkflowDiagram from "./WorkflowDiagram";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`wrap ${styles.hero}`}>
      <div className={styles.grid}>
        <div>
          <div className="eyebrow">Tech-Savvy Virtual Assistant</div>
          <h1 className={styles.title}>
            I turn messy workflows into <span className={styles.hl}>systems that run themselves</span>.
          </h1>
          <p className={`lead ${styles.lead}`}>
            I do spreadsheet automation, Notion, Airtable and Trello workspaces, and custom web development,
            with the mindset of a computer scientist rather than a copy-paste VA. You hand over the chaos, and
            you get back a system you can actually trust.
          </p>
          <div className={styles.ctaRow}>
            <a className="btn btn-primary" href="#contact">
              Start a project
            </a>
            <a className="btn btn-ghost" href="#services">
              See what I build
            </a>
          </div>
          <div className={styles.meta}>
            {heroBadges.map((badge) => (
              <span key={badge}>
                <span className="dot" /> {badge}
              </span>
            ))}
          </div>
        </div>

        <WorkflowDiagram />
      </div>
    </section>
  );
}
