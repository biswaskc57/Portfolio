import React, {useRef } from "react";
import styles from "./Intro.module.scss";
import slush from "../../assets/Slush.jpg";
import Pdf from "../../assets/resume.pdf";

import useOnElementVisible from "../Hooks/useOnElementVisible";
import Tooltip from "../Atoms/Tooltip/Tooltip";

const Intro: React.FC = () => {

  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const isImageVisible = useOnElementVisible(imageRef);
  const isTextVisible = useOnElementVisible(textRef);


  return (
    <div className={styles.introContainer}>
      <div className={styles.introElements}>
        <div ref={imageRef} id={"testElement"} className={`${styles.myElement} ${isImageVisible ? styles.animate : styles.hide}`}>
          <img id={styles.slider} className={styles.myImage} src={slush} alt="profile" />
        </div>
        <div ref={textRef} className={`${styles.typewriterText} ${isTextVisible ? styles.animateText : styles.hide}`}>
          <p className={styles.name}>
            Hello, <span>I&apos;m Biswas K C!</span>
          </p>
          <p className={styles.profession}>Web Developer!</p>
          <a href={Pdf} rel="noopener noreferrer" target="_blank">
            <button title="View resume">Resume</button>
          </a>
        </div>
      </div>
      <div>
        <Tooltip message="Click here to scroll down" direction="top">
          <i className="fas fa-caret-down"></i>
        </Tooltip>
      </div>
    </div>
  );
};

export default Intro;