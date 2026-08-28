import styles from './Skills.module.scss';

interface Skill {
  name: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'CORE',
    skills: [
      { name: 'React / Next.js' },
      { name: 'TypeScript'},
      { name: 'Redux' },
      { name: 'JavaScript (ES2024)' },
      { name: 'HTML5 / Semantics' },
    ],
  },
  {
    title: 'STYLING & FRAMEWORKS',
    skills: [
      { name: 'CSS / Sass' },
      { name: 'BEM' },
      { name: 'Tailwind' },
      { name: 'Material UI' },
      { name: 'Angular' },
      { name: 'VUE' },
    ],
  },
  {
    title: 'APIS & RUNTIME',
    skills: [
      { name: 'REST API' },
      { name: 'WebSockets' },
      { name: 'Node.js' },
      { name: 'FastAPI' },
    ],
  },
  {
    title: 'TOOLS',
    skills: [
      { name: 'Git' },
      { name: 'Vite' },
      { name: 'Webpack' },
      { name: 'Python' },
      { name: 'SQL' },
      { name: 'Docker' },
      { name: 'ESLint & Prettier' },
    ],
  },
  {
    title: 'LANGUAGES',
    skills: [
      { name: 'Ukrainian (native)' },
      { name: 'English (B2)' },
      { name: 'Slovak (C1)' },
      { name: 'Dutch (A2)' },
    ],
  },
];

export const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.skills__container}>

        {/* Section label */}
        <div className={styles.sectionLabel}>
          <span>03</span>

          <span className={styles.sectionLabel__dash} />

          <span>WHAT I KNOW</span>

          <span className={styles.sectionLabel__line} />
        </div>

        {/* Heading */}
        <h2 className={styles.skills__heading}>
          Technical <em className={styles.skills__heading__em}>skills</em>.
        </h2>

        {/* Skills */}
        <div className={styles.skills__grid}>
          {skillCategories.map((category) => (
            <div
              className={styles.skills__category}
              key={category.title}
            >
              <h3 className={styles.skills__category__title}>
                {category.title}
              </h3>

              <div className={styles.skills__list}>
                {category.skills.map((skill) => (
                  <div
                    className={styles.skill}
                    key={skill.name}
                  >
                    <div className={styles.skill__header}>
                      <span className={styles.skill__name}>
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};