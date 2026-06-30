import FadeIn from "./FadeIn";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.final}>
      <FadeIn>
        <h2>
          Begin Your <em>Practice.</em>
        </h2>
      </FadeIn>
      <FadeIn delay={1} as="p">
        Discover yoga that becomes part of your everyday life.
      </FadeIn>
      <FadeIn delay={2}>
        <a href="#classes" className={styles.btnPrimary}>
          View Classes
        </a>
      </FadeIn>
    </section>
  );
}
