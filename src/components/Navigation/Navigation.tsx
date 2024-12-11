import React, { useState, useEffect } from 'react';
import styles from './Navigation.module.scss';
import useScrollOn from '../../components/Hooks/useOnScroll';
import { useLanguage } from "../Contexts/LanguageContext";
import { NavigationItems } from '../Translate/Languages';

const Navigation: React.FC = () => {
  
  const scrollY = useScrollOn();
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(scrollY);
  const {setIsModelOpen, isModelOpen, selectedLanguage, language} = useLanguage();

  // Apply the NavLink[] type to ensure each item in the array matches the interface

  interface NavItem {
    id: string;
    label: keyof NavigationItems;  // This ensures 'label' can only be one of the keys of Navigation
    icon: string;
  }
  const navItems: NavItem[] = [
    { id: "intro", label: "Home", icon: "fa-home" },
    { id: "about", label: "About", icon: "fa-user" },
    { id: "projects", label: "Projects", icon: "fa-diagram-project" },
    { id: "experience", label: "Experience", icon: "fa-briefcase" },
    { id: "contact", label: "Contact", icon: "fa-address-card" },
  ];

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
          <li key={link.id}>
            <a href={`#${link.id}`}>
              <i className={`fas ${link.icon}`}></i>
              {language.Navigation[link.label]}
            </a>
          </li>
        ))}
        <div className={styles.languageSection} key={languageNav.id} onClick={()=>{setIsModelOpen(!isModelOpen);}}> 
          <i className={`fa ${languageNav.icon}`}> </i>
          <div className={styles.languageText}>{language.languageTypes[selectedLanguage].toLocaleUpperCase().slice(0, 2)}</div>
        </div>
      </ul>

    </nav>
  );
};

export default Navigation;
