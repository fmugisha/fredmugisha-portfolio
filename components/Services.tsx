import { services } from "@/data/site";
import { Icon } from "./icons";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" className="wrap">
      <div className="sec-head">
        <div className="eyebrow">What I do</div>
        <h2>Four ways I take work off your plate</h2>
        <p className="lead">
          Each one is a system I set up once so it keeps working. You don&apos;t end up back where you started a
          week later.
        </p>
      </div>
      <div className={styles.cards}>
        {services.map((service) => (
          <article key={service.title} className={styles.card}>
            <div className={styles.icon}>
              <Icon name={service.icon} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
