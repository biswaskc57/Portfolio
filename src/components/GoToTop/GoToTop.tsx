import React from 'react';
import styles from './GoToTop.module.scss'; // Make sure to create a corresponding SCSS module

const GoToTop: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return (
    <div
      className={`${styles.goToTop} ${isVisible ? styles.visible : styles.hidden}`}
      onClick={handleClick}
    >
      <div className={styles.arrow}>&#8679;</div>
    </div>
  );
};

export default GoToTop;