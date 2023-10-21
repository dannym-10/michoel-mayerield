import React, { useEffect } from "react";
import "./button.scss";

interface ButtonProps {
  text: string;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onPress }) => {
  return (
    <div className="button-wrapper">
      <button onClick={onPress}>{text}</button>
    </div>
  );
};
