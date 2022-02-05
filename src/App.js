import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import React from "react";
import Menu from "./components/menu/Menu";
import Skills from "./components/skills/Skills";
//import Github from "./components/github/Github";
import Contact from "./components/contact/Contact";
import "./App.scss";
import { useState } from "react";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [titleName, settitleName] = useState("Portfolio");
  return (
    <div className="app">
      <Topbar open={menuOpen} setOpen={setMenuOpen} />
      <Menu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        name={titleName}
        setName={settitleName}
      />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
