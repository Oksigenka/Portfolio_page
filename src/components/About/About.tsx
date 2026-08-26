import styles from './About.module.scss';
import { InfoCard, type InfoItem } from './InfoCard';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const quickFacts: InfoItem[] = [
  {
    label: 'Location',
    value: 'Eindhoven, NL',
  },
  {
    label: 'Email',
    value: 'kseniia.karpenko.dev@gmail.com',
  },
  {
    label: 'Availability',
    value: 'Open to offers',
    highlight: true,
  },
  {
    label: 'Mobile',
    value: '+(31) 6 29 35 61 36',
  },
  {
    label: 'Preferred stack',
    value: 'React / TypeScript',
  },
];

const whatILookFor: InfoItem[] = [
  {
    label: 'Work style',
    value: 'Hybrid / Remote',
  },
  {
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/kseniia-karpenko-109b78291/',
  },
  {
    label: 'GitHub',
    value: 'https://github.com/Oksigenka?tab=repositories',
  },
  {
    label: 'Start date',
    value: 'Immediately',
  },
];

const features: Feature[] = [
  {
    icon: '⚡',
    title: 'Performance First',
    description:
      'Every millisecond matters. I build with Lighthouse scores in mind.',
  },
  {
    icon: '♿',
    title: 'Accessible by Default',
    description:
      'WCAG 2.1 AA and semantic HTML are non-negotiables.',
  },
  {
    icon: '◈',
    title: 'Design Driven',
    description:
      'I care about thoughtful details and consistent visual systems.',
  },
  {
    icon: '⌘',
    title: 'Clean Code',
    description:
      'Simple, maintainable and scalable solutions are always the goal.',
  },
];

export const About = () => {
  return (
    <section className={styles.aboutCard} id="about">
      <div className={styles.aboutCard__container}>

        <div className={styles.sectionLabel}>
          <span>01</span>
          <span className={styles.sectionLabel__dash} />
          <span>Personal information</span>
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

            {/* RIGHT COLUMN */}
          <aside className={styles.aboutCard__sidebar}>
            <InfoCard
              title="QUICK FACTS"
              items={quickFacts}
            />

            <InfoCard
              title="WHAT I LOOK FOR"
              items={whatILookFor}
            />
          </aside>

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