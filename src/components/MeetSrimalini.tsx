import Image from "next/image";
import FadeIn from "./FadeIn";
import styles from "./MeetSrimalini.module.css";

export default function MeetSrimalini() {
  return (
    <section className={styles.meet} id="srimalini">
      <div className={styles.meetInner}>
        <div className={styles.meetPhoto}>
          <Image
            src="/yoga-is-a-way-of-life.png"
            alt="Srimalini — Yoga Teacher"
            fill
            quality={90}
            style={{ objectFit: "cover", objectPosition: "center top", filter: "brightness(0.85) saturate(1.1)" }}
          />
        </div>
        <div className={styles.meetText}>
          <FadeIn as="span" className={styles.eyebrow}>
            Meet Srimalini
          </FadeIn>
          <FadeIn delay={1}>
            <h2>
              Yoga is a
              <br />
              way of life.
            </h2>
          </FadeIn>
          <div className={styles.stats}>
            <FadeIn delay={1}>
              <div>
                <span className={styles.statN}>15+</span>
                <span className={styles.statL}>Years Teaching</span>
              </div>
            </FadeIn>
            <FadeIn delay={2}>
              <div>
                <span className={styles.statN}>500+</span>
                <span className={styles.statL}>Hours Certified</span>
              </div>
            </FadeIn>
            <FadeIn delay={3}>
              <div>
                <span className={styles.statN}>350+</span>
                <span className={styles.statL}>Students Globally</span>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={2}>
            <p>
              With over 15 years of teaching experience, 500+ hours of
              certified training, and 350+ students guided globally,
              Srimalini believes yoga isn&apos;t something you practise for
              an hour—it&apos;s something you carry with you every day.
            </p>
          </FadeIn>
          <FadeIn delay={3} className={styles.quote}>
            <blockquote>
              &ldquo;I don&apos;t teach yoga as a cure. I teach it as a way of
              living.&rdquo;
            </blockquote>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
