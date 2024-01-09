import styles from "./index.module.css"

export const Navbar = () => {
  return (
    <nav
      className={styles['nav']}
    >
      <ul
        className={styles['nav__list']}
      >
        <h6>Marroquin Truck & Trailer Repair</h6>
        <button>Menu</button>
      </ul>
    </nav>
  )
}