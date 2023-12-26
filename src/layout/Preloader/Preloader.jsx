import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Preloader = ({ duration }) => {
  const [count, setCount] = useState(1);
  const [stepCount, setStepCount] = useState(0);

  console.log(stepCount);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 26 || count === 58 || count === 78) {
        setTimeout(() => {
          setCount((prevCount) => prevCount + 1);
        }, 500);
      } else if (count < 100) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepCount(count);
    }, 1000);
    return () => clearInterval(interval);
  }, [stepCount]);

  return (
    <motion.div
      // initial={{ opacity: 1 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      initial={{ width: "100vw", transformOrigin: "right" }}
      animate={{ width: "100vw", transformOrigin: "right" }}
      exit={{ width: "0vw", transformOrigin: "right" }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 right-0 z-[1200] bg-primary text-white w-screen h-screen origin-right flex items-center justify-center overflow-hidden"
    >
      <div className="absolute right-0 top-0 w-screen h-screen flex items-center justify-center">
        <div className="absolute">
          <p className="text-[6rem] sm:text-[12rem] lg:text-[24rem] xl:text-[32rem] font-semibold font-bebas-neue opacity-5">
            Loading
          </p>
        </div>
        <div className="absolute right-5 bottom-5 text-4xl font-semibold font-bebas-neue">
          {count}
        </div>
        <div className="w-full h-1 bg-violet-400 relative z-10">
          <div
            style={{ width: `${count}%`, transitionDuration: "10ms" }}
            className="w-full h-full origin-left bg-white"
          ></div>
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
