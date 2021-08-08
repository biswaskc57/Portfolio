import "./Intro.scss";

export default function Intro() {
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
            Software Developer<span></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/images.png" alt="" />
        </a>
      </div>
    </div>
  );
}
