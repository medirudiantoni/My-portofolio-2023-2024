import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Expertise from './components/Expertise'
import WorkTogather from '../../../../layout/WorkTogather/WorkTogather';
import levelUp from '../../../../assets/img/icons/levelUp_white.png';
import checked from '../../../../assets/img/icons/checked_white.png';

const Section4 = () => {
  const androidApp = ['Javascript', 'Firebase', 'PWA', 'Apache Cordova'];
  const graphicDesign = ['Adobe Illustrator', 'Figma', 'Canva 😁'];
  const triggerRef = useRef(null);
  const divRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(()=>{
    const scaleUp = gsap.fromTo(divRef.current, {
      height: "0vh"
    }, {
      height: "100vh",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "bottom bottom",
        end: "bottom top",
        scrub: true,
        pin: true,
      }
    });
    return () => {
      scaleUp.kill()
    }
  },[])
  return (
    <section className='w-full min-h-screen relative bord2 border-black'>
      <div ref={triggerRef} className="w-full min-h-screen relative">
        <div className="w-full animate-marquee-normal">
          <WorkTogather />
        </div>
        <div className="w-full h-screen bg-violet-600 text-white px-5 sm:px-20 xl:px-32 flex items-center justify-center">
          <div className="container">
            <div className="w-full h-fit py-20">
              <Expertise />
              <Expertise name="Android APP" text={androidApp} />
              <Expertise name="Graphic Design" text={graphicDesign} third={true} />
            </div>
          </div>
        </div>
        <div ref={divRef} className="w-full h-0 absolute left-0 bottom-0 overflow-hidden">
          <div className="w-full h-screen bg-violet-800"></div>
        </div>
      </div>
    </section>
  )
}

export default Section4