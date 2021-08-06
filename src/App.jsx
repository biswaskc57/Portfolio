import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import Experience  from "./components/experience/Experience";
import Testimonials  from "./components/testimonials/Testimonials";
import Contact  from "./components/contact/Contact";
import "./app.scss"
function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <p>lamo</p>
        <Intro/>
        <Portfolio/>
        <Work />
          <Experience />
          <Testimonials />
          <Contact />
      </div>
    </div>
  );
}

export default App;
