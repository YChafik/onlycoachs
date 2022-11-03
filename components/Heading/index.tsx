import React, { ReactNode } from "react";

export type HeadingProps = {
  children?: ReactNode;
  size?:
    | "text-xl"
    | "text-2xl"
    | "text-3xl"
    | "text-4xl"
    | "text-5xl"
    | "text-6xl"
    | "text-7xl"
    | "text-8xl"
    | "text-9xl";
};

export const Heading: React.FC<HeadingProps> = ({ size, children }) => (
  <h1 className={size ?? "text-6xl"}>{children}</h1>
);
