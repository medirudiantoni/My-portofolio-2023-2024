import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

const Section6Contents = () => {
  const triggerRef = useRef(null)
  const svgRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger);
  useEffect(()=>{
    const tween = gsap.to(svgRef.current, {
        attr: {
            r: 2000,
        },
        scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 2,
            pin: true,
        }
    });
    return () => tween.kill();
  }, [])
  return (
    <div className="w-screen h-0 bg-slate-300 relative">
        <div ref={triggerRef} className="w-full h-screen absolute left-0 bottom-full flex items-center justify-center border- border-red-700">
            <svg viewBox="0 0 1920 1080" fill="none" preserveAspectRatio='xMidYMin slice' className="h-full xl:h-full xl:w-full absolute bottom-0 z-[-2]">
              <defs>
                <filter id="displacementFilter">
                  <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="0.1" result='noise' />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="200" xChannelSelector="R" yChannelSelector="G" />
                </filter>
                <mask id='circleMask'>
                  <circle cx="950" cy="1000" r="0" fill='white' ref={svgRef} className='displacement' style={{filter: 'url(#displacementFilter)'}} />
                </mask>
              </defs>
              <rect width="100%" height="100%" fill="#222" mask="url(#circleMask)"/>
            </svg>
        </div>
    </div>
  )
}

export default Section6Contents