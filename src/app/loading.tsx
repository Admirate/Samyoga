import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.wrap} aria-label="Loading" role="status">
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.dot} />
    </div>
  );
}
