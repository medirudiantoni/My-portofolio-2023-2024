import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

const Footer = () => {
  const triggerRef = useRef(null);
  const divRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
//   useEffect(()=>{
//     const scaleY1 = gsap.fromTo(divRef.current, {
//         height: "100%",
//     }, {
//         height: "50%",
//         scrollTrigger: {
//             trigger: triggerRef.current,
//             start: "top top",
//             end: "bottom top",
//             scrub: true,
//             pin: true,
//             markers: true
//         }
//     });
//     return () => {
//         scaleY1.kill();
//     }
//   }, [])
  return (
    <div ref={triggerRef} className="w-full h-full relative border-2 border-teal-500">
        <div ref={divRef} className="absolute left-0 top-0 w-full h-full bg-blue-600 border-2 border-orange-600"></div>
    </div>
  )
}

export default Footer