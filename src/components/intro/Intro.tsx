import React, { useRef, useState } from "react";
import styles from "./Intro.module.scss";
import slush from "../../assets/Slush.jpg";
import Pdf from "../../assets/resume.pdf";

import useOnElementVisible from "../Hooks/useOnElementVisible";
import Tooltip from "../Atoms/Tooltip/Tooltip";
import { useLanguage } from "../Contexts/LanguageContext";
import Button from "../Atoms/Button/Button";
import Contact from "../Contact/Contact";
import Dialog from "../Atoms/Dialog/Dialog";

const Intro: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const caretRef = useRef<HTMLDivElement>(null);

  const isImageVisible = useOnElementVisible(imageRef);
  const isTextVisible = useOnElementVisible(textRef);
  const isCaretVisible = useOnElementVisible(caretRef);

  const { language } = useLanguage();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.introContainer}>
      <div className={styles.introElements}>
        <div
          ref={imageRef}
          id="testElement"
          className={`${styles.myElement} ${isImageVisible ? styles.animate : styles.hide}`}
        >
          <img id={styles.slider} className={styles.myImage} src={slush} alt="profile" />
        </div>
        <div
          ref={textRef}
          className={`${styles.typewriterText} ${isTextVisible ? styles.animateText : styles.hide}`}
        >
          <h1>
            <span className={styles.name}>{language.greeting}</span>
          </h1>
          <p className={`${styles.text} ${styles.profession}`}>{language.intro}</p>
          <div className={styles.buttons}>
            <a href={Pdf} rel="noopener noreferrer" target="_blank">
              <Button variant="primary">Resume</Button>
            </a>
            <a href="#" rel="noopener noreferrer" onClick={(e) => e.preventDefault()}>
              <Button onClick={toggleModal} variant="secondary">
                {language.Navigation.Contact}
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div
        ref={caretRef}
        className={`${isCaretVisible ? styles.animateCaret : styles.hideCaret}`}
      >
        <Tooltip message="Click here to scroll down" direction="top">
          <i
            className="fas fa-caret-down"
            onClick={() => {
              document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
            }}
          ></i>
        </Tooltip>
      </div>

      {/* Using Dialog Component */}
      <Dialog
        isOpen={isModalOpen}
        onClose={toggleModal}
        title="Contact me"
      >
        <Contact />
      </Dialog>
    </div>
  );
};

export default Intro;
