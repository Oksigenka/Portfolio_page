import React from 'react';
import styles from './TopBar.module.scss';
import { Nav } from '../Nav';

type Props = {
  isMenuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
};

export const TopBar: React.FC<Props> = ({ isMenuOpen, setMenuOpen }) => {
  const goContact = (e: React.MouseEvent) => {
  e.preventDefault();

  const element = document.getElementById('contact');

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

  return (
    <div className={styles.top_bar}>
      <a href="/" className={styles.top_bar__logo_link}>
        <div className={styles.top_bar__logo}>KK</div>
      </a>

      <div className={styles.top_bar__right}>
        <div className={styles.top_bar__nav}>
          <Nav onClose={() => {}} />
        </div>

        <div className={styles.top_bar__icons}>
          <div className={styles.iconButton} onClick={goContact}>
            <p className={styles.iconButton__text}>Hire me →</p>
          </div>
        </div>
      </div>

      <div className={styles.top_bar__close}>
        <div
          className={`${styles.icon} ${isMenuOpen ? styles['icon--close'] : styles['icon--burger']}`}
          onClick={() => setMenuOpen(!isMenuOpen)}
        />
      </div>
    </div>
  );
};