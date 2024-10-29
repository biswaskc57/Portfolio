import React from "react";
import styles from "./Intro.module.scss";

import avatar from "../../assets/avatar.jpg";
import Pdf from "../../assets/resume.pdf";

const Intro: React.FC = () => {
  return (
    <div className={styles.introContainer} >
      <div className={styles.introElements}>
        <img id ={styles.slider} className={styles.myImage} src={avatar} alt="profile" />
        <div className={styles.typewriterText}>
          <p className={styles.name}>
          Hello, <span>I&apos;m Biswas K C!</span>
          </p>
          <p className={styles.profession}>Web Developer!</p>
          <a href={Pdf} rel="noopener noreferrer" target="_blank">
            <button
              title="View resume"
            >
              Resume
            </button>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Intro;
