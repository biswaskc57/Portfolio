import React, { ReactElement, ReactNode } from "react";
import { skills } from "../../data";
import styles from './about.module.scss';
import { useLanguage } from "../Contexts/LanguageContext";
import AnimatedScroll from "../AnimatedScroll/AnimatedScroll";


type WrapperComponentProps = {
  children:ReactNode; // Covers all possible React children types
};

const WrapperComponent: React.FC<WrapperComponentProps> = ({ children }) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        // Ensure the child is a valid React element and has props
        if (React.isValidElement(child)) {
          return React.cloneElement(child as ReactElement<any>, {
            className: `${child.props.className || ""} box`.trim(),
          });
        }
        return child; // Return non-React elements unchanged
      })}
    </div>
  );
};
const About: React.FC = () => {
  const { language } = useLanguage(); 

  // Recursive function to add className 'box' to all child elements
  const addClassNameToChildren = (node: ReactNode): ReactNode => {
    if (React.isValidElement(node)) {
    // Clone the element with a new className and recursively process the children
      const clonedElement = React.cloneElement(node as ReactElement<React.HTMLProps<any>>, {
        className: `${node.props.className || ""} box`.trim(),
        children: React.Children.map(node.props.children, addClassNameToChildren),
      });

      // Return the cloned element with the updated className
      return clonedElement;
    }

    // If the node is not a React element (e.g., text or number), return it as-is
    return node;
  };
  const updatedChildren = addClassNameToChildren(language.bio);

  return (
    <div className={styles.infoContainer}>
      <h2>  <AnimatedScroll>{language.Navigation.About}</AnimatedScroll></h2>
      <div className={styles.myDetail}>
        <div 
          tabIndex={0}
          className={styles.textSection}>
          <p className={styles.text}>
          </p>
          <AnimatedScroll>{updatedChildren}</AnimatedScroll>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillItem} style={{ "--i": index } as React.CSSProperties}>
                <img src={skill.url} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
