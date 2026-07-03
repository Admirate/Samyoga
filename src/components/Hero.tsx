"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY;
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${sy * 0.28}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        <Image
          src="/hero section page.jpg"
          alt="Samyoga Studio"
          fill
          priority
          quality={90}
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
        />
      </div>
      <div ref={contentRef} className={styles.heroContent}>
        <p className={`${styles.heroEyebrow} ${styles.fadeIn}`}>
          SAMYOGA STUDIO
        </p>
        <h1 className={`${styles.fadeIn} ${styles.d1}`}>
          Yoga for <em>Everyday Life.</em>
        </h1>
        <p className={`${styles.heroSub} ${styles.fadeIn} ${styles.d2}`}>
          Beyond movement. Beyond poses.
        </p>
        <p className={`${styles.heroSub} ${styles.fadeIn} ${styles.d2}`}>
          A practice that stays with you on and off the mat.
        </p>
        <p className={`${styles.heroTagline} ${styles.fadeIn} ${styles.d3}`}>
          Come As You Are.
        </p>
        <div className={`${styles.heroBtns} ${styles.fadeIn} ${styles.d4}`}>
          <a href="#classes" className={styles.btnCream}>
            View Classes
          </a>
          <a
            href="https://wa.me/919177711600"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnGlass}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
