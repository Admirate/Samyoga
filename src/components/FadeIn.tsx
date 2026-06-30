"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./FadeIn.module.css";

type FadeInProps = {
  children: React.ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: "div" | "span" | "p";
  className?: string;
};

export default function FadeIn({
  children,
  delay = 0,
  as = "div",
  className = "",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Component = as;
  const delayClass = delay > 0 ? styles[`d${delay}`] : "";

  return (
    <Component
      ref={ref as never}
      className={`${styles.fade} ${visible ? styles.in : ""} ${delayClass} ${className}`}
    >
      {children}
    </Component>
  );
}
