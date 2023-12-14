import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import mediUmy from '../../../../assets/img/me/medi-umy.jpg'

const AboutSection_2 = () => {
  const triggerRef = useRef(null)
  const imgRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  return (
    <section ref={triggerRef} className="w-screen px-5 h-fit relative">
        <div ref={imgRef} className="absolute sm:flex -right-[33%] sm:-right-[16%] -top-52 w-2/3 sm:w-1/3 h-fit overflow-hidden">
            <img src={mediUmy} alt="" className='w-full h-full object-cover object-bottom' />
        </div>
        <div className="container px-5 sm:px-20 xl:px-32 mx-auto grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 py-5">
                <p className="text-4xl font-bold text-orange-600">About me</p>
                <p className="mt-5 sm:text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis ducimus commodi aut alias rerum necessitatibus nesciunt nihil pariatur. Consequuntur consequatur optio harum molestiae, ratione voluptatem aspernatur cumque expedita eligendi!</p>
            </div>
        </div>
        <div className="container px-5 sm:px-20 xl:px-32 mx-auto min-h-[33vh] lg:min-h-[43vh] flex items-end">
            <p className="text-5xl sm:text-6xl lg:text-8xl font-semibold sm:leading-[80px] lg:leading-[120px]">Me, MySelf, <br />and Only me! 😁</p>
        </div>
    </section>
  )
}

export default AboutSection_2