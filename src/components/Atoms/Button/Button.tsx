import React from "react";
import classNames from "classnames";
import "./button.module.scss";

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
    "button", // Always apply the base "button" class
    `button--${variant}`, // Add the variant class, like button--primary
    `button--${size}`, // Add the size class, like button--medium
    { "button--disabled": disabled } // Add the disabled class conditionally
  );

  return (
    <button
      className={buttonClass} // Apply buttonClass directly
      onClick={onClick}
      disabled={disabled || variant === "disabled"}
    >
      {children}
    </button>
  );
};

export default Button;
