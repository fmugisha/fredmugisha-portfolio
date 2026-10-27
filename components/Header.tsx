import { navLinks, site } from "@/data/site";
import BrandLink from "./BrandLink";
import ThemeToggle from "./ThemeToggle";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.site} id="top">
      <div className={`wrap ${styles.nav}`}>
        <BrandLink className={styles.brand} markClassName={styles.mark} avatar={site.avatar}>
          {site.name}
        </BrandLink>
        <nav className={styles.links} aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
        <a className={`btn btn-primary ${styles.cta}`} href="#contact">
          Hire me
        </a>
      </div>
    </header>
  );
}
