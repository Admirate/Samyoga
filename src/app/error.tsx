"use client";

import { useEffect } from "react";
import styles from "./fallback.module.css";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("[Samyoga] Unhandled error:", error);
  }, [error]);

  return (
    <main className={styles.wrap}>
      <span className={styles.code} aria-hidden="true">
        500
      </span>
      <h2>Something went wrong</h2>
      <p>
        An unexpected error occurred. Please try again or contact us via
        WhatsApp if the problem persists.
      </p>
      <button type="button" className={styles.btn} onClick={reset}>
        Try again
      </button>
    </main>
  );
}
