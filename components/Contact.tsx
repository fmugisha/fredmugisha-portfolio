import { site, socials } from "@/data/site";
import CopyEmail from "./CopyEmail";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="wrap">
        <div className={styles.box}>
          <div className="eyebrow">Let&apos;s talk</div>
          <h2>Tell me what&apos;s eating your time</h2>
          <p>
            Send a short message about the task or workflow you want off your plate. I reply fast, and the first
            scope is free.
          </p>
          <CopyEmail email={site.email} />
          <div className={styles.socials}>
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
