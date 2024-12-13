import React from "react";
import classNames from "classnames";
import styles from "./button.module.scss"; // Use the 'styles' object to access the classes

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "disabled";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  onClick,
  children,
  disabled = false,
}) => {
  // Generate the button class names dynamically
  const buttonClass = classNames(
    styles.button, // Use 'styles.button' for CSS Module class name
    styles[`button--${variant}`], // Use dynamic classes for variant
    styles[`button--${size}`], // Use dynamic classes for size
    { [styles["button--disabled"]]: disabled } // Conditionally add the disabled class
  );

  return (
    <button
      className={buttonClass} // Apply the generated class names
      onClick={onClick}
      disabled={disabled || variant === "disabled"}
    >
      {children}
    </button>
  );
};

export default Button;
