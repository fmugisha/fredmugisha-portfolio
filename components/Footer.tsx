import { site } from "@/data/site";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.site}>
      <div className={`wrap ${styles.foot}`}>
        <span>
          © {year} {site.name} · {site.role}
        </span>
        <span>{site.location} · Available for remote work</span>
      </div>
    </footer>
  );
}
