import React, { useEffect, useRef } from "react";
import WorkTogather from "../../../layout/WorkTogather/WorkTogather";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ButtonStyleVio from "../../../layout/footerAlt/Components/ButtonStyleVio";

const Section1 = () => {
  const triggerRef = useRef(null);
  const containerRef = useRef(null);
  const divRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    const transY = gsap.to(containerRef.current, {
      y: -200,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    })
    const scaleUp = gsap.to(divRef.current, {
        height: "100vh",
        scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
        }
    });
    return () => {
      scaleUp.kill();
    };
  }, [])
  return (
    <section ref={triggerRef} className="w-screen h-screen relative">
      <div ref={containerRef} className="w-full h-full flex items-center justify-center relative">
        <div className="absolute -z-10 top-0 left-0 w-full h-4/5 flex items-center justify-center">
          <p className="text-9xl sm:text-7xl lg:text-[16vw] font-semibold text-black/5">Contact</p>
        </div>
        <div className="container px-5 sm:px-20 xl:px-32 flex flex-col gap-10 bord2 border-teal-600">
          <div className="w-full h-fit flex justify-center">
            <p className="text-4xl sm:text-6xl lg:text-8xl font-semibold">./Contact</p>
          </div>
          <div className="w-full h-fit flex flex-wrap gap-5 items-center justify-between text-sm sm:text-xl font-semibold">
            
            <ButtonStyleVio href="mailto:medirudiantoni2+memine@gmail.com" name="medirudiantoni2@gmail.com" classDark={true} />
            <ButtonStyleVio href="https://wa.me/6281273624740" name="+62 812 7362 4740" classDark={true} />
            
          </div>
        </div>
      </div>
      <div className="absolute z-10 left-0 bottom-0 w-full h-fit bg-white dark:bg-neutral-800">
        <div className="w-full h-fit animate-marquee-normal bg-white dark:bg-neutral-800">
            <WorkTogather />
        </div>
        <div ref={divRef} className="w-full h-0 bg-violet-950"></div>
      </div>
    </section>
  );
};

export default Section1;
