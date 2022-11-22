import React, { ReactNode } from "react";
import { motion } from "framer-motion";

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
  <motion.h1
    initial={{ opacity: 0, x: "-20%" }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    className={size ?? "text-6xl"}
  >
    {children}
  </motion.h1>
);
