import React, { useEffect } from 'react'
import gsap from 'gsap'
import Part1 from './Parts/Part1'
import SvgFilter from './Parts/SvgFilter'
import Part2 from './Parts/Part2'
import Part3 from './Parts/Part3'
import Part4 from './Parts/Part4'
import Part5 from './Parts/Part5'
import Part6 from './Parts/Part6'
import PathAnimation from '../../../../layout/lineAnimation/PathAnimation'
import SvgPathAnimation from '../../../../layout/SvgPathAnimation/SvgPathAnimation'

const Section7 = () => {
  useEffect(() => {
    const tls = gsap.timeline();

    tls.to(".feTurbulence", {
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "none",
      attr: {
        baseFrequency: 0.03,
      },
    });
    tls.to(
      ".feDisplacementMap",
      {
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "none",
        attr: {
          scale: 15,
        },
      },
      0
    );
  }, [])
  return (
    <section id='section7' className="w-screen min-h-screen bg-[#222] relative">
      {/* <SvgPathAnimation /> */}
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
      <SvgFilter />
    </section>
  )
}

export default Section7