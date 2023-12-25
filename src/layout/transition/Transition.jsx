import { motion } from "framer-motion";
import "./Transition.css";

const transitionPage = (OgComponent) => {
  return ({ firstLoad }) => (
    <>
      <OgComponent />
      <motion.div
        className="fixed bottom-0 left-0 w-screen z-[1100] bg-violet-900 text-white overflow-hidden"
        initial={{ height: "0vh" }}
        animate={{ height: "0vh" }}
        exit={{ height: "100vh" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute left-0 bottom-0 w-screen h-screen flex items-center justify-center">
          <div className="w-16 sm:w-24 lg:w-48 aspect-square flex">
            <div className="w-1/2 aspect-square bg-white self-end"></div>
            <div className="w-1/2 h-1/2 bg-white"></div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-screen z-[1100] bg-violet-900 text-white overflow-hidden"
        initial={firstLoad ? { height: "0vh" } : { height: "100vh" }}
        animate={{ height: "0vh" }}
        exit={{ height: "0vh" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute left-0 top-0 w-screen h-screen flex items-center justify-center">
          <div className="w-16 sm:w-24 lg:w-48 aspect-square flex">
            <div className="w-1/2 aspect-square bg-white self-end"></div>
            <div className="w-1/2 h-1/2 bg-white"></div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default transitionPage;
