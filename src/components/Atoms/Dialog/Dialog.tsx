import React, { useEffect } from "react";
import styles from "./dialog.module.scss";

interface DialogProps {
  isOpen: boolean;
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
  isDarkMode?: boolean; // Optional for theming
}

const Dialog: React.FC<DialogProps> = ({ isOpen, title, children, onClose, isDarkMode = false }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles.noScroll);
    }
    return () => {
      document.body.classList.remove(styles.noScroll);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.dialogOverlay}>
      <div className={`${styles.dialog} ${isDarkMode ? styles.darkTheme : styles.lightTheme}`}>
        {title && <h2 className={styles.dialogTitle}>{title}</h2>}
        <button className={styles.closeButton} onClick={onClose}>
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
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
        <div className={styles.dialogContent}>{children}</div>
      </div>
    </div>
  );
};

export default Dialog;
