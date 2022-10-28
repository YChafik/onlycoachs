import React, { ReactNode } from "react";

export type HeadingProps = {
  children?: ReactNode;
  size?: "6xl" | "7xl" | "8xl" | "9xl";
};

export const Heading: React.FC<HeadingProps> = ({ size, children }) => (
  <h1 className={size ? "text-" + size : "text-6xl"}>{children}</h1>
);
