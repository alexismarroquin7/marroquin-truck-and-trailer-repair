import { Phone, Email } from "@mui/icons-material";
import Link from "next/link";
import styles from "./index.module.css";

export const ContactSection = () => {
  return (
  <section
    className={styles['contact']}
    id="contact"
  >
    <div
      className={styles['contact__content']}
    >
      <h3
        className={styles['contact__title']}
      >Contact Us</h3>
      <p>If you have any questions about the diesel mechanic services we offer, give us a call.</p>
    </div>

    <div
      className={styles['contact__links']}
    >
      <Link
        href="tel:+11111111111"
        className={`${styles['contact__link']} ${styles['contact__link--primary']}`}
      >
        <Phone/>
        <p>
          Call Us
        </p>
      </Link>
      <Link
        href="mailto:email@domain.com"
        className={`${styles['contact__link']} ${styles['contact__link--secondary']}`}
      >
        <Email/>
        <p>
          Email
        </p>
      </Link>
    </div>

  </section>
  )
}