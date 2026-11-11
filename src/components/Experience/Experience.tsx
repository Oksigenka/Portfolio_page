import styles from './Experience.module.scss';

interface ExperienceItem {
  date: string;
  position: string;
  company: string;
  description: string;
  technologies: string[];
  current?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    date: 'Oct 2025 – Present',
    position: 'Self-employed',
    company: 'Freelance Full-Stack Developer',
    description:
      'Built 8 responsive SPAs and landing pages from Figma mockups using React, TypeScript, Angular and Node.js for clients in e-commerce, education. Gathered requirements, defined the scope of work, and communicated directly with clients from the start of the project through its completion and ongoing support. Implemented state management using Redux Toolkit and integrated REST APIs.',
    technologies: [
      'React',
      'TypeScript',
      'JavaScript',
      'SCSS',
      'Node.js',
      'Redux Toolkit',
      'Angular',
      'Tailwind',
      'REST APIs',
    ],
    current: true,
  },
  {
    date: 'Feb – Sep 2025',
    position: 'Junior Frontend Developer',
    company: 'AAS Solutions, a.s.',
    description:
      'Built UI components and SPA features from Figma mockups within existing design systems. Integrated frontend with backend services via REST API and SOAP. Implemented filtering, pagination and form validation for internal business tools used by client teams. Worked daily with analysts, designers and backend developers in a Scrum team of 5–6.',
    technologies: [
      'React',
      'TypeScript',
      'SCSS',
      'REST APIs',
      'Redux Toolkit',
      'Node.js',
    ],
  },
  {
    date: 'Mar 2024 – Feb 2025',
    position: 'Project Coordinator',
    company: 'Coddu',
    description:
      'Led day-to-day project management of a commercial education platform: planned work, prioritised tasks and tracked progress for a team of 6 (developers, designers, testers). Distributed tasks across the team and kept delivery on schedule from specification to launch. Worked directly with the founder: translated business goals into tasks, prepared priorities and kept them informed on progress. Coordinated code reviews, testing and releases between developers, designers and QA. Maintained documentation for internal processes and integrations.',
    technologies: [
      'React',
      'JavaScript',
      'TypeScript',
      'SCSS',
      'REST APIs',
      'Angular',
      'Redux Toolkit',
    ],
  },
  {
    date: 'Aug 2023 – Feb 2024',
    position: 'Frontend Developer',
    company: 'Coddu',
    description:
      'Delivered 5 commercial SPAs, including a course catalogue, student dashboard, admin panel and payment portal, with responsive, cross-browser interfaces for desktop and mobile. Integrated REST APIs and WebSockets for course content, progress tracking and real-time notifications. Proposed and introduced frontend standards (ESLint, Prettier, SCSS module conventions, component naming) that made code reviews faster and the codebase more consistent. Took part in architecture discussions and code reviews with the team.',
    technologies: [
      'React',
      'JavaScript',
      'TypeScript',
      'SCSS',
      'REST APIs',
      'Angular',
      'Redux Toolkit',
    ],
  },
];

export const Experience = () => {
  return (
    <section className={styles.experience} id="experience">
      <div className={styles.experience__container}>

        <div className={styles.sectionLabel}>
          <span>03</span>

          <span className={styles.sectionLabel__dash} />

          <span>WHERE I'VE BEEN</span>

          <span className={styles.sectionLabel__line} />
        </div>

        <h2 className={styles.experience__heading}>
          Work <em className={styles.experience__heading__em}>experience</em>.
        </h2>

        <div className={styles.timeline}>
          {experiences.map((experience) => (
            <article
              className={styles.experienceItem}
              key={`${experience.company}-${experience.date}`}
            >
              <div className={styles.experienceItem__timeline}>
                <span
                  className={`${styles.experienceItem__dot} ${
                    experience.current
                      ? styles.experienceItem__dotActive
                      : ''
                  }`}
                />
              </div>

              <div className={styles.experienceItem__content}>

                <div className={styles.experienceItem__meta}>
                  <span className={styles.experienceItem__date}>
                    {experience.date}
                  </span>

                  {experience.current && (
                    <span className={styles.currentBadge}>
                      Current
                    </span>
                  )}
                </div>

                <h3 className={styles.experienceItem__position}>
                  {experience.position}
                </h3>

                <div className={styles.experienceItem__company}>
                  {experience.company}
                </div>

                <p className={styles.experienceItem__description}>
                  {experience.description}
                </p>

                <div className={styles.technologies}>
                  {experience.technologies.map((technology) => (
                    <span
                      className={styles.technology}
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};