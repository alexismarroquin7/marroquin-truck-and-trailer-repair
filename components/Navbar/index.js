"use client";

import { useEffect, useState } from "react";

import styles from "./index.module.css"

export const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <nav
      className={`${styles['nav']} ${visible ? "" : styles['hidden']}`}
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