import Link from "next/link"
import styles from "./index.module.css"
import { routes } from "../../data"


export const Footer = () => {
  return <footer
    className={styles['footer']}
  >
    <ul
      className={styles['footer__list']}
    >
      {routes.map((route, i) => (
        <li
          key={i}
          className={styles['footer__item']}
        >
          <Link
            href={route.href}
            className={styles['footer__link']}
          >
            <p>{route.title}</p>
          </Link>
        </li>
      ))}
    </ul>

    <div
      className={styles['footer__content']}
    >
      <p>© 2024 Marroquin Truck & Trailer Repair.</p>
      <p>All rights reserved.</p>
    </div>
  </footer>
}