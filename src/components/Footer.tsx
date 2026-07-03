import Image from "next/image";
import styles from "./Footer.module.css";

const FOOTER_LINKS = [
  { href: "#about", label: "About" },
  { href: "#classes", label: "Classes" },
  { href: "#timings", label: "Timings" },
  { href: "#memberships", label: "Memberships" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footTop}>
        <div className={styles.footLogo}>
          <Image
            src="/images/logo-horizontal.png"
            alt="Samyoga Studio"
            width={130}
            height={26}
          />
        </div>
        <ul className={styles.footLinks}>
          {FOOTER_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li>
            <a href="https://wa.me/919177711600" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.footBottom}>
        <p className={styles.footCopy}>
          © 2026 Samyoga Studio. Yoga &amp; Pilates, Hyderabad.
        </p>
        <p className={styles.footCopy}>
          Designed by{" "}
          <a href="https://admirate.in" target="_blank" rel="noopener noreferrer">
            Admirate
          </a>
        </p>
      </div>
    </footer>
  );
}
