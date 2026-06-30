import FadeIn from "./FadeIn";
import styles from "./Classes.module.css";

const CLASSES = [
  {
    tag: "Yoga",
    title: "Yoga",
    description:
      "Build strength, flexibility, balance and awareness through a consistent practice designed for every stage of your journey.",
    image:
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&q=85&fit=crop&crop=center",
  },
  {
    tag: "Pilates",
    title: "Pilates",
    description:
      "Improve posture, core strength and body control through structured, low-impact movement.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=85&fit=crop&crop=center",
  },
  {
    tag: "Yoga + Pilates",
    title: "Yoga + Pilates",
    description:
      "A balanced approach combining mindful movement with functional strength for complete well-being.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=85&fit=crop&crop=center",
  },
] as const;

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
              <div className={styles.classImg}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.image} alt={c.title} />
              </div>
              <div className={styles.classBody}>
                <span className={styles.classTag}>{c.tag}</span>
                <h3>{c.title}</h3>
                <p>{c.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
