import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Medi_2023 from '../medi2023/Medi_2023';
import ButtonStyleVio from './Components/ButtonStyleVio';
import Button1 from '../button1/button1';

const FooterAlt = () => {
  const [vw, setVw] = useState(window.innerWidth)
  const [vh, setVh] = useState(window.innerWidth)
  const triggerRef = useRef(null);
  const divRef = useRef(null);
  const divRef2 = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(()=>{
    const scaleDown = gsap.fromTo(divRef.current, {
        height: "100vh",
    }, {
        height: "60vh",
        scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
        }
    });
    const scaleUp = gsap.fromTo(divRef2.current, {
        height: "0vh",
    }, {
        height: "40vh",
        scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
        }
    });
    window.addEventListener('resize', () => setVw(window.innerWidth));
    window.addEventListener('resize', () => setVh(window.innerHeight));
    return () => {
        scaleDown.kill();
        scaleUp.kill();
        window.removeEventListener('resize', () => setVw(window.innerWidth));
        window.removeEventListener('resize', () => setVh(window.innerHeight));
    }
  }, []);
  return (
    <section className="w-screen min-h-screen relative bord2 p-0 border-red-600">
        <div ref={triggerRef} className="w-full h-screen relative p-0">
            <div ref={divRef} className="w-full h-0 bg-[#EFC900] bord2 border-teal-600">
                <Medi_2023 className="bg-[#222]" />
                <div className="w-full h-5/6 flex items-center justify-center bord2 border-red-600">
                    <div className="container px-5 sm:px-20 xl:px-32 h-fit bord2 relative border-violet-600">
                        <div className="w-full h-full flex items-center absolute left-0 top-0 sm:px-20 xl:px-32 bord2 border-red-600">
                            <div className="w-full h-[50vh] relative bord2 border-blue-600 flex items-center">
                                <div className={`w-fit flex h-fit items-center justify-center absolute z-20 right-1 lg:right-5 scale-90 -bottom-[9vh] md:bottom-0 bord2 lg:top-[10%] xl:top-[6%] ${ vw >= 1549 ? '2xl:top-[16%]' : ''}`}>
                                    <Button1 arrow="true" to='/contact' />
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex items-center gap-1.5 sm:gap-4 bord2 border-orange-600">
                            <div className="w-3 sm:w-6 aspect-square bg-black"></div>
                            <p className="sm:text-xl font-semibold">Medi Rudiant</p>
                        </div>
                        <div className="w-full h-0 my-[2.5vh] xl:my-[5vh] border-b sm:border-b-2 border-black"></div>
                        <div className="w-full bord2 border-blue-600">
                            <p className={`text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold `}>Reach out to me</p>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={divRef2} className="w-full h-0 bg-white bord2 border-orange-600 relative">
                <div className="w-full h-full relative flex items-center justify-center overflow-hidden bord2 border-violet-100">
                    <div className="container px-5 sm:px-20 xl:px-32">
                        <div className="w-full flex gap-4 justify-between flex-wrap text-sm lg:text-base pb-4 border-b mb-2">
                            <div className="w-fit h-fit flex flex-col gap-2 mb-5 lg:mb-0 justify-between">
                                <div className="hidden lg:block">
                                    <ButtonStyleVio href='#' name='medirudiantoni@gmail.com' />
                                </div>
                                <div className="hidden lg:block">
                                    <ButtonStyleVio href='#' name='+62 812 7362 7898' />
                                </div>
                                <div className="lg:hidden">
                                    <p className="">+62 812 7362 7898</p>
                                </div>
                                <div className="lg:hidden">
                                    <p className="">medirudiantoni@gmail.com</p>
                                </div>
                            </div>
                            <div className="w-fit h-fit">
                                <p className="font-semibold mb-2">Socials</p>
                                <div className="flex flex-wrap lg:flex-col gap-2">
                                    <p className="">Instagram</p>
                                    <p className="">Facebook</p>
                                    <p className="">Twitter</p>
                                    <p className="">Dribbble</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:text-center">
                            <p className="text-xs lg:text-base">Version: <span className="font-bold">©</span> Medi Rudiant 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FooterAlt