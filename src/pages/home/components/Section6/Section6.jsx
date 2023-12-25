import React from "react";
import Section6Contents from "./Section6Contents";
import SvgPathAnimation from "../../../../layout/SvgPathAnimation/SvgPathAnimation";

const Section6 = () => {
  return (
    <section className="w-screen h-fit relative">
      <div className="-translate-y-240 absolute z-10">
        <SvgPathAnimation />
      </div>
      <Section6Contents />
      <div className="w-screen h-screen bg-slate-300 dark:bg-negative"></div>
    </section>
  );
};

export default Section6;
