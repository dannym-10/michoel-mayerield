import * as React from "react";

interface TrainIconProps {
  width: number;
  height: number;
  color: string;
}
export const TrainIcon: React.FC<TrainIconProps> = ({
  width,
  height,
  color,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 400 400"
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.9}
      strokeWidth={16}
      d="M52.417 129.945c102.35-5.514 246.634-49.024 310.496 52.657 6.341 10.093 9.197 38.48.998 48.681-23.086 28.719-278.809 27.711-325.468 27.711M371.656 279.262c-110.97-.552-229.466 7.179-338.61 2.518"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.9}
      strokeWidth={16}
      d="M264.29 133.538c-16.634 66.226 33.515 53.806 81.735 47.037M240.21 132.188C251.965 213.876 84.679 176.294 29 190.197"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.9}
      strokeWidth={16}
      d="M171.274 140.283c-5.053 15.095-1.188 30.648-1.188 45.867M96.793 144.33c-3.67 10.181-1.248 42.819-1.188 43.169M297.88 272.488c-7.833-4.205-4.269-7.951 2.277-13.49M248.894 268.441c-4.16 10.791-10.792 10.452-10.792 1.011M170.649 270.484c-6.038 5.504-5.245-.142-8.094-2.375M192.849 147.435c42.965-6.096-17.091 59.072-12.504 8.655M122.845 145.727c45.395-2.054-25.266 62.342-10.951 11.184M54.53 152.424c10.18 9.137-10.235 24.848-16.087 5.94"
    />
  </svg>
);
