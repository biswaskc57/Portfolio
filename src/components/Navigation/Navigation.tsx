import React, { useState, useEffect } from 'react';
import styles from './Navigation.module.scss';
import useScrollOn from '../../components/Hooks/useOnScroll';
import { useLanguage } from "../Contexts/LanguageContext";
import { navItems } from '../../data';

const Navigation: React.FC = () => {
  
  const scrollY = useScrollOn();
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(scrollY);
  const [selectedNavItem, setSelectedNavItem] = useState("Home");
  const {setIsModelOpen, isModelOpen, selectedLanguage, language} = useLanguage();

  // Apply the NavLink[] type to ensure each item in the array matches the interface

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
  const languageNav = {id: "language", label: "", icon:"fa-language" };

  return (
    <nav
      className={`${styles.appNav} ${isVisible ? styles.visible : styles.hidden}`}
    >
      <ul>
        {navItems.map((link) => (
          <li key={link.id} onClick={()=>setSelectedNavItem(link.label)} className={`${selectedNavItem === link.label ? styles.selectedNavItem : ""}`}>
            <a href={`#${link.id}`}>
              <i className={`fas ${link.icon}`}></i>
              <h1>{language.Navigation[link.label]}</h1>
            </a>
          </li>
        ))}
        <div className={styles.languageSection} key={languageNav.id} onClick={()=>{setIsModelOpen(!isModelOpen);}}> 
          <i className={`fa ${languageNav.icon}`}> </i>
          <div className={styles.languageText}>{language.languageTypes[selectedLanguage].toLocaleUpperCase()}</div>
        </div>
      </ul>

    </nav>
  );
};

export default Navigation;
