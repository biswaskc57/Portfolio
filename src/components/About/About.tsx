import React from "react";
import { skills } from "../../data";
import styles from './about.module.scss';
import { useLanguage } from "../Contexts/LanguageContext";

const About: React.FC = () => {
  const { language } = useLanguage(); 
  return (
    <div className={styles.infoContainer}>
      <h2>{language.Navigation.About}</h2>
      <div className={styles.myDetail}>
        <div 
          tabIndex={0}
          className={styles.textSection}>
          <p className={styles.text}>
          </p>
          {language.bio}
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillItem} style={{ "--i": index } as React.CSSProperties}>
                <img src={skill.url} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
