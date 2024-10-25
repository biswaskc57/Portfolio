import "./Intro.scss";
import React, { useEffect, useRef } from "react";
import { init } from "ityped";

const Intro: React.FC = () => {
  // Define the ref type as HTMLSpanElement
  const text = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (text.current) {
      init(text.current, {
        showCursor: true,
        backDelay: 2000,
        strings: ["Fullstack Developer", "Software Developer", "Designer"],
      });
    }
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="wrapper">
          <h2>Hi there, I'm </h2>
          <h1>Biswas K C</h1>
          <h3>
            <span ref={text}></span>
          </h3>
          <button className="button">
            <a
              href="https://www.canva.com/design/DAEmm0R3Cjs/view"
              target="_blank"
              rel="noopener noreferrer" // Add this for security reasons
            >
              Download CV
            </a>
          </button>
        </div>
        <div>
          <a href="#portfolio" className="pointer">
            <img src="assets/images.png" alt="Portfolio" />
          </a>
        </div>
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src="assets/Cropped.png" alt="Biswas K C" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
