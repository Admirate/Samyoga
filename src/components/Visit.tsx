import FadeIn from "./FadeIn";
import styles from "./Visit.module.css";

export default function Visit() {
  return (
    <section className={styles.visit} id="visit">
      <div className={styles.visitInner}>
        <div>
          <FadeIn as="span" className={styles.eyebrow}>
            Visit Us
          </FadeIn>
          <FadeIn delay={1}>
            <h2>Samyoga Studio</h2>
          </FadeIn>
          <FadeIn delay={1} as="div" className={styles.visitAddr}>
            <p>
              2nd Floor, Above Green Trends
              <br />
              Himayatnagar Road, Hyderabad
            </p>
          </FadeIn>
          <FadeIn delay={2} as="p" className={styles.visitPhone}>
            +91 91777 11600
          </FadeIn>
          <FadeIn delay={2} as="p" className={styles.visitPhoneSub}>
            Call / WhatsApp
          </FadeIn>
          <FadeIn delay={3} className={styles.visitBtns}>
            <a href="tel:+919177711600" className={styles.btnRim}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z" />
              </svg>
              Call Now
            </a>
            <a
              href="https://wa.me/919177711600"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnGold}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="https://maps.google.com/?q=Himayatnagar+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnRim}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Get Directions
            </a>
          </FadeIn>
        </div>
        <FadeIn delay={2} className={styles.visitMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3!2d78.4866!3d17.4065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99b8d5bd855d%3A0x8d0e1f4de1d21d8c!2sHimayatnagar%2C+Hyderabad%2C+Telangana!5e0!3m2!1sen!2sin!4v1234567890"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Samyoga Studio Location"
          />
        </FadeIn>
      </div>
    </section>
  );
}
