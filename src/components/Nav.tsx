"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Nav.module.css";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#classes", label: "Classes" },
  { href: "#timings", label: "Timings" },
  { href: "#memberships", label: "Memberships" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.navLogo}>
          <a href="#">
            <Image
              src="/images/logo-horizontal.png"
              alt="Samyoga Studio"
              width={160}
              height={34}
              priority
            />
          </a>
        </div>
        <ul className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li>
            <a href="#visit" className={styles.navPill}>
              Visit Us
            </a>
          </li>
        </ul>
        <button
          type="button"
          className={styles.hamburger}
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`${styles.mobNav} ${mobileOpen ? styles.open : ""}`}>
        <button
          type="button"
          className={styles.mobClose}
          onClick={closeMobile}
          aria-label="Close menu"
        >
          ✕
        </button>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMobile}>
            {link.label}
          </a>
        ))}
        <a href="#visit" onClick={closeMobile}>
          Visit Us
        </a>
      </div>
    </>
  );
}
