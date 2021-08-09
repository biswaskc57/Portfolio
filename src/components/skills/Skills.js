import "./skills.scss";

export default function Intro() {
  return (
    <div className="skills" id="skills">
      <div className="topic">
        <h1>Skills</h1>
      </div>
      <div className="skillcontent">
        <div className="left">
          <div className="text">My Creative Skills & Experiences</div>
          <div className="experience">
            <p className="p1">Experience:-</p>
            <p className="p2">
              Junior web Developer at Integrify November 2019-May 2020
            </p>
            <p className="p3">
              Full-Stack Development at Integrify May 2020 – October 2020
            </p>
          </div>
          <div className="description">
            <p>
              I have experience in multiple technologies and interpersonal
              skills, such as, HTML5, CSS3, SASS, JavaScript, Typescript, React,
              Redux, Gatsby.js, Mailchimp and have applied them while developing
              various client-based projects. In addition to these frontend
              skills, I have also experience with backend development skills
              with Node.js ,data base with Mongo Db.I am also familier with
              various Devops Tools,such as version Control Git,CI/CD(gitLab){" "}
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
              <div class="line html"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>CSS</span>
                <span>70%</span>
              </div>
              <div class="line css"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>SCSS</span>
                <span>70%</span>
              </div>
              <div class="line mysql"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>JavaScript</span>
                <span>80%</span>
              </div>
              <div class="line js"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>React.js</span>
                <span>90%</span>
              </div>
              <div class="line php"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>Redux.js</span>
                <span>70%</span>
              </div>
              <div class="line mysql"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>Typescript</span>
                <span>70%</span>
              </div>
              <div class="line mysql"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>Gatsby.js</span>
                <span>70%</span>
              </div>
              <div class="line php"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>Node.js</span>
                <span>70%</span>
              </div>
              <div class="line mysql"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>MongoDb</span>
                <span>70%</span>
              </div>
              <div class="line mysql"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>Sql</span>
                <span>60%</span>
              </div>
              <div class="line mysql"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
