// src/components/ThemeToggle.tsx

import React from 'react';
import styles from './toggleButton.module.scss';


interface ThemeToggleProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}
const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, setIsDarkMode }) => {

  // Toggle the theme
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div onClick={handleToggle} style={{ cursor: 'pointer', fontSize: '24px' }}>
      <i className={`${styles.themeToggle} fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
    </div>
  );
};

export default ThemeToggle;
