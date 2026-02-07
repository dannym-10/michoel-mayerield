import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "outline";
  type?: "button" | "submit";
  fullWidth?: boolean;
  to?: string;
  href?: string;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  type = "button",
  fullWidth = false,
  to,
  href,
  onPress,
}) => {
  const className = `btn btn--${variant}${fullWidth ? " btn--full" : ""}`;

  if (href) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={className}>
        {text}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onPress} className={className}>
      {text}
    </button>
  );
};
