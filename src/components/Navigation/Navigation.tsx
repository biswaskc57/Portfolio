import React, { useState, useEffect } from 'react';
import styles from './Navigation.module.scss';
import { navItems } from "../../data";
import useScrollOn from '../../components/Hooks/useOnScroll';
import ThemeToggle from '../ToggleButton/ToggleButton';

interface NavigationProps {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const Navigation: React.FC<NavigationProps> = ({isDarkMode, setIsDarkMode}) => {
  const scrollY = useScrollOn();
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(scrollY);

  useEffect(() => {

    if(scrollY < 250) {
      setIsVisible(true);
      return;
    }
    if (scrollY < lastScrollY) {
      // Scrolling up - show the navigation immediately
      setIsVisible(true);
    } else if (scrollY > lastScrollY) {
      // Scrolling down - hide the navigation immediately
      setIsVisible(false);
    }

    // Update last scroll position
    setLastScrollY(scrollY);
  }, [scrollY, lastScrollY]);

  return (
    <nav
      className={`${styles.appNav} ${styles.darkTheme} ${isVisible ? styles.visible : styles.hidden}`}
    >
      <ul>
        {navItems.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`}>
              <i className={`fas ${link.icon}`}></i>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <ThemeToggle isDarkMode={isDarkMode}setIsDarkMode={setIsDarkMode}/> 
    </nav>
  );
};

export default Navigation;
