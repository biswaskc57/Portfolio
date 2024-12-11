
import React, { useContext, useEffect } from "react";
import { useLanguage } from "../Contexts/LanguageContext";
import styles from "./LanguageSwitcher.module.scss";
import { ThemeContext } from "../Contexts/ThemeContext";
import { LanguageType } from "./Languages";

const LanguageSelector = () => {
  
  const { setSelectedLanguage, isModelOpen, setIsModelOpen, selectedLanguage, language } = useLanguage();
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (isModelOpen) {
      document.body.classList.add(styles.noScroll);
    }
    return () => {
      document.body.classList.remove(styles.noScroll);
    };
  }, [isModelOpen]);

  return isModelOpen ? (
    <div className={styles.selectorSection}>
      <div className={`${styles.selector} ${ isDarkMode ? styles.darkTheme: styles.lightTheme}`}>
        <div className={styles.select}>
          <h2 className={styles.selectText}>Select Language</h2>
          <button className={styles.closeButton} onClick={() => setIsModelOpen(!isModelOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div >
        <div className={styles.options }>
          {Object.entries(language.languageTypes).map(([langCode, langName]) => (
            <button
              key={langCode}
              onClick={() => {
                setSelectedLanguage(langCode as LanguageType);
                setIsModelOpen(!isModelOpen);
              }}
              className={`${styles.button} ${selectedLanguage === langCode ? styles.selectedLanguage: ""}`}
            >
              {langName}
            </button>
          ))}
        </div>
      </div>
    </div>
  ) : null;
};

export default LanguageSelector;


