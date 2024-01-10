import { LocationOn } from "@mui/icons-material";

import styles from "./index.module.css";

const locations = [
  {
    text: "Gilroy, CA"
  },
  {
    text: "Castroville, CA"
  },
  {
    text: "Salinas, CA" 
  },
  {
    text: "San Jose, CA" 
  },
  {
    text: "Watsonville, CA" 
  },
  {
    text: "Santa Nella, CA" 
  },
]

export const ServiceAreaSection = () => {
  return (
  <section
    className={styles['servicearea']}
    id="servicearea"
  >

    <div
      className={styles['servicearea__content']}
    >
      <h3
        className={styles['servicearea__title']}
      >Service Area</h3>
      <p>We operate 24 hours a day, servicing the entire Bay Area. Our home base is in Gilroy, CA.</p>
    </div>

    <ul
      className={styles['servicearea__list']}
    >
      {locations.map((location, i) => (
        <li
          key={i}
          className={styles['servicearea__item']}
        >
          <LocationOn/>
          {location.text}
        </li>
      ))}
    </ul>

  </section>
  )
}