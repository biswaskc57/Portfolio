import React from 'react';
import styles from './GoToTop.module.scss'; // Make sure to create a corresponding SCSS module
import Tooltip from '../Tooltip/Tooltip';

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
      <Tooltip message="Go to top">
        <i className={`fas fa-arrow-up ${styles.arrow}`}></i> {/* Font Awesome arrow up icon */}
      </Tooltip>
    </div>

  );
};

export default GoToTop;
