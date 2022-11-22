import React, { ReactNode } from "react";

export const Span: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <span className="before:block before:absolute before:-inset-1 before:bg-pink-500 relative inline-block">
      <span className="relative text-white">{children}</span>
    </span>
  );
};
