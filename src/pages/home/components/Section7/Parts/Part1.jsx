import React, { forwardRef, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import story1 from "../../../../../assets/img/story/story1.jpg";
import SvgImage from "./SvgImage";
const Part1 = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const splitTypes = document.querySelectorAll(".my-story-text");

    splitTypes.forEach((char, i) => {
      const text = new SplitType(char, { types: "words" });
      gsap.from(text.words, {
        scrollTrigger: {
          trigger: char,
          start: "top 90%",
          end: "top 70%",
          scrub: 2,
        },
        opacity: 0.01,
        stagger: 0.1,
      });
    });
  }, []);
  return (
    <div id="story1" className="w-screen h-screen relative">
      <div className="w-screen h-screen bord2 absolute left-0 bottom-full">
        <div
          id="image-story-1"
          className="w-full h-full flex items-center justify-center bord2 border-teal-600 "
        >
          <div className="container h-fit flex justify-end">
            <div className="relative z-20 w-full lg:w-1/2 aspect-square -translate-y-1/3 lg:translate-x-0 lg:translate-y-0 bord2 border-orange-200">
              <SvgImage trigger="#image-story-1" id="circleMask2" image={story1} blur="#story1" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen flex items-center justify-center relative z-10">
        <div className="container px-5 sm:px-20 xl:px-32 bord2 h-full lg:h-fit flex items-end lg:items-start">
            <div className="w-full lg:w-4/6 bord2 border-yellow-500 my-[20vh] sm:my-[10vh] lg:my-0">
                <p className="my-story-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-macondo text-white break-words">
                    Life is a story that involves great struggle to achieve dreams and goals.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
