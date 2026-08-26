import styles from './Hobbies.module.scss';

interface Interest {
  icon: string;
  title: string;
  description: string;
}

const interests: Interest[] = [
  {
    icon: '☕',
    title: 'Speciality Coffee',
    description:
      'Amateur barista. Pour-over and AeroPress evangelist.',
  },
  {
    icon: '🚴',
    title: 'Cycling',
    description:
      'Weekend rides through the Dutch countryside and polders.',
  },
  {
    icon: '📷',
    title: 'Photography',
    description:
      'Street & architecture. Shooting on a Fujifilm X-T4.',
  },
  {
    icon: '📚',
    title: 'Reading',
    description:
      'Design, sci-fi, and philosophy of technology.',
  },
  {
    icon: '🎮',
    title: 'Indie Games',
    description:
      'Fascinated by UI/UX and interaction design in games.',
  },
  {
    icon: '🌱',
    title: 'Open Source',
    description:
      'Building in public. Giving back to the community.',
  },
];

export const Hobbies = () => {
  return (
    <section className={styles.beyondCoding} id="beyond-coding">
      <div className={styles.beyondCoding__container}>

        {/* Section label */}
        <div className={styles.sectionLabel}>
          <span>06</span>

          <span className={styles.sectionLabel__dash} />

          <span>BEYOND THE SCREEN</span>

          <span className={styles.sectionLabel__line} />
        </div>

        {/* Heading */}
        <h2 className={styles.beyondCoding__heading}>
          When I'm not <em>coding</em>.
        </h2>

        {/* Interests */}
        <div className={styles.interests}>
          {interests.map((interest) => (
            <article
              className={styles.interest}
              key={interest.title}
            >
              <div className={styles.interest__icon}>
                {interest.icon}
              </div>

              <h3 className={styles.interest__title}>
                {interest.title}
              </h3>

              <p className={styles.interest__description}>
                {interest.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};