import React from "react";
import styles from "./projects.module.scss";
import { projects } from "../../data";

interface Project {
  name: string;
  url: string;
  description: string;
  link: string;
  stacks: string[];
}

const Projects: React.FC = () => {
  const handleCardClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.projectsContainer}>
      <h2>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project: Project, index: number) => (
          <div
            className={styles.projectCard}
            key={index}
            onClick={() => handleCardClick(project.link)}
          >
            <h3 className={styles.projectTitle}>{project.name}</h3>
            <img
              src={"../../assets/exerciseBuddy.png"}
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
    </div>
  );
};

export default Projects;
