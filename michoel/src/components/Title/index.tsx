import React from "react";

interface TitleProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
}

export const Title: React.FC<TitleProps> = ({ children, as: Tag = "h2" }) => {
  return <Tag>{children}</Tag>;
};
