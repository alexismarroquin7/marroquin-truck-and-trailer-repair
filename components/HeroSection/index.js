import styles from "./index.module.css"

import PhoneIcon from '@mui/icons-material/Phone';

export const HeroSection = () => {
  return (
  <section
    className={styles['hero']}
  >
    <div
      className={styles['hero__image']}
    >
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
      className={styles['hero__buttons']}
    >
    
      <button
        className={`${styles['hero__button']} ${styles['hero__button--primary']}`}
      >
        <PhoneIcon/>
        Call Us
      </button>

      <button
        className={`${styles['hero__button']} ${styles['hero__button--secondary']}`}
      >Services</button>
    
    </div>
  </section>
  )
}