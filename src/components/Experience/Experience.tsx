import React from "react";
import styles from "./experience.module.scss";


export const experiences = [
  {
    role: "Front-end Developer",
    company: "Frosmo Oy",
    location: "Helsinki, Finland",
    duration: "2021 – Present",
    responsibilities: [
      "Frontend Development: Expertise in React, JavaScript, TypeScript, HTML, CSS, and SASS.",
      "UI/UX Design: Skilled in creating dynamic, data-driven interfaces and reusable components.",
      "Collaboration: Experience working in Agile and Kanban environments with cross-functional teams.",
      "Customer Support: Experienced in providing technical support and creating customer-centric solutions."
    ],
    technologies: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "SASS"],
    url: "https://www.frosmo.com",
    responsibility: `
      Expertise in frontend development with technologies such as React, JavaScript, TypeScript, HTML, CSS, and SASS.
      Focused on UI/UX design by creating dynamic, data-driven interfaces and reusable components.
      Worked in Agile and Kanban environments, collaborating closely with cross-functional teams.
      Provided customer support through technical solutions and customer-centric designs to enhance user experience.
    `,
  },
  {
    role: "Software Developer",
    company: "Haaga-Helia UAS",
    location: "Helsinki, Finland",
    duration: "2020 – 2021",
    responsibilities: [
      "Developed dynamic and responsive user interfaces using React and TypeScript, ensuring seamless user experiences.",
      "Integrated GraphQL and relational databases to manage data efficiently, enabling smooth communication between front-end and back-end systems.",
      "Collaborated with Siili Solutions on a web application project, utilizing AWS for deployment and implementing scalable architecture."
    ],
    technologies: ["Java", "Springboot", "React", "TypeScript", "GraphQL", "AWS", "Postgre"],
    url: "https://www.haaga-helia.fi",
    responsibility: `
      Developed dynamic, responsive interfaces with React and TypeScript to enhance user engagement.
      Integrated GraphQL and databases to optimize data management, facilitating efficient front-end to back-end communication.
      Worked with Siili Solutions on a large-scale application project, implementing scalable AWS architecture.
    `,
  },
  {
    role: "Assistant Manager/Shift Manager",
    company: "Taco Bell",
    location: "Helsinki, Finland",
    duration: "2018 – 2021",
    responsibilities: [
      "Managed and supervised shift workers, ensuring smooth and efficient operations during peak and off-peak hours.",
      "Planned and organized workloads to optimize productivity and maintain consistent service standards."
    ],
    technologies: [],
    url: "https://www.tacobell.com",
    responsibility: `
      Oversaw shift operations, supervising staff to ensure efficient and consistent service delivery during high-traffic periods.
      Strategically organized team workloads to optimize productivity, maintaining a high standard of service.
    `,
  }
];

const Experience: React.FC = () => {
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
