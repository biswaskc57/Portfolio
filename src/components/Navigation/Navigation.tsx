import React, { useState, useEffect } from 'react';
import styles from './Navigation.module.scss';
import { navItems } from "../../data";
import useScrollOn from '../../components/Hooks/useOnScroll';
import { useLanguage } from "../Contexts/LanguageContext";

const Navigation: React.FC = () => {
  
  const scrollY = useScrollOn();
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(scrollY);
  const {setIsModelOpen, isModelOpen, selectedLanguage} = useLanguage();

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
  const language = {id: "language", label: "", icon:"fa-language" };

  return (
    <nav
      className={`${styles.appNav} ${isVisible ? styles.visible : styles.hidden}`}
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
        <div className={styles.languageSection} key={language.id} onClick={()=>{setIsModelOpen(!isModelOpen);}}> 
          <i className={`fa ${language.icon}`}> </i>
          <div className={styles.languageText}>{selectedLanguage.toLocaleUpperCase()}</div>
        </div>
      </ul>

    </nav>
  );
};

export default Navigation;
