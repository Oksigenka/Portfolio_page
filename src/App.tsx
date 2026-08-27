/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import styles from './App.module.scss';
import { TopBar } from './components/TopBar';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Hobbies } from './components/Hobbies';
import { Contact } from './components/Contact';
import Layout from './components/Layout/Layout';

export const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) {
      setMenuOpen(false);
    }

    window.scrollTo({ 
      top: 0, 
      left: 0, 
      behavior: 'auto' 
    });
  }, [location.pathname]);

  return (
    <div className={styles.app}>
      <TopBar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <main className={styles.app__section}>
        <div className={styles.app__container}>
          <Routes>
            <Route path="/" >
              <Route index element={<Layout />} />
              <Route path="about" element={<About />} />
              <Route path="education" element={<Education />} />
              <Route path="experience" element={<Experience />} />
              <Route path=":projects">
                <Route index element={<Projects />} />
                {/* <Route path=":nameId" element={<DetailPage />} /> */}
              </Route>
              <Route path="skills" element={<Skills />} />
              <Route path="hobbies" element={<Hobbies />} />
              <Route path="contact" element={<Contact />} />
              <Route
                path="*"
                element={
                  <div className={styles.app__notFound}>
                    <h1 className={styles.app__notFound__title}>
                      Page not found
                    </h1>
                    <img
                      src="/img/page-not-found.png"
                      alt="404"
                      className={styles.app__notFound__img}
                    />
                  </div>
                }
              />
            </Route>
          </Routes>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};
