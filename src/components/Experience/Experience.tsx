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
    date: 'Jun 2025 – Present',
    position: 'Self-employed',
    company: 'Freelance Full-Stack Developer',
    description:
      'Building responsive frontend interfaces for SPAs and landing pages based on Figma mockups. Communicating directly with clients to gather requirements and clarify scope. Choosing and implementing the appropriate stack (React, Angular, Node.js) per project. Managing state with Redux Toolkit and integrating with backend services via REST APIs.',
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
    date: 'Feb – Jun 2025',
    position: 'Junior Frontend Developer',
    company: 'AAS Solutions, a.s.',
    description:
      'Building UI components and SPA features based on Figma mockups, following established design systems. Integrating the frontend with backend services via REST API and SOAP. Implementing filtering, pagination, and form validation for internal business tools used by client teams. Collaborating daily with analysts, designers, and backend developers in an Agile (Scrum) workflow.',
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
    date: 'August 2023 – Feb 2025',
    position: 'Frontend Developer',
    company: 'Coddu',
    description:
      'Contributing to the UI of 5 commercial SPAs (course catalogue, student dashboard, admin panel, payment portal). Integrating REST APIs for course content, progress tracking, and real-time notifications via WebSockets. Collaborating closely with 2 other developers through weekly code reviews and joint architectural decisions. Proposing and rolling out frontend code standards (ESLint + Prettier, SCSS module conventions, component naming) adopted across team projects. Ensuring responsive, cross-browser UI across desktop and mobile for all delivered products.',
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

        {/* Section label */}
        <div className={styles.sectionLabel}>
          <span>05</span>

          <span className={styles.sectionLabel__dash} />

          <span>WHERE I'VE BEEN</span>

          <span className={styles.sectionLabel__line} />
        </div>

        {/* Heading */}
        <h2 className={styles.experience__heading}>
          Work <em className={styles.experience__heading__em}>experience</em>.
        </h2>

        {/* Timeline */}
        <div className={styles.timeline}>
          {experiences.map((experience) => (
            <article
              className={styles.experienceItem}
              key={`${experience.company}-${experience.date}`}
            >
              {/* Timeline line */}
              <div className={styles.experienceItem__timeline}>
                <span
                  className={`${styles.experienceItem__dot} ${
                    experience.current
                      ? styles.experienceItem__dotActive
                      : ''
                  }`}
                />
              </div>

              {/* Content */}
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