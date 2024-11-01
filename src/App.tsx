import React, { useEffect, useRef, useState } from 'react';
import styles from './App.module.scss';
import Intro from './components/intro/Intro';
import Menu from './components/menu/Menu';
import { navItems } from "./data";
import About from './components/About/About';
import Projects from './components/projects/Projects';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import GoToTop from './components/GoToTop/GoToTop';
import useOnThrottle from './components/Hooks/useOnThrottle';


interface SectionRefs {
  about: React.RefObject<HTMLDivElement>;
  intro: React.RefObject<HTMLDivElement>;
  projects: React.RefObject<HTMLDivElement>;
  experience: React.RefObject<HTMLDivElement>;
  contact: React.RefObject<HTMLDivElement>;
}

const App: React.FC = () => {
  const [isGoToTopSectionActive, setIsGoToTopSectionActive] = useState<boolean>(false);

  console.log;


  const sectionRefs = useRef<SectionRefs>({
    about: React.createRef<HTMLDivElement>(),
    intro: React.createRef<HTMLDivElement>(),
    projects: React.createRef<HTMLDivElement>(),
    experience: React.createRef<HTMLDivElement>(),
    contact: React.createRef<HTMLDivElement>(),
  });


  // Intersection Observer for section visibility with debounce
  const handleIntersection =(entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      console.log("entry.target.id ", entry.target.id );
      if (entry.target.id === "about") {
        setIsGoToTopSectionActive(false);
      }
      else {
        setIsGoToTopSectionActive(true);
      }
    });
  };

  const throttledHandleIntersection = useOnThrottle(handleIntersection, 500);

  useEffect(() => {
    const { about, intro, projects, experience, contact } = sectionRefs.current;

    const observer = new IntersectionObserver(throttledHandleIntersection, {
      threshold: 0.5,
    });

    const pages = [about, intro, projects, experience, contact];

    pages.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      pages.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const Navigation: React.FC = () => {
    return (
      <nav className={`${styles.appNav} ${styles.visible}`}>
        <ul>
          {navItems
            .filter((link) => link.id !== "contact")
            .map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>
                  <i className={`fas ${link.icon}`}></i>
                  {link.label}
                </a>
              </li>
            ))}
        </ul>
      </nav>
    );
  };

  return (
    <div className={styles.app}>
      <Navigation />
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
      <Footer />
      <GoToTop isVisible={isGoToTopSectionActive} />
    </div>
  );
};

export default App;
