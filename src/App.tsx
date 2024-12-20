import React, { useRef } from 'react';
import styles from './App.module.scss';
import Intro from './components/intro/Intro';
import Menu from './components/menu/Menu';
import About from './components/About/About';
import Projects from './components/projects/Projects';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import GoToTop from './components/Atoms/GoToTop/GoToTop';
import ThemeToggle from './components/Atoms/ToggleButton/ToggleButton';
import LanguageSwitcher from './components/Translate/LanguageSwitcher';
import { LanguageProvider } from './components/Contexts/LanguageContext';
import { ThemeProvider, useTheme } from './components/Contexts/ThemeContext';
import Navigation from './components/Navigation/Navigation';

interface SectionRefs {
  about: React.RefObject<HTMLDivElement>;
  intro: React.RefObject<HTMLDivElement>;
  projects: React.RefObject<HTMLDivElement>;
  experience: React.RefObject<HTMLDivElement>;
}

const App: React.FC = () => {

  const sectionRefs = useRef<SectionRefs>({
    about: React.createRef<HTMLDivElement>(),
    intro: React.createRef<HTMLDivElement>(),
    projects: React.createRef<HTMLDivElement>(),
    experience: React.createRef<HTMLDivElement>(),
  });

  // Use the ThemeContext
  const { isDarkMode } = useTheme();

  return (
    <div className={`${styles.app} ${isDarkMode ? styles.darkTheme : styles.lightTheme}`}>
      <LanguageProvider>
        <Navigation />
        <ThemeToggle />
        <Menu />
        <LanguageSwitcher />
        <div id="intro" ref={sectionRefs.current.intro}>
          <Intro />
        </div>
        <div id="experience" ref={sectionRefs.current.experience}>
          <Experience />
        </div>
        <div id="projects" ref={sectionRefs.current.projects}>
          <Projects />
        </div>
        <div id="about" ref={sectionRefs.current.about}>
          <About />
        </div>
        <GoToTop isVisible={true} />
        <Footer />
      </LanguageProvider>
    </div>
  );
};

// Wrap App with ThemeProvider
const AppWithProviders: React.FC = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppWithProviders;
