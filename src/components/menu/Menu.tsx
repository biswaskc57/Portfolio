import React, { useState } from "react";

import { navItems } from "../../data";

import styles from "./menu.module.scss";
import LanguageSwitcher from "../Translate/LanguageSwitcher";
import { useLanguage } from "../Contexts/LanguageContext";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const {setIsModelOpen, isModelOpen, selectedLanguage, language} = useLanguage();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const languageNav = {id: "language", label: "", icon:"fa-language" };

  return (
    <div className={styles.hamburgerMenu}>
      <div className={styles.hamburgerIcon} onClick={toggleMenu}>
        {!isOpen && (
          <>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </>
        )}
      </div>
      <nav className={`${styles.navMenu} ${isOpen ? styles.show : styles.hidden}`}>
        <ul>
          <div className={styles.closeIcon} onClick={toggleMenu}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          {navItems.map((link) => (
            <li key={link.id} className={link.label === "Home" ? styles.homeItem : ""}>
              <a href={`#${link.id}`} onClick={() => setIsOpen(false)}>
                <i className={`fas ${link.icon} ${styles.icon}`}></i>
                {language.Navigation[link.label]}
              </a>
            </li>
          ))}
          <div className={styles.languageSection} key={languageNav.id} onClick={()=>{setIsModelOpen(!isModelOpen);}}> 
            <i className={`fa ${languageNav.icon}`}> </i>
            <div className={styles.languageText}>{language.languageTypes[selectedLanguage].toLocaleUpperCase()}</div>
          </div>
        </ul>

      </nav>
      <LanguageSwitcher />
    </div>
  );
};

export default HamburgerMenu;
