import styles from "./index.module.css";

const serviceList = [
  {
    text: "Brake Adjustment"
  },
  {
    text: "Brake Replacement"
  },
  {
    text: "Hoses"
  },
  {
    text: "Oil Seal"
  },
  {
    text: "Tires"
  },
  {
    text: "Welding"
  }
]

export const ServicesSection = () => {
  return (
  <section
    className={styles['services']}
  >
    <div
      className={styles['services__content']}
    >
      <h3
        className={styles['services__title']}
      >Services</h3>
      <p>We offer a comprehensive range of maintenance and repair services to keep your trucks and trailers running.</p>
    </div>

    <ul
      className={styles['services__list']}
      >
      {serviceList.map((service, i) => (
        <li
          className={styles['services__item']}
          key={i}
        >
          • {service.text}
        </li>
      ))}
    </ul>
  </section>
  )
}