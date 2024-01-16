import styles from "./index.module.css"


export const MenuButton = ({open, toggleOpen}) => {
  return (
  <button
    className={styles['menubutton']}
    onClick={toggleOpen}
  >
    <svg
      className={styles['menubutton__svg']}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        className={`
          ${styles['menubutton__path']} 
          ${styles['menubutton__pathA']} 
          ${open ? styles['menubutton__pathAOpen'] : ""}
        `}
      />
      <path 
        className={`
          ${styles['menubutton__path']} 
          ${styles['menubutton__pathB']} 
          ${open ? styles['menubutton__pathBOpen'] : ""}
        `}
      />
      <path 
        className={`
          ${styles['menubutton__path']} 
          ${styles['menubutton__pathC']} 
          ${open ? styles['menubutton__pathCOpen'] : ""}
        `}
      />
    </svg>
  </button>
  )
}