import React, { FunctionComponent, useState } from 'react';
import './App.scss';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Menu  from './components/menu/Menu';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';



const App: FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <div className="app">
      <Menu/>
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



