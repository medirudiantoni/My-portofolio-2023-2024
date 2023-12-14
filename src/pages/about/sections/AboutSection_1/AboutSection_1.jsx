import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import mediSg from '../../../../assets/img/me/medi-sg.jpg'
import mediSgMask from '../../../../assets/img/me/medi-sg-mask.png'
import RunningText from './components/RunningText'
import AboutLine from './components/LineAnimation/AboutLine'

const AboutSection_1 = () => {
  const triggerRef = useRef(null)
  const wrapperImgRef = useRef(null)
  const text1Ref = useRef(null)
  const text2Ref = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useEffect(()=>{
    const imgScaleY = gsap.fromTo(wrapperImgRef.current, {
        height: '50vh',
    }, {
        height: '100vh',
        scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
        }
    });
    const imgShrink = gsap.fromTo(wrapperImgRef.current, {
        height: '100vh',
    }, {
        height: '50vh',
        scrollTrigger: {
            trigger: triggerRef.current,
            start: "1 top",
            end: "bottom top",
            scrub: true,
        }
    });
    const textMoveX1 = gsap.to(text1Ref.current, {
        x: 1000,
        scrollTrigger: {
            trigger: "top top",
            end: "bottom top",
            scrub: 4,
        }
    })
    const textMoveX2 = gsap.to(text2Ref.current, {
        x: 1000,
        scrollTrigger: {
            trigger: "top top",
            end: "bottom top",
            scrub: 4,
        }
    })
    return () => {
        imgScaleY.kill()
        imgShrink.kill()
    };
  }, [])
  return (
    <section ref={triggerRef} className="w-screen min-h-screen relative">
        <div className="w-screen h-screen relative">
            <div className="w-screen h-1/2 border-green-400 flex items-end justify-center">
                <div ref={text1Ref} className="container px-5 sm:px-20 xl:px-32 lg:px-0 w-full h-fit py-8">
                    <p className="text-6xl sm:text-7xl lg:text-9xl font-bold mb-2">Medi Rudiant.</p>
                    <p className="sm:text-xl lg:text-2xl">frontend website developer & Visual/graphic design enthisiast</p>
                </div>
            </div>
            <div ref={wrapperImgRef} className="w-screen h-1/2 absolute left-0 bottom-0 flex border-red-600 overflow-hidden">
                <div className="w-screen h-screen absolute left-0 bottom-0">
                    <div className="w-screen h-1/2 border-orange-600 flex items-end justify-center text-violet-600">
                        <div ref={text2Ref} className="container px-5 sm:px-20 xl:px-32 lg:px-0 w-full h-fit py-8">
                            <p className="text-6xl sm:text-7xl lg:text-9xl font-bold mb-2">Medi Rudiant.</p>
                            <p className="sm:text-xl lg:text-2xl">frontend website developer & Visual/graphic design enthisiast</p>
                        </div>
                    </div>
                </div>
                <img src={mediSg} alt="" className='w-full h-full object-cover object-center' />
                <img src={mediSgMask} alt="" className='absolute z-40 top-0 left-0 w-full h-full object-cover object-center' />
            </div>
            <div className="absolute z-50 left-0 bottom-0 w-screen h-fit">
                <RunningText />
            </div>
        </div>
    </section>
  )
}

export default AboutSection_1