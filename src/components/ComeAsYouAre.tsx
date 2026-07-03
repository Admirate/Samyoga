import Image from "next/image";
import FadeIn from "./FadeIn";
import styles from "./ComeAsYouAre.module.css";

export default function ComeAsYouAre() {
  return (
    <section className={styles.caya}>
      <div className={styles.cayaBg}>
        <Image
          src="/come-as-you-are.png"
          alt=""
          aria-hidden="true"
          fill
          priority
          quality={90}
          style={{
            objectFit: "cover",
            objectPosition: "center 35%",
            filter: "brightness(0.22) saturate(0.8) sepia(0.3)",
          }}
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
