import React from "react";
import styles from "./link.module.scss";

interface LinkProps {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  className?: string;
  iconSize?: number;
}

const Link: React.FC<LinkProps> = ({ href, target, iconSize }) => {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined} // Add for external links
      className={styles.link}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize ?? 24}
        height={iconSize ?? 24}
        fill="none"
        viewBox="0 0 30 30" // Larger viewBox makes elements smaller
        stroke="currentColor"
        strokeWidth="2"
        className={styles.icon}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5-5m0 0l5 5m-5-5v12"/>
        <rect x="3" y="16" width="14" height="14" rx="1" ry="1" stroke="currentColor" fill="none" />
      </svg>

    </a>
  );
};



export default Link;
