import FadeIn from "./FadeIn";
import styles from "./WhySamyoga.module.css";

const REASONS = [
  "Exclusive Small Batches",
  "Personal Guidance",
  "Community-Based Learning",
  "Online & Offline Classes",
  "Morning & Evening Sessions",
  "Beginners Welcome",
];

function Tick() {
  return (
    <div className={styles.tick}>
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <polyline
          points="2,6 5,9 10,3"
          stroke="#F5F3ED"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function WhySamyoga() {
  return (
    <section className={styles.why} id="why">
      <FadeIn className={styles.sectionHead}>
        <span className={styles.eyebrow}>Why Samyoga</span>
        <h2>A practice designed for real life.</h2>
      </FadeIn>
      <div className={styles.whyGrid}>
        {REASONS.map((reason, i) => (
          <FadeIn
            key={reason}
            delay={(Math.floor(i / 2) + 1) as 1 | 2 | 3}
            className={styles.whyItem}
          >
            <Tick />
            <span>{reason}</span>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
