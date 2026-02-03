import React from "react";

interface SpacerProps {
  size?: number;
}

export const Spacer: React.FC<SpacerProps> = ({ size = 10 }) => {
  return <div style={{ paddingBottom: size }} />;
};
