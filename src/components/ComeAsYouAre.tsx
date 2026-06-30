"use client";

import { useEffect, useRef } from "react";
import FadeIn from "./FadeIn";
import styles from "./ComeAsYouAre.module.css";

export default function ComeAsYouAre() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const img = imgRef.current;
      if (!img) return;
      const rect = img.parentElement!.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      img.style.transform = `translateY(${center * 0.35}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className={styles.caya}>
      <div className={styles.cayaBg}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1800&q=85&fit=crop&crop=center"
          alt=""
        />
      </div>
      <div className={styles.cayaInner}>
        <FadeIn as="div">
          <h2>
            Come As <em>You Are.</em>
          </h2>
        </FadeIn>
        <FadeIn delay={1} as="div" className={styles.cayaLines}>
          <p>
            You don&apos;t need experience.
            <br />
            You don&apos;t need flexibility.
            <br />
            You don&apos;t need to be fit enough to begin.
          </p>
        </FadeIn>
        <FadeIn delay={2} as="div" className={styles.cayaPunch}>
          <p>You simply need to show up.</p>
        </FadeIn>
      </div>
    </section>
  );
}
