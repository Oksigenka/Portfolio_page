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
      'I enjoy discovering new coffee beans and brewing methods. Capuorange is my favorite coffee.',
  },
  {
    icon: '🏋',
    title: 'Gym & Fitness',
    description:
      'I enjoy strength training and leading an active lifestyle. For me, it’s a way to build strength, clear my mind, and improve my well-being.',
  },
  {
    icon: '📚',
    title: 'Reading',
    description:
      'I enjoy reading books; I’m particularly interested in fantasy, mysteries, and novels. I also dream of having a small home library.',
  },
  {
    icon: '📷',
    title: 'Photography',
    description:
      'I love capturing interesting places, architecture, and everyday moments. Photography helps me notice details that are easy to overlook.',
  },
  {
    icon: '🎮',
    title: 'Games',
    description:
      'I enjoy games that combine engaging stories with thoughtful design. I’m especially fascinated by UI, UX, and interactive experiences.',
  },
  {
    icon: '🏃',
    title: 'Walking',
    description:
      'I enjoy long walks and exploring new places, especially when I can discover something unexpected. It’s also one of my favourite ways to clear my mind.',
  },
];

export const Hobbies = () => {
  return (
    <section className={styles.beyondCoding} id="hobbies">
      <div className={styles.beyondCoding__container}>

        <div className={styles.sectionLabel}>
          <span>06</span>

          <span className={styles.sectionLabel__dash} />

          <span>BEYOND THE SCREEN</span>

          <span className={styles.sectionLabel__line} />
        </div>

        <h2 className={styles.beyondCoding__heading}>
          When I'm not <em>coding</em>.
        </h2>

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