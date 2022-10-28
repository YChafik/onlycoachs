import React, { ReactNode } from "react";

export const Heading: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <h1 className="font-Lato text-6xl">{children}</h1>;
};
