import "./skills.scss";
import React from "react";

const Skills: React.FC = () => {
  return (
    <div className="skills" id="skills">
      <div className="topic">
        <div className="title">
          <span>Skills</span>
        </div>
        <div className="underline"></div>
      </div>
      <div className="skillcontent">
        <div className="left">
          <div className="text">Skills & Knowledge</div>
          <div className="experience">
            <p className="p1">Education:</p>
            <p className="p2">Business and IT (Haaga-Helia UAS) 2019-present</p>
            <div className="description">
              <p>
                I am currently studying Business and IT at Haaga-Helia UAS, majoring in software development and UX/UI designing.
              </p>
            </div>

            <p className="p3">Full-Stack Development (Helsinki University)</p>
          </div>
          <div className="description">
            <p>
              I have completed a full-stack course from Helsinki University with React/Redux on the front-end and Node.js on the back-end.
            </p>
          </div>
        </div>

        <div className="right">
          <div className="wrapper">
            <div className="bars">
              <div className="info">
                <span>HTML</span>
                <span>90%</span>
              </div>
              <div className="line">
                <div className="html"></div>
              </div>
            </div>

            <div className="bars">
              <div className="info">
                <span>CSS/SCSS</span>
                <span>80%</span>
              </div>
              <div className="line">
                <div className="css"></div>
              </div>
            </div>
            <div className="bars">
              <div className="info">
                <span>React & Redux</span>
                <span>80%</span>
              </div>
              <div className="line">
                <div className="react"></div>
              </div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Java & Spring Boot</span>
                <span>80%</span>
              </div>
              <div className="line">
                <div className="java"></div>
              </div>
            </div>
            <div className="bars">
              <div className="info">
                <span>MongoDB & MySQL</span>
                <span>70%</span>
              </div>
              <div className="line">
                <div className="database"></div>
              </div>
            </div>
            <div className="bars">
              <div className="info">
                <span>AWS</span>
                <span>60%</span>
              </div>
              <div className="line">
                <div className="cloud"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;