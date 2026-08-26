import React from 'react';
import styles from './TopBar.module.scss';
import { useNavigate } from 'react-router-dom';
import { Nav } from '../Nav';

export const TopBar = ({ isMenuOpen, setMenuOpen }) => {
  const navigate = useNavigate();

  const goFavorites = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/favorites');
  };

  return (
    <div className={styles.top_bar}>
      <a href="/" className={styles.top_bar__logo_link}>
        <img
            src="img/KK_logo.png"
            alt="KK"
            className={styles.top_bar__logo}
        />
      </a>

      <div className={styles.top_bar__right}>
        <div className={styles.top_bar__nav}>
          <Nav onClose={() => {}} />
        </div>

        <div className={styles.top_bar__icons}>
          <div className={styles.iconButton} onClick={goFavorites}>
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