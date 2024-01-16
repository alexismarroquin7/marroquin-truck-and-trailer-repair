import Link from "next/link";
import styles from "./index.module.css"

import PhoneIcon from '@mui/icons-material/Phone';
import Image from "next/image";

import heroImage from "../../images/hero.jpg";

export const HeroSection = () => {
  return (
  <section
    className={styles['hero']}
  >
    <div
      className={styles['hero__image']}
    >
      <Image
        src={heroImage}
        alt="hero image"
        fill
        objectFit="cover"
        objectPosition="50% 60%"
      />
    </div>

    <div
      className={styles['hero__text']}
    >
      <h3
       className={styles['hero__title']}
      >Marroquin Truck & Trailer Repair</h3>
      <p>Mobile Truck & Trailer Repair Services in the Bay Area</p>
    </div>

    <div
      className={styles['hero__links']}
    >
    
      <Link
        className={`${styles['hero__link']} ${styles['hero__link--primary']}`}
        href="tel:+11111111111"
      >
        <PhoneIcon/>
        <p>
          Call Us
        </p>
      </Link>

      <Link
        className={`${styles['hero__link']} ${styles['hero__link--secondary']}`}
        href="#services"
      >
        <p>Services
        </p>
      </Link>
    
    </div>
  </section>
  )
}