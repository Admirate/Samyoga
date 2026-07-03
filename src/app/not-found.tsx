import Link from "next/link";
import type { Metadata } from "next";
import styles from "./fallback.module.css";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className={styles.wrap}>
      <span className={styles.code} aria-hidden="true">
        404
      </span>
      <h1>Page not found</h1>
      <p>
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved.
      </p>
      <Link href="/" className={styles.btn}>
        Back to home
      </Link>
    </main>
  );
}
