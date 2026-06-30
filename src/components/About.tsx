import FadeIn from "./FadeIn";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div>
        <FadeIn as="span" className={styles.eyebrow}>
          About Samyoga
        </FadeIn>
        <FadeIn delay={1}>
          <h2>
            More Than
            <br />a Yoga Studio.
          </h2>
        </FadeIn>
      </div>
      <div>
        <FadeIn delay={1}>
          <p>
            Samyoga is a community built around mindful movement and
            conscious living.
          </p>
        </FadeIn>
        <FadeIn delay={2}>
          <p>
            We don&apos;t teach yoga as a cure or a trend. We teach it as a
            practice that becomes part of your everyday life. Whether
            you&apos;re a beginner or an experienced practitioner,
            you&apos;ll find a space where every body is welcomed and every
            journey is respected.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
