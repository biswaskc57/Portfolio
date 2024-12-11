import React from "react";
import styles from "./experience.module.scss";
import { useLanguage } from "../Contexts/LanguageContext";




const Experience: React.FC = () => {
  const { language } = useLanguage(); 
  const experiences = [
    {
      role: "Front-end Developer",
      company: "Frosmo Oy",
      location: "Helsinki, Finland",
      duration: "2021 – Present",
      technologies: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "SASS"],
      url: "https://www.frosmo.com",
      responsibility: language.frosmo
    },
    {
      role: "Software Developer",
      company: "Haaga-Helia UAS",
      location: "Helsinki, Finland",
      duration: "2020 – 2021",
      technologies: ["Java", "Springboot", "React", "TypeScript", "GraphQL", "AWS", "Postgre"],
      url: "https://www.haaga-helia.fi",
      responsibility: language.haagaHelia
    },
    {
      role: "Assistant Manager/Shift Manager",
      company: "Taco Bell",
      location: "Helsinki, Finland",
      duration: "2018 – 2021",
      technologies: [],
      url: "https://www.tacobell.com",
      responsibility: language.tacoBell
    }
  ];
  return (
    <div className={styles.experienceContainer}>
      <h2>Experience</h2>
      <div className={styles.experience}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={styles.info}
            onClick={() =>
              window.open(exp.url, "_blank", "noopener noreferrer")
            }
          >
            <div className={styles.duration}>{exp.duration}</div>
            <div className={styles.detail}>
              <div>
                <h3>
                  {exp.role} ({exp.company})
                </h3>
                <h4>{exp.location}</h4>
              </div>
              <p>{exp.responsibility}</p>
              <div className={styles.technology}>
                {exp.technologies.map((technology) => (
                  <div key={technology}>{technology}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
