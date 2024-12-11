
import React from "react";
import { useLanguage } from "../Contexts/LanguageContext";
import styles from "./LanguageSwitcher.module.scss";

const LanguageSelector = () => {
  
  const {  selectedLanguage, setSelectedLanguage, isModelOpen, setIsModelOpen } = useLanguage();

  const toggleLanguage = (language: "en" | "fi") => {
    setSelectedLanguage(language);
  };

  return isModelOpen ? (
    <div className={styles.selectorSection}>
      <div className={`${styles.selector} ${styles.app}`}>
        <div className={styles.select}>
          <h2 className={styles.selectText}>Select Language</h2>
          <button className={styles.button} onClick={() => setIsModelOpen(!isModelOpen)}>
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
        {/* Language Options */}
        <div className={styles.options}>
          <button
            onClick={() => setSelectedLanguage("en")}
            className={styles.button}
          >
            English
          </button>
          <button
            onClick={() => setSelectedLanguage("fi")}
            className={styles.button}
          >
            Suomi
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default LanguageSelector;


