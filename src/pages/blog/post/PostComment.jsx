import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PostComment = () => {
  const [isReactButton, setIsReactButton] = useState(false);
  const reactions = [
    { icon: "💖", length: 0, mean: "love" },
    { icon: "👍", length: 0, mean: "like" },
    { icon: "😁", length: 0, mean: "happy" },
    { icon: "🙅", length: 0, mean: "dislike" },
    { icon: "🤬", length: 0, mean: "angry" },
  ];
  return (
    <div className="w-full max-w-5xl relative">
      <div className="w-full mb-5">
        <p className="text-4xl font-semibold leading-[8vh]">
          What do you think? <br />
          Comment below...
        </p>
      </div>
      <div className="w-full h-fit flex items-center justify-between">
        <div
          onMouseEnter={() => setIsReactButton(true)}
          onMouseLeave={() => setIsReactButton(false)}
          className=" flex gap-2"
        >
          <button className="py-2 px-4 w-fit h-fit rounded-lg bg-slate-200 hover:bg-slate-300 hover:scale-95 duration-100">
            Your reaction
          </button>
          <AnimatePresence mode="wait">
            {isReactButton && (
              <motion.div
                initial={{
                  y: 10,
                  opacity: 0,
                  scale: 0,
                  transformOrigin: "left",
                }}
                animate={{
                  y: 0,
                  opacity: 100,
                  scale: 1,
                  transformOrigin: "left",
                }}
                exit={{ y: 10, opacity: 0, scale: 0, transformOrigin: "left" }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
                className="w-fit h-10 py-2 px-4 rounded-lg bg-slate-200 shadow-xl flex items-end gap-2 relative"
              >
                {reactions.map((react, i) => {
                  return (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ duration: 0.1 + i / 50 }}
                      onClick={() => alert(react.icon)}
                      className="hover:text-4xl duration-100 cursor-pointer"
                    >
                      {react.icon}
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex gap-4">
          {reactions.map((react, i) => {
            return (
              <div key={i} className="relative">
                <div className="text-2xl">{react.icon}</div>
                <div className="absolute top-2/3 left-2/3 font-bold py-0.5 px-1.5 shadow-lg rounded-full bg-white border-2 border-black text-xs">
                  {react.length}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full h-fit py-6 flex flex-col items-end justify-between gap-4">
        <textarea
          name="comment"
          id="comment"
          placeholder="let me know your thought 😁"
          cols="30"
          rows="5"
          className="bg-slate-200 rounded-lg w-full py-2 px-4"
        ></textarea>
        <button className="py-2 px-4 w-fit h-fit rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-900 active:scale-95 duration-100">
          Send as Google user
        </button>
      </div>
      <div className="w-full mt-20 flex flex-col gap-4">
        <p className="text-4xl font-semibold leading-[8vh]">
          Comments: 0
        </p>
        <div className="w-full p-10 rounded-xl bg-slate-200">
            <div className="flex gap-3 items-end">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-400">
                    <img src="https://source.unsplash.com/400x400?portrait" alt="" className="w-full h-full object-cover" />
                </div>
                <p className="text-xl font-semibold">Anisa Fitri Sari</p>
            </div>
            <p className="my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae iure deleniti doloremque ad fugit natus error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ducimus a nulla.</p>
            <div className="flex items-center gap-5 text-sm">
                <p className="font-semibold">20 December 2023</p>
                <p>Agree 1 . Disagree 2 .</p>
                <p className="hover:text-blue-600 active:text-blue-900 cursor-pointer">Reply</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PostComment;
