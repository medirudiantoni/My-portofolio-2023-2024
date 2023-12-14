import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import storyAlt1 from "../../../../../assets/img/story/storyAlt1.png";

const Part4 = () => {
  const triggerRef = useRef(null)
  const containerRef = useRef(null)
  const imageWrapperRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger);
  useEffect(()=>{
    const growUp = gsap.fromTo(containerRef.current, {
      height: "0vh",
    }, {
      height: "100vh",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      }
    });

    const shrinkDown = gsap.fromTo(imageWrapperRef.current, {
      height: "100%"
    }, {
      height: "60%",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "1 top",
        end: "2000 top",
        scrub: true,
        pin: true,
      }
    })

    return () => {
      growUp.kill();
      shrinkDown.kill();
    }
  }, [])
  return (
    <div ref={triggerRef} className="w-full bord2 h-screen relative">
      <div ref={containerRef} className="w-full bord2 h-0 absolute z-10 left-0 bottom-0 overflow-hidden">
        <div className="w-full bord2 h-full border-teal-400 relative">
          <div id='the-end' ref={imageWrapperRef} className="w-full bord2 h-[100%] bg-slate-800 relative">
            <img src={storyAlt1} alt="story end" className='w-full h-full object-cover object-center' style={{filter: 'url(#noise)'}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Part4