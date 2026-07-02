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
    <svg
      className={styles.tick}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="10" stroke="#5A8A6A" strokeWidth="1.5" />
    </svg>
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
