import React, { ReactNode } from "react";
import styles from "./link.module.scss";

interface LinkProps {
  children?: ReactNode;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  className?: string;
  iconSize?: "small" | "medium" | "large";
  showLink?: boolean;
}

const Link: React.FC<LinkProps> = (props) => {
  // Map iconSize to numeric dimensions
  const sizeMap: Record<"small" | "medium" | "large", number> = {
    small: 14,
    medium: 20,
    large: 30,
  };

  const iconDimension = sizeMap[props.iconSize ?? "medium"];

  return (
    <a
      href={props.href}
      target={props.target}
      rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
      className={`${styles.link} ${props.className || ""}`}
    >
      <span className={styles.text}>{props.children}</span>
      {props.showLink && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={iconDimension}
          height={iconDimension}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"
            transform="rotate(0, 12, 12)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </a>
  );
};

export default Link;
