import React from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div
      initial={{ width: "100vw", transformOrigin: "right" }}
      animate={{ width: "100vw", transformOrigin: "right" }}
      exit={{ width: "0vw", transformOrigin: "right" }}
      transition={{ duration: 1 }}
      className="fixed top-0 right-0 z-[1200] bg-white w-screen h-screen origin-right flex items-center justify-center overflow-hidden"
    >
      <div className="absolute right-0 top-0 w-screen h-screen flex items-center justify-center">
        <div className="absolute">
          <p className="text-[32rem] font-semibold font-bebas-neue opacity-10">
            Loading
          </p>
        </div>
        <div className="">
            <p className="text-4xl font-lexend-deca">Hello</p>
        </div>
      </div>

      <motion.div 
      initial={{ height: '0vh' }}
      animate={{ height: '100vh' }}
      transition={{ duration: 0.2, delay: 0.5 }}
      className="absolute right-0 bottom-0 w-screen h-screen flex items-center justify-center bg-violet-700 text-white">
        <div className="absolute left-0 bottom-0 w-screen h-screen flex items-center justify-center">
          <p className="text-[32rem] font-semibold font-bebas-neue opacity-10">
            Loading
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
