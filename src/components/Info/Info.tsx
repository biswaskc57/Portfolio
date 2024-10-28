import React from "react";
import { skills } from "../../data";
import styles from './info.module.scss';

const About: React.FC = () => {
  return (
    <div className={styles.infoContainer}>
      <h2>About Me</h2>
      <div className={styles.myDetail}>
        <div 
          tabIndex={0}
          className={styles.textSection}>
          <p className={styles.text}>
            I am a dedicated frontend developer with around 3 years of professional experience
             in creating dynamic and interactive user interfaces, primarily using React, JavaScript, 
             TypeScript, HTML, and CSS. I have a solid background in web development, having worked 
             closely with design and documentation teams to maintain high-quality codebases and provide
              valuable feedback.
          </p>
          <p className={styles.text}>
            I am currently a software developer at Frosmo, where I focus on developing and maintaining SaaS
             applications with a focus on UI components, charts, and graphs. I actively contribute to the core 
             development team and collaborate with back-end teams, working with tools like JIRA, GitLab, Confluence,
              and libraries such as Chart.js, React-Router, react-hook-form, and SASS.
          </p>
          <p className={styles.text}>
            My strengths lie in clean coding, debugging, and problem-solving skills, and I enjoy learning and working
             in team environments. Alongside my technical skills, I have hands-on experience with CI/CD pipelines and
              end-to-end testing using Cypress. Outside of work, I engage in activities like hiking and playing racket
               sports, and I regularly attend events such as Slush for networking and inspiration. My goal is to continue
                growing in frontend development while contributing to innovative, impactful projects.
          </p>
        </div>
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
  );
};

export default About;
