import React, { useEffect, useRef, useState } from "react";
import styles from "./Intro.module.scss";
import avatar from "../../assets/avatar.jpg";
import Pdf from "../../assets/resume.pdf";
import useOnScroll from "../Hooks/useOnScroll";
import useOnDebounceCallback from "../Hooks/useOnDebounce";

const Intro: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  // Get the visibility state from the `useOnScroll` hook
  const isVisible = useOnScroll(imageRef);

  // State to store debounced visibility
  // Initially the image should be visible.
  const [imageVisible, setImageVisible] = useState(false);

  // Debounce function to update `imageVisible` only every 2000ms
  const updateVisibility = useOnDebounceCallback(() => {
    setImageVisible(isVisible);
  }, 1000);

  // Trigger `updateVisibility` whenever `isVisible` changes
  useEffect(() => {
    updateVisibility();
  }, [isVisible]);


  return (
    <div className={styles.introContainer}>
      <div className={styles.introElements}>
        <div ref={imageRef} id={"testElement"} className={`${styles.myElement} ${imageVisible ? styles.animate : styles.hide}`}>
          <img id={styles.slider} className={`${styles.myImage} ${imageVisible ? styles.animateImage : ''}`} src={avatar} alt="profile" />
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
