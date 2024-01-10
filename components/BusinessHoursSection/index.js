import styles from "./index.module.css";

const businessHours = [
  {
    day: "Sunday",
    hours: "Open 24 hours"
  },
  {
    day: "Monday",
    hours: "Open 24 hours"
  },
  {
    day: "Tuesday",
    hours: "Open 24 hours"
  },
  {
    day: "Wednesday",
    hours: "Open 24 hours"
  },
  {
    day: "Thursday",
    hours: "Open 24 hours"
  },
  {
    day: "Friday",
    hours: "Open 24 hours"
  },
  {
    day: "Saturday",
    hours: "Open 24 hours"
  },
]

export const BusinessHoursSection = () => {
  return (
  <section
    className={styles['hours']}
  >
    <h3
      className={styles['hours__title']}
    >Business Hours</h3>
  

    <ul
      className={styles['hours__list']}
    >
      {businessHours.map((b, i) => (
        <li
          key={i}
          className={styles['hours__item']}
        >
          <p>{b.day}</p>
          <p>{b.hours}</p>
        </li>
      ))}
    </ul>

  </section>
  )
}