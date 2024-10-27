import React, { useEffect, useRef, useState } from 'react';
import styles from './App.module.scss';
import Intro from './components/intro/Intro';
import Menu from './components/menu/Menu';
import { navItems } from "./data";

interface NavProps {
  isScrollingUp: boolean;
}
interface SectionRefs {
  intro: React.RefObject<HTMLDivElement>;
  about: React.RefObject<HTMLDivElement>;
  projects: React.RefObject<HTMLDivElement>;
  experience: React.RefObject<HTMLDivElement>;
  contact: React.RefObject<HTMLDivElement>;
}

const App: React.FC = () => {
  const [isAboutSectionActive, setIsAboutSectionActive] = useState<boolean>(false);
  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(true);
  const lastScrollY = useRef<number>(0); // To store the last scroll position

  // 
  const sectionRefs = useRef<SectionRefs>({
    intro: React.createRef<HTMLDivElement>(),
    about: React.createRef<HTMLDivElement>(),
    projects: React.createRef<HTMLDivElement>(),
    experience: React.createRef<HTMLDivElement>(),
    contact: React.createRef<HTMLDivElement>(),
  });

  // Handle scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const { intro, about, projects, experience, contact } = sectionRefs.current;

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.target.id === "intro") {
          setIsAboutSectionActive(entry.isIntersecting);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    const pages = [intro, about,  projects, experience, contact ];

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

  const Navigation: React.FC<NavProps> = ({ isScrollingUp }) => {
    return (
      <nav className={`${styles.appNav} ${isScrollingUp ? styles.visible : styles.hidden}`}>
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
    <div className={`${styles.app} ${isAboutSectionActive ? styles.aboutActive : ''}`}>
      <Navigation isScrollingUp={isScrollingUp} />
      <Menu />
      <div className="sections"></div>
      <div id="intro" ref={sectionRefs.current.intro}>
        <Intro />
      </div>
    </div>
  /* <div className="sections">
        <Intro />
        <Portfolio />
        <Skills />
        <Contact />
      </div> */
  );
};

export default App;


