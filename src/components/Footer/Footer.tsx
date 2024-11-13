import React, { useEffect, useState } from 'react';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
  const [localTime, setLocalTime] = useState<string>('');
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    const updateLocalTime = () => {
      const now = new Date();
      setLocalTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };

    const intervalId = setInterval(updateLocalTime, 1000);

    // Set year only once, when component mounts
    setYear(new Date().getFullYear());

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className={styles.footer}>
      <p>
        &copy; Biswas KC {year} | Location: Helsinki, Finland | Local Time: {localTime}
      </p>
    </footer>
  );
};

export default Footer;
