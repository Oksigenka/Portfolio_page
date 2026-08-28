import styles from './Header.module.scss';

export const Header = () => {
  return (
    <section className={styles.header}>
      {/* LEFT CARD */}
      <div className={styles.header__cardWrapper}>
        <div className={styles.header__accent} />

        <div className={styles.header__card}>
          {/* PROFILE */}
          <div className={styles.header__profile}>
            <div className={styles.header__avatar}>
              <img
                  src="./icons/avatar.png"
                  alt="GitHub"
                  className={styles.header__avatarIcon}
                />
            </div>

            <div className={styles.header__identity}>
              <div className={styles.header__tag}>
                Full Stack Developer
              </div>

              <h1 className={styles.header__name}>
                Kseniia <span className={styles.header__name__span}>Karpenko</span>
              </h1>

              <div className={styles.header__status}>
                <span className={styles.header__dot} />
                Available for work
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className={styles.header__divider} />

          {/* CONTACT INFO */}
          <div className={styles.header__contacts}>
            <div className={styles.header__contact}>
              <span className={styles.header__contactIcon}>✉</span>
              <span className={styles.header__contactLabel}>Email</span>
              <span className={styles.header__contactValue}>
                kseniia.karpenko.dev@gmail.com
              </span>
            </div>

            <div className={styles.header__contact}>
              <span className={styles.header__contactIcon}>☎</span>
              <span className={styles.header__contactLabel}>Phone</span>
              <a
                href="tel:+31629356136"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.header__contactValue}
              >
                <span className={styles.header__contactValue}>
                  +31 6 29 35 61 36
                </span>
              </a>
            </div>

            <div className={styles.header__contact}>
              <span className={styles.header__contactIcon}>▣</span>
              <span className={styles.header__contactLabel}>Date of birth</span>
              <span className={styles.header__contactValue}>
                21.02.2005
              </span>
            </div>

            <div className={styles.header__contact}>
              <span className={styles.header__contactIcon}>⌖</span>
              <span className={styles.header__contactLabel}>Location</span>
              <span className={styles.header__contactValue}>
                Eindhoven, Netherlands
              </span>
            </div>

            <div className={styles.header__contactLogo}>
              <a
                href="https://linkedin.com/in/kseniia-karpenko"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./icons/linkedin.png"
                  alt="LinkedIn"
                  className={styles.header__contactValueIcon}
                />
              </a>
            {/* </div>

            <div className={styles.header__contact}> */}
              {/* <span className={styles.header__contactIcon}>⌁</span>
              <span className={styles.header__contactLabel}>GitHub</span> */}
              <a
                href="https://github.com/kseniia-karpenko"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./icons/github.png"
                  alt="GitHub"
                  className={styles.header__contactValueIcon}
                />
              </a>
            </div>

            {/* <div className={styles.header__contact}>
              <span className={styles.header__contactIcon}>◎</span>
              <span className={styles.header__contactLabel}>Website</span>
              <span className={styles.header__contactValue}>
                kseniia.dev
              </span>
            </div> */}
          </div>

          {/* STATS */}
          <div className={styles.header__stats}>
            <div className={styles.header__statsItem}>
              <strong className={styles.header__statsItem__strong}>2.5+</strong>
              <span className={styles.header__statsItem__span}>Years Exp.</span>
            </div>

            <div className={styles.header__statsItem}>
              <strong className={styles.header__statsItem__strong}>4–6</strong>
              <span className={styles.header__statsItem__span}>Projects</span>
            </div>

            <div className={styles.header__statsItem}>
              <strong className={styles.header__statsItem__strong}>BSc</strong>
              <span className={styles.header__statsItem__span}>CS Degree</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className={styles.header__content}>
        <h2 className={styles.header__heading}>
              About{' '}
              <em className={styles.header__heading__em}>me</em>.
            </h2>
        <p className={styles.header__content__paragraph}>
          I'm a full stack developer with{' '}
          <strong className={styles.header__content__paragraph}>2.5+ years of commercial experience</strong> crafting
          responsive, scalable SPAs with React, TypeScript, and Node.js.
        </p>

        <p className={styles.header__content__paragraph}>
          I've shipped production-ready features across{' '}
          <strong className={styles.header__content__paragraph}>4–6 real-world projects</strong> within cross-functional
          teams — collaborating closely with backend engineers, designers,
          and QA specialists to deliver polished end-to-end solutions.
        </p>

        <p className={styles.header__content__paragraph}>
          I write clean, maintainable code and architect components that
          scale — always with a sharp eye on cross-browser consistency and
          user experience. My Computer Science degree gives me both the
          theoretical depth to tackle complex problems and the hands-on
          experience to ship what actually matters.
        </p>
      </div>
    </section>
  );
};