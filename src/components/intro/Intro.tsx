import React, { useEffect, useRef, useState } from "react";
import styles from "./Intro.module.scss";
import avatar from "../../assets/avatar.jpg";
import Pdf from "../../assets/resume.pdf";

import useOnElementVisible from "../Hooks/useOnElementVisible";

const Intro: React.FC = () => {

  const imageRef = useRef<HTMLDivElement>(null);

  const isVisible = useOnElementVisible(imageRef);

  // State to store visibility
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    // Update visibility state if the image is currently visible
    if (isVisible) {
      setImageVisible(true);
    } else {
      setImageVisible(false);
    }
  }, [isVisible]); // Update when visibility changes


  return (
    <div className={styles.introContainer}>
      <div className={styles.introElements}>
        <div ref={imageRef} id={"testElement"} className={`${styles.myElement} ${imageVisible ? styles.animate : styles.hide}`}>
          <img id={styles.slider} className={`${styles.myImage} ${isVisible ? styles.animateImage : ''}`} src={avatar} alt="profile" />
        </div>
        <div className={styles.typewriterText}>
          <p className={styles.name}>
            Hello, <span>I&apos;m Biswas K C!</span>
          </p>
          <p className={styles.profession}>Web Developer!</p>
          <a href={Pdf} rel="noopener noreferrer" target="_blank">
            <button title="View resume">Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
