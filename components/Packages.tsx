import { packages } from "@/data/site";
import { Icon } from "./icons";
import styles from "./Packages.module.css";

export default function Packages() {
  return (
    <section id="packages" className="wrap">
      <div className="sec-head">
        <div className="eyebrow">Packages</div>
        <h2>Clear scope, clear price</h2>
        <p className="lead">
          These are starting points, not fixed boxes. Tell me about your project and I&apos;ll give you an exact
          quote. All prices are in USD.
        </p>
      </div>
      <div className={styles.tiers}>
        {packages.map((pkg) => (
          <div key={pkg.name} className={`${styles.tier} ${pkg.featured ? styles.feature : ""}`}>
            {pkg.tag && <span className={styles.tag}>{pkg.tag}</span>}
            <div className={styles.name}>{pkg.name}</div>
            <div className={styles.price}>
              {pkg.price}
              <small>{pkg.unit}</small>
            </div>
            <p className={styles.desc}>{pkg.description}</p>
            <ul>
              {pkg.features.map((feature) => (
                <li key={feature}>
                  <Icon name="check" size={16} strokeWidth={2.5} />
                  {feature}
                </li>
              ))}
            </ul>
            <a className={`btn ${pkg.featured ? "btn-primary" : "btn-ghost"}`} href="#contact">
              {pkg.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
