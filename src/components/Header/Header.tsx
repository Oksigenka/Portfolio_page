import styles from './Header.module.scss';

export const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.header__left}>
        <div className={styles.header__tag}>Full Stack Developer</div>

        <h1 className={styles.header__title}>
          I'm <span>Kseniia Karpenko</span>, a full stack developer
        </h1>

        <p className={styles.header__description}>
          with over 2.5 years’ commercial experience in building responsive and scalable single-page applications (SPAs) using React, TypeScript and Node.js. I have worked as part of cross-functional teams, collaborating closely with back-end engineers, designers and quality assurance specialists to ensure the creation of flawless, comprehensive solutions.
        </p>
        <p className={styles.header__description}>
          I prioritize clean code, a well-structured component architecture,
          and a smooth user experience across different browsers and devices.
          I hold a bachelor’s degree in computer science, which combines
          a solid theoretical foundation with practical experience in product development.
        </p>

        <div className={styles.header__actions}>
          <button className={styles.btn + ' ' + styles['btn--secondary']}>View Work</button>
          <button className={styles.btn + ' ' + styles['btn--primary']}>Hire me</button>
        </div>
      </div>

      <div className={styles.header__right}>
        <div className={styles.header__accent} />
        <div className={styles.header__card}>
          <div className={styles.header__avatar}>KK</div>

          <div className={styles.header__status}>
            <span className={styles.header__dot} />
            Available for work
          </div>

          <div className={styles.header__location}>Eindhoven, Netherlands</div>
        </div>

        <div className={styles.header__stats}>
        <div className={styles.header__stats__item}>
            <strong className={styles.header__stats__num}>2+</strong>
            <span className={styles.header__stats__label}>Years exp.</span>
        </div>
        <div className={styles.header__stats__item}>
            <strong className={styles.header__stats__num}>10+</strong>
            <span className={styles.header__stats__label}>Projects</span>
        </div>
        <div className={styles.header__stats__item}>
            <strong className={styles.header__stats__num}>6</strong>
            <span className={styles.header__stats__label}>Clients</span>
        </div>
        </div>
      </div>
    </section>
  );
};