import React, {useRef } from "react";
import styles from "./Intro.module.scss";
import slush from "../../assets/Slush.jpg";
import Pdf from "../../assets/resume.pdf";

import useOnElementVisible from "../Hooks/useOnElementVisible";
import Tooltip from "../Atoms/Tooltip/Tooltip";

const Intro: React.FC = () => {

  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const caretRef = useRef<HTMLDivElement>(null);

  const isImageVisible = useOnElementVisible(imageRef);
  const isTextVisible = useOnElementVisible(textRef);
  const isCaretVisible = useOnElementVisible(caretRef);


  return (
    <div className={styles.introContainer}>
      <div className={styles.introElements}>
        <div ref={imageRef} id={"testElement"} className={`${styles.myElement} ${isImageVisible ? styles.animate : styles.hide}`}>
          <img id={styles.slider} className={styles.myImage} src={slush} alt="profile" />
        </div>
        <div ref={textRef} className={`${styles.typewriterText} ${isTextVisible ? styles.animateText : styles.hide}`}>
          <h1>
            Hello, <span>I&apos;m Biswas K C!</span>
          </h1>
          <h2 className={styles.profession}>Mobile application and Web developer</h2>
          <a href={Pdf} rel="noopener noreferrer" target="_blank">
            <button title="View resume">Resume</button>
          </a>
        </div>
      </div>
      <div ref={caretRef} className={`${isCaretVisible ? styles.animateCaret : styles.hideCaret}`}>
        <Tooltip message="Click here to scroll down" direction="top">
          <i className="fas fa-caret-down" onClick={()=>{
            // Add a logic here to go to about page on click
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}></i>
        </Tooltip>
      </div>
    </div>
  );
};

export default Intro;
