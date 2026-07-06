"use client";

import FadeIn from "./FadeIn";
import styles from "./Timings.module.css";
import type { MembershipTab } from "./Memberships";

const TIMINGS = [
  {
    title: "Yoga",
    membershipTab: "yoga" as MembershipTab,
    morning: ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM"],
    evening: ["4:00 PM", "5:00 PM", "6:00 PM"],
  },
  {
    title: "Pilates",
    membershipTab: "pilates" as MembershipTab,
    morning: ["7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"],
    evening: ["3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"],
  },
] as const;

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function ClockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#DBA74A"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="9" />
      <polyline
        points="12,7 12,12 15,15"
        stroke="#DBA74A"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Timings() {
  return (
    <section className={styles.timings} id="timings">
      <FadeIn className={styles.sectionHead}>
        <span className={styles.eyebrow}>Class Timings</span>
        <h2>Choose your time.</h2>
      </FadeIn>
      <div className={styles.timingsGrid}>
        {TIMINGS.map((t, i) => (
          <FadeIn
            key={t.title}
            delay={(i + 1) as 1 | 2}
            className={styles.tCard}
            id={`timings-${t.title.toLowerCase()}`}
          >
            <div className={styles.tHead}>
              <ClockIcon />
              <h3>{t.title}</h3>
              <button
                type="button"
                className={styles.priceBtn}
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent<MembershipTab>("samyoga:membership-tab", {
                      detail: t.membershipTab,
                    })
                  );
                  scrollToId("memberships");
                }}
              >
                See Pricing
              </button>
            </div>
            <div className={styles.tBody}>
              <div className={styles.tGroup}>
                <span className={styles.tLbl}>Morning</span>
                <div className={styles.slots}>
                  {t.morning.map((slot) => (
                    <span key={slot} className={styles.slot}>
                      {slot}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.tGroup}>
                <span className={styles.tLbl}>Evening</span>
                <div className={styles.slots}>
                  {t.evening.map((slot) => (
                    <span key={slot} className={styles.slot}>
                      {slot}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
