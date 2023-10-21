import React from "react";
import "./Spring.scss";

interface SpringProps {
  children: JSX.Element;
}

export const Spring: React.FC<SpringProps> = ({ children }) => (
  <div className="spring-wrapper">{children}</div>
);
