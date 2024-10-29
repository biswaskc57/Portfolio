import React, { useEffect, useState } from 'react';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
  const [localTime, setLocalTime] = useState<string>('');

  useEffect(() => {
    const updateLocalTime = () => {
      const now = new Date();
      setLocalTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };

    const intervalId = setInterval(updateLocalTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className={styles.footer}>
      <p>
        &copy; Biswas KC 2024 | Location: Helsinki, Finland | Local Time: {localTime}
      </p>
    </footer>
  );
};

export default Footer;