"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import styles from "./Memberships.module.css";

type TabId = "yoga" | "pilates" | "combo";

const TABS: { id: TabId; label: string }[] = [
  { id: "yoga", label: "Yoga" },
  { id: "pilates", label: "Pilates" },
  { id: "combo", label: "Yoga + Pilates" },
];

const PRICING: Record<
  TabId,
  { label: string; title: string; price: string; featured?: boolean }[]
> = {
  yoga: [
    { label: "Flexible", title: "Drop-In Session", price: "500" },
    { label: "Monthly", title: "1 Month", price: "3,000" },
    {
      label: "3 Months",
      title: "Best Value",
      price: "8,100",
      featured: true,
    },
    { label: "6 Months", title: "Committed", price: "15,300" },
  ],
  pilates: [
    { label: "Flexible", title: "Drop-In Session", price: "1,200" },
    { label: "Monthly · 8 Sessions", title: "Monthly", price: "8,640" },
    {
      label: "Monthly · 12 Sessions",
      title: "Best Value",
      price: "11,520",
      featured: true,
    },
  ],
  combo: [
    {
      label: "Essential Combo",
      title: "3 Yoga + 2 Pilates / Week",
      price: "10,956",
    },
    {
      label: "Strength Combo",
      title: "2 Yoga + 3 Pilates / Week",
      price: "13,950",
      featured: true,
    },
    {
      label: "Complete Combo",
      title: "3 Yoga + 3 Pilates / Week",
      price: "14,940",
    },
  ],
};

export default function Memberships() {
  const [active, setActive] = useState<TabId>("yoga");

  return (
    <section className={styles.memberships} id="memberships">
      <div className={styles.membershipsWrap}>
        <FadeIn className={styles.sectionHead}>
          <span className={styles.eyebrow}>Memberships</span>
          <h2>Choose your commitment.</h2>
        </FadeIn>

        <div className={styles.tabRow}>
          <div className={styles.tabs}>
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`${styles.tab} ${active === tab.id ? styles.active : ""}`}
                onClick={() => setActive(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.pricingGrid}>
          {PRICING[active].map((card, i) => (
            <FadeIn
              key={card.title}
              delay={Math.min(i, 3) as 0 | 1 | 2 | 3}
              className={`${styles.pCard} ${card.featured ? styles.feat : ""}`}
            >
              <span className={styles.pLabel}>{card.label}</span>
              <h4>{card.title}</h4>
              <span className={styles.pAmt}>
                <small>₹</small>
                {card.price}
              </span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
