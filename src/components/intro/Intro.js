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
      strings: ["Fullstack Developer", "Web Developer", "UX/Ui Designer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/BiswasKC.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I´m </h2>
          <h1>Biswas KC</h1>
          <h3>
            <span ref={text}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/images.png" alt="" />
        </a>
      </div>
    </div>
  );
}
