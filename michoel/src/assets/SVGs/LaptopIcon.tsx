import * as React from "react";

interface LaptopIconProps {
  height: number;
  width: number;
  color: string;
}

export const LaptopIcon: React.FC<LaptopIconProps> = ({
  height,
  width,
  color,
}) => (
  <svg width={width} height={height} fill="none" viewBox="0 0 400 400">
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.9}
      strokeWidth={16}
      d="M147.401 313.003c-107.552 0-105.102 0-60.288-103.477v65.944M324.557 227.946c-20.128-.754-129.136-1.681-137.024 6.209-11.379 11.382-39.529 89.958-28.259 104.988 76.589 1.459 134.506 3.018 145.834-1.514 5.846-2.339 10.516-9.064 13.12-15.142 2.062-4.814 23.716-78.188 23.716-80.256M155.578 338.466c-16.192-6.119-33.17-11.498-48.759-19.504M109.285 124.88c-25.29 83.084 87.857 118.273 117.821 34.735 16.243-45.286-38.407-111.944-94.425-61.913"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.9}
      strokeWidth={16}
      d="M187.702 157.793c1.036-2.8 1.775-4.442 2.354-7.158M164.323 157.307c1.087-2.232 1.267-4.233 1.692-6.757"
    />
  </svg>
);
