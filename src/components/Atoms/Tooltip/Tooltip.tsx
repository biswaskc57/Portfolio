import React from 'react';
import styles from './Tooltip.module.scss';

type TooltipDirection = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps {
  message: string;
  direction?: TooltipDirection;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ message, direction = 'top', style = {}, children }) => {
  return (
    <div className={styles.tooltipContainer} style={style}>
      {children}
      <span
        className={`${styles.tooltipText} ${
          styles[`tooltip${direction.charAt(0).toUpperCase() + direction.slice(1)}`]
        }`}
      >
        {message}
      </span>
    </div>
  );
};

export default Tooltip;
