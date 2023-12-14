import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import deadpool from '../../../../assets/img/bg/deadpool.gif'

const ProjectSection_1 = () => {
  return (
    <section className='w-full h-screen overflow-hidden border-teal-600'>
        <div className="w-full h-full px-5 flex items-center justify-center">
            <div className="container sm:px-20 xl:px-32 relative grid grid-cols-1 lg:grid-cols-2">
                <div className="col-span-1 flex items-center border-orange-600">
                    <div className="">
                        <div className="relative mb-8 left-0 w-[240px] sm:w-[300px] xl:w-[400px] aspect-[3/2.2] rounded-full bg-slate-400 flex overflow-hidden">
                            <img src={deadpool} alt="deadpool" className='w-full h-full object-cover object-center scale-[1.35]' />
                        </div>
                        <p className="text-3xl sm:text-5xl 2xl:text-7xl font-semibold sm:leading-[80px] relative z-10">Maximum Effort</p>
                    </div>
                </div>
                <div className="col-span-1 border-red-600 flex items-end pt-10">
                    <p className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-semibold text-slate-300">./Projects -  Works</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProjectSection_1