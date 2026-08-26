import React from 'react';
import styles from './Nav.module.scss';
import { NavLink } from 'react-router-dom';

type Props = {
  onClose: () => void;
};

export const Nav: React.FC<Props> = ({ onClose }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {[
          { to: '/', end: true },
          { to: '/about', label: 'About' },
          { to: '/education', label: 'Education' },
          { to: '/experience', label: 'Experience' },
          { to: '/projects', label: 'Projects' },
          { to: '/skills', label: 'Skills' },
          { to: '/hobbies', label: 'Hobbies' },
        ].map(({ to, label, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
              onClick={onClose}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};