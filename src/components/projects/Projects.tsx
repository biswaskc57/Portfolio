import React, { useRef, useState, useEffect } from "react";
import styles from "./projects.module.scss";
import { projects } from "../../data";

interface Project {
  name: string;
  image: string;
  description: string;
  link: string;
  stacks: string[];
}

const Projects: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  // Scroll handling for navigation buttons
  const handleScroll = (direction: string) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollAmount = direction === "left" ? -365 : 365;
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const updateButtonVisibility = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

    // Update visibility of buttons based on scroll position
    setShowLeftButton(slider.scrollLeft > 0);
    setShowRightButton(slider.scrollLeft < maxScrollLeft);
  };

  const updateCurrentIndex = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollLeft = slider.scrollLeft;
    const totalScrollWidth = slider.scrollWidth;
    const visibleWidth = slider.clientWidth;

    // Calculate index based on scroll position
    const index = Math.round((scrollLeft / (totalScrollWidth - visibleWidth)) * (projects.length - 1));
    setCurrentIndex(index);

    // Update button visibility when scrolling
    updateButtonVisibility();
  };

  // IntersectionObserver for adding slide-in/slide-out animations
  useEffect(() => {
    const observerOptions = {
      root: sliderRef.current,
      threshold: 0.5, // Trigger when 50% of the element is in view
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const card = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          card.classList.remove(styles.slideOut);
          card.classList.add(styles.slideIn);
        } else {
          card.classList.remove(styles.slideIn);
          card.classList.add(styles.slideOut);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const projectCards = document.querySelectorAll(`.${styles.projectCard}`);
    projectCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      // Listen for scroll events to update pagination and button visibility
      slider.addEventListener("scroll", updateCurrentIndex);
      
      // Set initial button visibility
      updateButtonVisibility();

      return () => {
        slider.removeEventListener("scroll", updateCurrentIndex);
      };
    }
  }, []);

  const handleCardClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.projectsContainer}>
      <h2>Projects</h2>
      <div className={styles.sliderContainer}>
        {showLeftButton && (
          <button
            className={`${styles.scrollButton} `}
            onClick={() => {
              handleScroll("left");
              updateButtonVisibility();
            }}
          >
            <i className={`fa-solid fa-chevron-left ${styles.left}`}></i>
          </button>
        )}
        <div className={styles.projectsSlider} ref={sliderRef}>
          {projects.map((project: Project, index: number) => (
            <div
              className={styles.projectCard}
              key={index}
              onClick={() => handleCardClick(project.link)}
            >
              <h3 className={styles.projectTitle}>{project.name}</h3>
              <img
                src={project.image}
                alt={project.name}
                className={styles.projectImage}
              />
              <p className={styles.description}>{project.description}</p>
              <div className={styles.stack}>
                {project.stacks.map((stack, index) => (
                  <div key={index}>{stack}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {showRightButton && (
          <button
            className={`${styles.scrollButton} ${styles.right}`}
            onClick={() => {
              handleScroll("right");
              updateButtonVisibility();
            }}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        )}
      </div>
      <div className={styles.pagination}>
        {projects.map((_, index) => (
          <span
            key={index}
            className={`${styles.paginationBullet} ${
              index === currentIndex ? styles.active : ""
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Projects;
