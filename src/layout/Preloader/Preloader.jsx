import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Preloader = ({ duration }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 100) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <motion.div
      initial={{ width: "100vw", transformOrigin: "right" }}
      animate={{ width: "100vw", transformOrigin: "right" }}
      exit={{ width: "0vw", transformOrigin: "right" }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 right-0 z-[1200] bg-primary text-white w-screen h-[100dvh] origin-right flex items-center justify-center overflow-hidden"
    >
      <div className="absolute right-0 top-0 w-screen h-[100dvh] flex items-center justify-center">
        {/* <div className="absolute right-5 bottom-5 text-7xl font-semibold font-bebas-neue">
          {count}
        </div> */}
        <div className="w-full max-w-lg h-0.5 bg-violet-400 relative z-10">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: `100%` }}
            transition={{ duration: 2 }}
            className="w-full h-full origin-left bg-white"
          ></motion.div>
        </div>
        {count === 100 && (
          <motion.div
            initial={{ scaleY: "0%" }}
            animate={{ scaleY: "100%" }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-20 w-full h-full bg-white flex items-center justify-center"
          >
            <div className="w-16 sm:w-24 lg:w-48 aspect-square flex">
              <div className="w-1/2 aspect-square bg-primary self-end"></div>
              <div className="w-1/2 h-1/2 bg-primary"></div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Preloader;
