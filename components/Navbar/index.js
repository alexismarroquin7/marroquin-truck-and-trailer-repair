import styles from "./index.module.css"

export const Navbar = () => {
  return (
    <nav
      className={styles['nav']}
    >
      <ul
        className={styles['nav__list']}
      >
        <p>Marroquin Truck & Trailer Repair</p>
        <button>Menu</button>
      </ul>
    </nav>
  )
}