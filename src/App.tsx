import React, { useEffect, useRef, useState } from 'react';
import styles from './App.module.scss';
import Intro from './components/intro/Intro';
import Menu from './components/menu/Menu';
import About from './components/About/About';
import Projects from './components/projects/Projects';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Navigation from './components/Navigation/Navigation';
import GoToTop from './components/Atoms/GoToTop/GoToTop';
import ThemeToggle from './components/Atoms/ToggleButton/ToggleButton';
import LanguageSwitcher from './components/Translate/LanguageSwitcher';
import { LanguageProvider } from './components/Contexts/LanguageContext';
import { ThemeProvider, useTheme } from './components/Contexts/ThemeContext';

interface SectionRefs {
  about: React.RefObject<HTMLDivElement>;
  intro: React.RefObject<HTMLDivElement>;
  projects: React.RefObject<HTMLDivElement>;
  experience: React.RefObject<HTMLDivElement>;
  contact: React.RefObject<HTMLDivElement>;
}

const App: React.FC = () => {
  const [isGoToTopSectionActive, setIsGoToTopSectionActive] = useState<boolean>(false);

  const sectionRefs = useRef<SectionRefs>({
    about: React.createRef<HTMLDivElement>(),
    intro: React.createRef<HTMLDivElement>(),
    projects: React.createRef<HTMLDivElement>(),
    experience: React.createRef<HTMLDivElement>(),
    contact: React.createRef<HTMLDivElement>(),
  });

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const isIntroVisible = entries.some((entry) => {
      if (entry.target.id === 'intro' && entry.isIntersecting) {
        setIsGoToTopSectionActive(false);
        return true;
      }
      return false;
    });

    if (!isIntroVisible) {
      setIsGoToTopSectionActive(true);
    }
  };

  useEffect(() => {
    const { about, intro, projects, experience, contact } = sectionRefs.current;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    const pages = [about, intro, projects, experience, contact];

    pages.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      pages.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  // Use the ThemeContext
  const { isDarkMode } = useTheme();

  return (
    <div className={`${styles.app} ${isDarkMode ? styles.darkTheme : styles.lightTheme}`}>
      <LanguageProvider>
        <Navigation />
        <ThemeToggle />
        <LanguageSwitcher />
        <Menu />
        <div id="intro" ref={sectionRefs.current.intro}>
          <Intro />
        </div>
        <div id="about" ref={sectionRefs.current.about}>
          <About />
        </div>
        <div id="projects" ref={sectionRefs.current.projects}>
          <Projects />
        </div>
        <div id="experience" ref={sectionRefs.current.experience}>
          <Experience />
        </div>
        <div id="contact" ref={sectionRefs.current.contact}>
          <Contact />
        </div>
        <GoToTop isVisible={isGoToTopSectionActive} />
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
