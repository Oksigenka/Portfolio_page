import styles from './Contact.module.scss';

interface ContactLink {
  label: string;
  href: string;
}

const contactLinks: ContactLink[] = [
  {
    label: '↗ GitHub',
    href: 'https://github.com/Oksigenka',
  },
  {
    label: '↗ LinkedIn',
    href: 'https://www.linkedin.com/in/kseniia-karpenko-109b78291/',
  },
  {
    label: '↗ Instagram',
    href: 'https://www.instagram.com/k.karpenko_a?igsi=eW0weDQybXRuMHU3&utm_source=qr',
  },
];

export const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contact__content}>
        <div className={styles.sectionLabel}>
          <span>07</span>
          <span className={styles.sectionLabel__dash} />
          <span>LET'S TALK</span>
        </div>

        <h2 className={styles.contact__heading}>
          Ready to build something <em>great</em>?
        </h2>

        <p className={styles.contact__description}>
          I'm currently open to full-time opportunities.
          <br className={styles.contact__desktopBreak} />
          Let's make something memorable.
        </p>

        <a
          className={styles.contact__email}
          href="mailto:kseniia.karpenko.dev@gmail.com"
        >
          Text me → kseniia.karpenko.dev@gmail.com
        </a>

        <div className={styles.contact__links}>
          {contactLinks.map((link) => (
            <a
              className={styles.contact__link}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              key={link.label}
            >
              {link.label}
            </a>
          ))}

          <a
            className={styles.contact__link}
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            ↗ Download CV
          </a>
        </div>
      </div>

      <footer className={styles.footer}>
        <span>© 2026 Kseniia Karpenko. All rights reserved.</span>

        <span>Built with React and Scss &amp; vanilla Ts.</span>

        <span>Eindhoven, Netherlands</span>
      </footer>
    </section>
  );
};