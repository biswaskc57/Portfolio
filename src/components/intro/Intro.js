import "./Intro.scss";
import React from "react";
import { init } from "ityped";
import { useEffect, useRef } from "react";
export default function Intro() {
  const text = useRef();
  
  useEffect(() => {
    init(text.current, {
      showCursor: true,
      backDelay: 2000,
      strings: ["Fullstack Developer", "Software Developer", " Designer"],
    });
  }, []);

  return (
    <div className="intro container"  id="intro">
      <div className="left">
        <div className="wrapper">
          <h2>Hi there, I'm </h2>
          <h1>Biswas K C</h1>
          <h3>
            <span ref={text}></span>
          </h3>
          <button className="button">
            <a href="https://www.canva.com/design/DAEmm0R3Cjs/view" target="_blank">
               Download CV
            </a> 
            </button>
        </div>
        <div>
        <a href="#portfolio" className="pointer">
          <img src="assets/images.png" alt="" />
        </a>
        </div>
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src="assets/Cropped.png" alt="" />
        </div>
      </div>
    </div>
  );
}
