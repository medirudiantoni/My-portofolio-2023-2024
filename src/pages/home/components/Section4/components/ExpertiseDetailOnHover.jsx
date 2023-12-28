import React from "react";
import { motion } from "framer-motion";

const ExpertiseDetailOnHover = ({ title, text, onEnter, onLeave }) => {
  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: "0vh" }}
      exit={{ y: "100vh" }}
      transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="max-w-xs hidden lg:inline-block absolute z-50 right-0"
    >
      <div className="w-full h-fit p-10 bg-slate-200 dark:bg-neutral-900 text-black dark:text-white rounded-xl shadow-xl rotate-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-base">{text}</p>
      </div>
    </motion.div>
  );
};

export default ExpertiseDetailOnHover;
