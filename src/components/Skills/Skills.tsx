import styles from './Skills.module.scss';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'CORE',
    skills: [
      { name: 'React / Next.js', level: 92 },
      { name: 'TypeScript', level: 92 },
      { name: 'Redux', level: 92 },
      { name: 'JavaScript (ES2024)', level: 98 },
      { name: 'HTML5 / Semantics', level: 99 },
    ],
  },
  {
    title: 'STYLING',
    skills: [
      { name: 'CSS / Sass', level: 96 },
      { name: 'BEM', level: 80 },
      { name: 'Tailwind', level: 94 },
      { name: 'Material UI', level: 70 },
    ],
  },
  {
    title: 'APIS & RUNTIME',
    skills: [
      { name: 'REST API', level: 90 },
      { name: 'WebSockets', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'FastAPI', level: 88 },
    ],
  },
  {
    title: 'FRAMEWORKS',
    skills: [
      { name: 'Angular', level: 72 },
      { name: 'VUE', level: 78 },
    ],
  },
  {
    title: 'TOOLS',
    skills: [
      { name: 'Git', level: 72 },
      { name: 'Vite', level: 78 },
      { name: 'Webpack', level: 78 },
      { name: 'ESLint', level: 78 },
      { name: 'Prettier', level: 78 },
    ],
  },
  {
    title: 'FAMILIAR WITH',
    skills: [
      { name: 'Python', level: 72 },
      { name: 'SQL', level: 72 },
      { name: 'Docker', level: 78 },
    ],
  },
  {
    title: 'LANGUAGES',
    skills: [
      { name: 'Ukrainian', level: 99 },
      { name: 'English', level: 70 },
      { name: 'Slovak', level: 80 },
      { name: 'Dutch', level: 25 },
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
          Technical <em>skills</em>.
        </h2>

        {/* Skills */}
        <div className={styles.skillsGrid}>
          {skillCategories.map((category) => (
            <div
              className={styles.skillCategory}
              key={category.title}
            >
              <h3 className={styles.skillCategory__title}>
                {category.title}
              </h3>

              <div className={styles.skillList}>
                {category.skills.map((skill) => (
                  <div
                    className={styles.skill}
                    key={skill.name}
                  >
                    <div className={styles.skill__header}>
                      <span className={styles.skill__name}>
                        {skill.name}
                      </span>

                      <span className={styles.skill__level}>
                        {skill.level}%
                      </span>
                    </div>

                    <div className={styles.skill__bar}>
                      <div
                        className={styles.skill__progress}
                        style={{
                          width: `${skill.level}%`,
                        }}
                      />
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