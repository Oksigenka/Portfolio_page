import styles from './InfoCard.module.scss';

export interface InfoItem {
  label: string;
  value: string;
  highlight?: boolean;
}

interface InfoCardProps {
  title: string;
  items: InfoItem[];
}

export const InfoCard = ({ title, items }: InfoCardProps) => {
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoCard__title}>
        {title}
      </div>

      <div className={styles.infoCard__list}>
        {items.map((item) => (
          <div className={styles.infoRow} key={item.label}>
            <span className={styles.infoRow__label}>
              {item.label}
            </span>

            <span 
                className={`${styles.infoRow__value} ${
                    item.highlight ? styles['infoRow__value--highlight'] : ''
                }`}
                >
                {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
