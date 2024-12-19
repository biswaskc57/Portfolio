import React from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

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
  const buttonClass = classNames(
    styles.button, 
    styles[`button--${variant}`], 
    styles[`button--${size}`], 
    { [styles["button--disabled"]]: disabled }
  );

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled || variant === "disabled"}
    >
      {children}
    </button>
  );
};

export default Button;
