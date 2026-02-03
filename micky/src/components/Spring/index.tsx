import React from "react";
import "./Spring.scss";

interface SpringProps {
  children: React.ReactNode;
}

export const Spring: React.FC<SpringProps> = ({ children }) => (
  <div className="spring-wrapper">{children}</div>
);
