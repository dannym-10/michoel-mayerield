import * as React from "react";

interface BigBenIconProps {
  width: number;
  height: number;
  color: string;
}

export const BigBenIcon: React.FC<BigBenIconProps> = ({
  color,
  width,
  height,
}) => (
  <svg width={width} height={height} fill="none" viewBox="0 0 400 400">
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.9}
      strokeWidth={16}
      d="M169.243 181.136h63.537c.585 13.58.878 26.413.878 38.499 0 15.977 1.184 34.116-1.599 39.215-2.917 5.344-21.753 4.271-30.089 4.271-17.038 0-31.505.715-34.04-1.69-2.749-2.608-1.755-32.357-1.755-80.295M168.875 178.985c-.715-5.593 3.828-30.743 7.585-33.04.654-.399 13.973-1.176 22.795-1.176 8.822 0 25.212-.068 25.212.345 0 3.707 7.193 28.999 6.597 33.656M168.8 266.73c1.055 27.471 1.369 55.269 2.632 82.481M231.099 266.73c.37 26.865-.221 55.083.878 81.603"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.9}
      strokeWidth={6}
      d="M185.585 213.573c12.693-16.087 43.788 5.507 30.397 24.448-15.276 21.607-44.169 4.464-33.443-17.139"
      opacity={0.503}
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.9}
      strokeWidth={6}
      d="M198.5 215.5c-.669 4.638-1.282 11.744-.501 13 .501.805 3.001 2 5.001 3"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.9}
      strokeWidth={16}
      d="M218.818 141.255c0-4.175-.023-6.417-.023-20.279-9.052-16.899-15.846-40.558-20.384-70.976-4.529 30.418-10.26 53.632-17.192 69.641-.064.148-.081.35-.132.575l.132 21.039"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.9}
      strokeWidth={6}
      d="M190.992 278.137c1.116 10.604.187 31.635 1.244 36.853M211.051 277.26c.603 12.581-.358 25.464 1.491 37.73M190.992 326.397c1.116 6.564.187 19.583 1.244 22.814M210.292 325.52c.151 7.899-.09 15.989.373 23.691M210.316 193.024v6.075M200.359 193.024v6.075M189.832 193.024v5.062M205.929 160.478v6.074M205.929 128.971v9.111M195.396 128.971v9.111M193.34 160.478v8.099"
      opacity={0.503}
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.9}
      strokeWidth={4}
      d="M225.266 120.2h-50.619"
    />
  </svg>
);
