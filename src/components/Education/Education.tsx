import styles from './Education.module.scss';

interface EducationItem {
  period: string;
  title: string;
  institution: string;
  description: string;
}

const educationItems: EducationItem[] = [
  {
    period: '2023 — 2025',
    title: 'BSc. Computer Science',
    institution: 'Technical University of Košice',
    description:
      'Graduated cum laude. Specialised in interactive media design and web technologies. Thesis on micro-interaction design and user engagement metrics.',
  },
  {
    period: '2024 — 2025',
    title: 'Frontend Course',
    institution: 'Mate Academy',
    description:
      'Gained proficiency in serverless architectures, Lambda, S3, CloudFront, and deployment pipelines — directly applicable to frontend + infra workflows.',
  },
];

export const Education = () => {
  return (
    <section className={styles.education} id="education">
      <div className={styles.education__container}>

        <div className={styles.sectionLabel}>
          <span>02</span>

          <span className={styles.sectionLabel__dash} />

          <span>HOW I GOT HERE</span>

          <span className={styles.sectionLabel__line} />
        </div>

        <h2 className={styles.education__heading}>
          Education & <em className={styles.education__heading__em}>learning</em>.
        </h2>
        
        <div className={styles.educationGrid}>
          {educationItems.map((item) => (
            <article
              className={styles.educationCard}
              key={`${item.period}-${item.title}`}
            >
              <span className={styles.educationCard__period}>
                {item.period}
              </span>

              <h3 className={styles.educationCard__title}>
                {item.title}
              </h3>

              <div className={styles.educationCard__institution}>
                {item.institution}
              </div>

              <p className={styles.educationCard__description}>
                {item.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};