import { Link } from "@mui/material";
import { routes } from "../../../data";

import styles from "./index.module.css";

export const MobileMenu = ({open, toggleOpen}) => {
  return (
  <div
    className={`${styles['mobilemenu']} ${open ? "" : styles['hidden']}`}
    onClick={toggleOpen}
  >
    <ul
      className={styles['mobilemenu__list']}
    >
      {routes.map((route, i) => (
        <Link
          key={i}
          href={route.href}
          className={styles['mobilemenu__link']}
        >
          <p>{route.title}</p>
        </Link>
      ))}
    </ul>
  </div>
  )
}