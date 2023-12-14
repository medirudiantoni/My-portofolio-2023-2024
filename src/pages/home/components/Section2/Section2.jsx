import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Medi_2023 from "../../../../layout/medi2023/Medi_2023";
import Button1 from "../../../../layout/button1/button1";

const Section2 = () => {
  const triggerRef = useRef(null);
  const containerRef = useRef(null);
  const medi2023 = useRef(null);
  const circleButton = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const shrink = gsap.fromTo(
      containerRef.current,
      {
        scaleX: "100%",
        scaleY: "100%",
        borderRadius: "0px",
      },
      {
        scaleX: "90%",
        scaleY: "90%",
        borderRadius: "120px",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "500 top",
          end: "1400 top",
          scrub: true,
        },
      }
    );
    const transY1 = gsap.to(medi2023.current, {
      y: -600,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 4,
        pin: true,
      },
    });
    const transY2 = gsap.to(circleButton.current, {
      y: -500,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 4,
      },
    });
    return () => {
      shrink.kill();
      transY1.kill();
      transY2.kill();
    };
  }, []);
  return (
    <section className="w-full min-h-screen ovn relative">
      <div ref={triggerRef} className="w-full h-screen relative">
        <div
          ref={containerRef}
          className="w-full h-full flex items-center justify-center bg-[#7752FE] text-white relative"
        >
          <div className="w-full hover:container hover:px-5 md:hover:px-32 h-fit bord2 relative flex items-center cursor-pointer group duration-200">
            <div className="absolute -top-20 sm:-top-36 left-5 sm:left-20 w-fit rotate-[135deg]">
              <p className="text-6xl sm:text-9xl">👆</p>
            </div>
            <div className="flex whitespace-nowrap group-hover:whitespace-normal text-sm sm:text-xl 2xl:text-2xl leading-[24px] sm:leading-[30px] 2xl:leading-[36px]">
              <p className="animate-marquee-slow group-hover:animate-none duration-200">
                Starting from my enthusiasm for UI/UX design, I often spend my
                time observing and appreciating the beauty of other people's
                design work showcased on Pinterest. Eventually, I decided to
                take on the role of a front-end website developer with the aim
                of bringing this beauty to life through dynamic interactions,
                not just static images. Thus, my goal is not only to please the
                eye but also to enhance the interactive experience on websites
                by using animations and micro interactions.
              </p>
              <p className="animate-marquee-slow group-hover:animate-none group-hover:hidden">
                Starting from my enthusiasm for UI/UX design, I often spend my
                time observing and appreciating the beauty of other people's
                design work showcased on Pinterest. Eventually, I decided to
                take on the role of a front-end website developer with the aim
                of bringing this beauty to life through dynamic interactions,
                not just static images. Thus, my goal is not only to please the
                eye but also to enhance the interactive experience on websites
                by using animations and micro interactions.
              </p>
            </div>
          </div>
        </div>
        <div ref={medi2023} className="absolute -bottom-44 sm:-bottom-32 -left-20 rotate-3">
          <Medi_2023 />
        </div>
        <div ref={circleButton} className="absolute -bottom-32 sm:-bottom-10 right-[10vw]">
          <Button1 />
        </div>
      </div>
    </section>
  );
};

export default Section2;
