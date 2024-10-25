import React, { FunctionComponent, useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Menu from "./components/menu/Menu";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import "./App.scss";

// Define props types for Topbar and Menu components
interface TopbarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MenuProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const App: FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [titleName, setTitleName] = useState<string>("Portfolio");

  return (
    <div className="app">
      {/* Ensure that Topbar and Menu components accept the correct props */}
      <Topbar open={menuOpen} setOpen={setMenuOpen} />
      <Menu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default App;
