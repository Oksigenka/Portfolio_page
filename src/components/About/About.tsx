import styles from './About.module.scss';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '👩‍💻',
    title: 'QUICK LEARNER',
    description:
      'I pick up new technologies quickly — e.g., taught myself C in six months and built a full-fledged game.',
  },
  {
    icon: '💻',
    title: 'CROSS-FUNCTIONAL AND COMMUNICATION SKILLS',
    description:
      'I work effectively with backend developers, designers, QA specialists, and clients, easily finding common ground with people from different fields.',
  },
  {
    icon: '🧩',
    title: 'ATTENTION TO DETAIL',
    description:
      'I pay special attention to code quality and UI.',
  },
  {
    icon: '💻',
    title: 'ADAPTABILITY',
    description:
      'I easily adapt to new technologies and work environments, paying close attention to detail. ',
  },
];

export const About = () => {
  return (
    <section className={styles.aboutCard} id="about">
      <div className={styles.aboutCard__container}>

        <div className={styles.sectionLabel}>
          <span>01</span>
          <span className={styles.sectionLabel__dash} />
          <span>Competences</span>
          <span className={styles.sectionLabel__line} />
        </div>

        <div className={styles.aboutCard__grid}>

          {/* LEFT COLUMN */}
          <div className={styles.aboutCard__content}>

            <h2 className={styles.aboutCard__heading}>
              Obsessed with{' '}
              <em className={styles.aboutCard__heading__em}>details</em>.
            </h2>

            {/* <div className={styles.aboutCard__text}>
              <p className={styles.aboutCard__text__paragraph}>
                I'm <strong>Kseniia Karpenko</strong>, a full stack developer with
                2.5+ years of commercial experience building responsive, scalable SPAs using React, TypeScript, and Node.js.
                I have participated in 4–6 production projects as part of crossfunctional
                teams of 5–6 people, working closely with backend, design, and QA specialists.
              </p>

              <p className={styles.aboutCard__text__paragraph}>
                I prioritize clean code, a well-structured component architecture,
                and a smooth user experience across different browsers and devices.
                I hold a bachelor’s degree in computer science, which combines
                a solid theoretical foundation with practical experience in product development.
              </p>

              <p className={styles.aboutCard__text__paragraph}>
                I am currently seeking a position as a Full-Stack or Frontend Developer 
                where I can continue to grow technically and contribute to the creation 
                of high-quality products for users.
              </p>
            </div> */}

            <div className={styles.features}>
              {features.map((feature) => (
                <div
                  className={styles.feature}
                  key={feature.title}
                >
                  <div className={styles.feature__icon}>
                    {feature.icon}
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>
                </div>
              ))}
            </div>

          </div>

          

        </div>
      </div>
    </section>
  );
};