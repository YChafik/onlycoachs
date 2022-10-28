import React, { ReactNode } from "react";

type HeadingProps = {
  size?: string;
  unterline?: string;
};

export const Heading: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <h1 className="text-6xl">{children}</h1>;
};
