import React from "react";
import styles from "./Intro.module.scss";

import avatar from "../../assets/avatar.jpg";


const Intro: React.FC = () => {
  return (
    <div className={styles.introContainer} >
      <div className={styles.introElements}>
        <img className={styles.myImage} src={avatar} alt="profile" />
        <div className={styles.typewriterText}>
          <p className={styles.name}>
          Hello, <span>I&apos;m Biswas K C!</span>
          </p>
          <p className={styles.profession}>Web Developer!</p>
          <a href={"/assets/resume.pdf"} rel="noopener noreferrer" target="_blank">
            <button
              aria-label="Resume"
              title="View resume"
              className={styles.resumeButton}
            >
            CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
