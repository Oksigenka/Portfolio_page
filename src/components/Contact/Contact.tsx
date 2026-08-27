import styles from './Contact.module.scss';

interface ContactLink {
  label: string;
  href: string;
}

const contactLinks: ContactLink[] = [
  {
    label: '↗ GitHub',
    href: 'https://github.com/',
  },
  {
    label: '↗ LinkedIn',
    href: 'https://www.linkedin.com/',
  },
  {
    label: '↗ Twitter / X',
    href: 'https://x.com/',
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
          I'm currently open to freelance projects and full-time
          <br className={styles.contact__desktopBreak} />
          opportunities. Let's make something memorable.
        </p>

        <a
          className={styles.contact__email}
          href="mailto:alex@mercer.dev"
        >
          Say hello → alex@mercer.dev
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
        <span>© 2025 Alex Mercer. All rights reserved.</span>

        <span>Built with HTML, CSS &amp; vanilla JS.</span>

        <span>Amsterdam, Netherlands</span>
      </footer>
    </section>
  );
};