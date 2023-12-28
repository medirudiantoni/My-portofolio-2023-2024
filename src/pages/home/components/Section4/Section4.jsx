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
  const webDevContent = 'I specialize in creating engaging and user-friendly online experiences. From responsive website development to performance optimization, I focus on every detail to ensure your website is not only visually captivating but also effective in achieving your business goals.'
  const graphicDesignContent = 'Graphic design is the visual art that can enhance your brand. From memorable logos to attention-grabbing marketing materials, I work hard to create designs that reflect your unique identity and business values.'
  const androidAppContent = 'If you have a need for a responsive Android application accessible across various devices, I have experience in using technologies like Progressive Web Apps (PWA), Ionic, and Apache Cordova. With this approach, I can assist you in creating robust and reliable applications.'
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
        <div className="w-full dark:bg-violet-950">
          <div className="w-full animate-marquee-normal">
            <WorkTogather />
          </div>
        </div>
        <div className="w-full h-screen bg-primary dark:bg-primary-dark dark:text-white px-5 sm:px-20 xl:px-32 flex items-center justify-center">
          <div className="container">
            <div className="w-full h-fit py-20">
              <Expertise content={webDevContent} />
              <Expertise name="Android APP" propText={androidApp} content={androidAppContent} />
              <Expertise name="Graphic Design" propText={graphicDesign} third={true} content={graphicDesignContent} />
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