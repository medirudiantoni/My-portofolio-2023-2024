import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Button1 from '../../../../layout/button1/button1';
import medi from '../../../../assets/img/me/medi-3.jpg'
import medi3cutout from '../../../../assets/img/me/medi3cutout.png'

const Section5Content = () => {
  const triggerRef = useRef(null);
  const divRef = useRef(null);
  const imgRef = useRef(null);
  const containerRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger);
  useEffect(()=>{
    const scaleY = gsap.fromTo(divRef.current, {
      height: "0vh",
    }, {
      height: "100vh",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
        pin: true,
      }
    });
    const tween = gsap.fromTo(containerRef.current, {
      rotate: 0
    }, {
      rotate: 0,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "1 bottom",
        end: "top top",
        scrub: true,
        pin: true,
      }
    })
    const transMinX = gsap.to('.section5-text', {
      x: -1000,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 4,
      }
    });
    return () => {
      scaleY.kill();
      transMinX.kill();
      tween.kill();
    }
  })
  return (
    <div ref={triggerRef} className="w-screen h-screen relative">
      <div className="w-full h-full relative">
        <div className="w-full h-full absolute left-0 bottom-full bg-slate-200 dark:bg-negative">
          <div ref={divRef} className="w-full h-full bg-slate-300 dark:bg-neutral-800 flex items-center justify-center px-5 sm:px-20 xl:px-32 overflow-hidden">
            <div ref={containerRef} className="container flex items-center justify-center relative">
              <div className="w-4/6 md:w-2/5 h-fit rounded-3xl overflow-hidden relative z-10">
                <img src={medi} alt={medi} className='w-full h-full object-cover' />
              </div>
              <div className="w-4/6 md:w-2/5 h-fit rounded-3xl overflow-hidden absolute z-30">
                <img src={medi3cutout} alt={medi3cutout} className='w-full h-full object-cover' />
              </div>
              <div className="section5-text absolute w-screen h-fit whitespace-nowrap text-transparent z-20">
                <div className="h-full w-fit flex gap-10">
                  <p className="text-7xl md:text-9xl font-semibold font-outline-2 dark:font-outline-2-slate-200">Togather, We can change the future</p>
                  <p className="text-7xl md:text-9xl font-semibold font-outline-2 dark:font-outline-2-slate-200">Togather, We can change the future</p>
                </div>
              </div>
              <div className="section5-text absolute w-screen h-fit whitespace-nowrap text-[#222] dark:text-white">
                <div className="h-full w-fit flex gap-10">
                  <p className="text-7xl md:text-9xl font-semibold font-outline-2 dark:font-outline-2-slate-200">Togather, We can change the future</p>
                  <p className="text-7xl md:text-9xl font-semibold font-outline-2 dark:font-outline-2-slate-200">Togather, We can change the future</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section5Content