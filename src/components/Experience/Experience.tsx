import React from "react";
import styles from "./experience.module.scss";
import { useLanguage } from "../Contexts/LanguageContext";
import Link from "../Atoms/Link/Link";

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
      <h2>{language.Navigation.Experience}</h2>
      <div className={styles.experience}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={styles.info}
          >
            <div className={styles.duration}><h3>{exp.duration}</h3></div>
            <div className={styles.detail}>
              <div>
                <h3>
                  {exp.role}<br></br>
                </h3>
                <h4><Link href={exp.url} target = "_blank" showLink={true} iconSize="medium"> {exp.company} </Link></h4>
                <h4>{exp.location}</h4>
              </div>
              <p>{exp.responsibility}</p>
              <div className={styles.technology}>
                {exp.technologies.map((technology) => (
                  <div key={technology}> <code>{technology}</code></div>
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
