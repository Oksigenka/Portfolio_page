/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import styles from './App.module.scss';
import { TopBar } from './components/TopBar';
import { Menu } from './components/Menu';
import Layout from './components/Layout/Layout';

export const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.app}>
      <TopBar
        isMenuOpen={isMenuOpen}
        setMenuOpen={setMenuOpen}
      />

      <Menu
        isMenuOpen={isMenuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main className={styles.app__section}>
        <div className={styles.app__container}>
          <Layout />
        </div>
      </main>
    </div>
  );
};
