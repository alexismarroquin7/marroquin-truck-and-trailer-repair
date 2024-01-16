"use client";

import { useEffect, useState } from "react";

import styles from "./index.module.css"
import { MobileMenu } from "./MobileMenu";
import { MenuButton } from "./MenuButton";
import Link from "next/link";

export const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

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
    <>
    <nav
      className={`${styles['nav']} ${visible ? "" : styles['hidden']}`}
    >
      <ul
        className={styles['nav__list']}
      >
        <Link
          href="/"
          className={styles['nav__title']}
        >
          <h6>Marroquin Truck & Trailer Repair</h6>
        </Link>
        <MenuButton
          open={open}
          toggleOpen={toggleOpen}
        />
      </ul>
    </nav>
    <div
      style={{marginBottom: "6.5rem"}}
    ></div>
    <MobileMenu
      open={open}
      toggleOpen={toggleOpen}
    />
    </>
  )
}