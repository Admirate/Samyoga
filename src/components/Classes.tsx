"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import styles from "./Classes.module.css";
import type { MembershipTab } from "./Memberships";

const CLASSES = [
  {
    title: "Yoga",
    description:
      "Build strength, flexibility, balance and awareness through a consistent practice designed for every stage of your journey.",
    image: "/Rectangle.png",
    timingsId: "timings-yoga",
    membershipTab: "yoga" as MembershipTab,
  },
  {
    title: "Pilates",
    description:
      "Improve posture, core strength and body control through structured, low-impact movement.",
    image: "/Pilates.jpeg",
    timingsId: "timings-pilates",
    membershipTab: "pilates" as MembershipTab,
  },
  {
    title: "Yoga + Pilates",
    description:
      "A balanced approach combining mindful movement with functional strength for complete well-being.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=85&fit=crop&crop=center",
    timingsId: "timings",
    membershipTab: "combo" as MembershipTab,
  },
] as const;

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Classes() {
  return (
    <section className={styles.classes} id="classes">
      <div className={styles.classesWrap}>
        <FadeIn className={styles.sectionHead}>
          <span className={styles.eyebrow}>Our Classes</span>
          <h2>Find your practice.</h2>
        </FadeIn>
        <div className={styles.classesGrid}>
          {CLASSES.map((c, i) => (
            <FadeIn key={c.title} delay={(i + 1) as 1 | 2 | 3} className={styles.classCard}>
              <div
                className={styles.classCardInner}
                role="button"
                tabIndex={0}
                aria-label={`View ${c.title} class timings`}
                onClick={() => scrollToId(c.timingsId)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    scrollToId(c.timingsId);
                  }
                }}
              >
                <div className={styles.classImg}>
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    quality={90}
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      filter: "brightness(0.8) saturate(1.05)",
                      transition: "transform 0.7s ease",
                    }}
                  />
                </div>
                <div className={styles.cardBtns}>
                  <button
                    type="button"
                    className={styles.priceBtn}
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToId(c.timingsId);
                    }}
                  >
                    See Timings
                  </button>
                  <button
                    type="button"
                    className={styles.priceBtn}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.dispatchEvent(
                        new CustomEvent<MembershipTab>("samyoga:membership-tab", {
                          detail: c.membershipTab,
                        })
                      );
                      scrollToId("memberships");
                    }}
                  >
                    See Pricing
                  </button>
                </div>
                <div className={styles.classBody}>
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
