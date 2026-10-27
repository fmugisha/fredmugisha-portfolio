import { tools } from "@/data/site";
import styles from "./TrustStrip.module.css";

export default function TrustStrip() {
  return (
    <div className={styles.trust}>
      <div className={`wrap ${styles.row}`}>
        <span>Trusted tools:</span>
        {tools.map((tool) => (
          <span key={tool.name}>
            <b>{tool.name}</b>
            {tool.suffix}
          </span>
        ))}
      </div>
    </div>
  );
}
