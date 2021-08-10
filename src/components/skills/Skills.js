import "./skills.scss";
import React from "react";
export default function Intro() {
  return (
    <div className="skills" id="skills">
      <div className="topic">
        <div class="title">
          <span>Skills</span>
        </div>
        <div class="underline"></div>
      </div>
      <div className="skillcontent">
        <div className="left">
          <div className="text">Skills & Knowledge</div>
          <div className="experience">
            <p className="p1">Education:-</p>
            <p className="p2">Business and IT(Haaga-Helia UAS) 2019-present</p>
            <div className="description">
              <p>
                I am currently studying Business and IT in Haaga-Helia UAS. Im
                majoring in software development and UX/UI designing.
              </p>
            </div>

            <p className="p3">Full-Stack Development(Helsinki University) </p>
          </div>
          <div className="description">
            <p>
              I have completed full-stack course from Helsinki University with
              react/redux at the front-end and node js at the back-end.{" "}
            </p>
          </div>
        </div>

        <div className="right">
          <div className="wrapper">
            <div class="bars">
              <div class="info">
                <span>HTML</span>
                <span>90%</span>
              </div>
              <div class="line">
                <div class="html"></div>
              </div>
            </div>

            <div class="bars">
              <div class="info">
                <span>CSS/SCSS</span>
                <span>80%</span>
              </div>
              <div class="line">
                <div class="css"></div>
              </div>
            </div>
            <div class="bars">
              <div class="info">
                <span>React & Redux</span>
                <span>80%</span>
              </div>
              <div class="line">
                <div class="react"></div>
              </div>
            </div>
            <div class="bars">
              <div class="info">
                <span>Java & Springboot</span>
                <span>80%</span>
              </div>
              <div class="line">
                <div class="java"></div>
              </div>
            </div>
            <div class="bars">
              <div class="info">
                <span>Mongo DB & Mysql</span>
                <span>70%</span>
              </div>
              <div class="line">
                <div class="database"></div>
              </div>
            </div>
            <div class="bars">
              <div class="info">
                <span>AWS</span>
                <span>60%</span>
              </div>
              <div class="line">
                <div class="cloud"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
