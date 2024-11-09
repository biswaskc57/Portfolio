// src/components/ThemeToggle.tsx

import React from 'react';
import styles from './toggleButton.module.scss';

interface ThemeToggleProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, setIsDarkMode }) => {
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={styles.themeToggle}>
      <button onClick={handleToggle} className={styles.themeToggleIcon} aria-label="Toggle Theme">
        {isDarkMode ? (
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="5" fill="white" />
            <g stroke="white" strokeWidth="2">
              <line x1="12" y1="2" x2="12" y2="5" />
              <line x1="12" y1="19" x2="12" y2="22" />
              <line x1="2" y1="12" x2="5" y2="12" />
              <line x1="19" y1="12" x2="22" y2="12" />
              <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
              <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
              <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
              <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
            </g>
          </svg>
        ) : (
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.75 13.5C20.8125 13.75 19.8125 13.875 18.75 13.875C13.25 13.875 8.875 9.5 8.875 4C8.875 2.9375 9 1.9375 9.25 1C5.25 2.375 2.375 6.0625 2.375 10.5C2.375 16.0625 6.9375 20.625 12.5 20.625C16.9375 20.625 20.625 17.75 22 13.75C21.9375 13.75 21.8125 13.5 21.75 13.5Z"
              fill="black"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
