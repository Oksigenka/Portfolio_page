import React from 'react';
import styles from './Nav.module.scss';

type Props = {
  onClose: () => void;
};

const navItems = [
  { id: 'home', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'hobbies', label: 'Hobbies' },
  { id: 'contact', label: 'Contact' },
];

export const Nav: React.FC<Props> = ({ onClose }) => {
  const handleNavigation = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    onClose();
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {navItems.map(({ id, label }) => (
          <li key={id}>
            <p
              className={styles.link}
              onClick={() => handleNavigation(id)}
            >
              {label}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
};