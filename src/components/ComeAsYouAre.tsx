import FadeIn from "./FadeIn";
import styles from "./ComeAsYouAre.module.css";

export default function ComeAsYouAre() {
  return (
    <section className={styles.caya}>
      <div className={styles.cayaBg}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
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
