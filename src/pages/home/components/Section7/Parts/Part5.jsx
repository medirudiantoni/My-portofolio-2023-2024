import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Part5 = () => {
  const triggerRef = useRef(null);
  const divRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const transy = gsap.fromTo(divRef.current, {
        y: 100,
    }, {
        y: 0,
        scrollTrigger: {
            trigger: triggerRef.current,
            start: "top bottom",
            end: "top top",
            scrub: true,
            pin: true,
        }
    });
    return () => transy.kill();
  }, [])
  return (
    <div className="w-screen h-0 bord2 border-orange-500 relative">
        <div ref={triggerRef} className="w-screen h-screen bord2 border-teal-600 absolute left-0 bottom-full">
            <div ref={divRef} className="w-screen h-[40vh] absolute left-0 bottom-full flex items-center justify-center">
                <div className="container px-5 sm:px-20 xl:px-32">
                    <p className="my-story-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-macondo text-white text-center break-words">
                        Together, we weave a dramatic yet beautiful journey and reach a happy ending.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Part5