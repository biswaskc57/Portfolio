import React from "react";
import { skills } from "../../data";
import styles from './about.module.scss';

const About: React.FC = () => {
  return (
    <div className={styles.infoContainer}>
      <h2>About Me</h2>
      <div className={styles.myDetail}>
        <div 
          tabIndex={0}
          className={styles.textSection}>
          <p className={styles.text}>
         

          


          </p>
          <p className={styles.text}>
          I am a dedicated frontend developer with more than 3 years of professional experience in creating dynamic and 
          interactive user interfaces, primarily using React, JavaScript, TypeScript, HTML, and CSS. I have a solid 
          background in web development, having worked closely with design and documentation teams to maintain high-quality
           codebases and provide valuable feedback.
          </p>
          <p className={styles.text}>
           Currently, I am a software developer at Frosmo Limited, where I focus on developing and maintaining SaaS applications with 
           a strong emphasis on UI components. My role involves creating various recommendation templates, banners, graphs, tables,
           and other UI-related elements for customers sites. I actively contribute to the core development team, collaborating with
           back-end teams,and work with tools like JIRA, GitLab, and Confluence, as well as libraries such as Chart.js, React-Router,
            react-hook-form, and SASS.
          </p>
          <p className={styles.text}>
           My strengths lie in clean coding, debugging, and problem-solving, and I enjoy learning and working in team environments.
           Alongside my technical skills, I have hands-on experience with CI/CD pipelines and end-to-end testing using Cypress. Outside
            of work, I enjoy hiking, playing racket sports, and regularly attend events such as Slush for networking and inspiration. My 
            goal is to continue growing in frontend development while contributing to innovative, impactful projects.
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
