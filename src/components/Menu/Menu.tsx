import React, { useContext } from 'react';
import { Nav } from '../Nav';
import styles from './Menu.module.scss';
import { TopBar } from '../TopBar';
import { useNavigate } from 'react-router-dom';

type Props = {
  isMenuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
};

export const Menu: React.FC<Props> = ({ isMenuOpen, setMenuOpen }) => {
  const navigate = useNavigate();

  const goFavorites = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/favorites');
  };

  return (
    <>
      {isMenuOpen && (
        <div
          className={`${styles.overlay} ${isMenuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(false)}
        />
      )}

      <aside className={`${styles.pageMenu} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.menu}>
          <div className={styles.menuTop}>
            <TopBar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
          </div>
          <div className={styles.menuContainer}>
            <Nav onClose={() => setMenuOpen(false)} />
          </div>

          <div className={styles.menuBottom}>
            <div className={styles.iconButton} onClick={goFavorites}>
              <p className={styles.iconButton__text}>Hire me →</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
