import React from 'react'
import RunningText_footer from './components/RunningText'
import Button1 from '../button1/button1'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className="w-screen max-w-[1920px] min-h-screen flex flex-col justify-between bg-white relative">
      <div className="w-screen max-w-[1920px] min-h-[55%] pt-20 px-5 md:px-0 md:pt-28 bg-[#EFC900] flex items-end justify-center relative">
        <RunningText_footer />
        <div className="w-full h-5/6 flex items-center justify-center border- border-orange-700">
          <div className="container mx-auto flex flex-col justify-center border- border-red-700 relative">
            <div className="py-10 border-b-2 border-b-black">
              <div className="flex items-center gap-3">
                <div className="w-6 aspect-square bg-black"></div>
                <p className="font-semibold text-xl">Medi Rudiant</p>
              </div>
            </div>
            <div className="py-10 flex flex-wrap justify-between relative">
              <p className="text-6xl lg:text-8xl xl:text-9xl font-lexend-deca font-semibold">Reach out to me</p>
              <div className="w-fit relative bord border-teal-600">
                <div className="md:absolute bottom-0 right-0 w-fit bord border-blue-700 py-10 md:p-14">
                  <Button1 arrow="true" to='/contact' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen max-w-[1920px] h-fit border-blue-600 overflow-hidden flex items-center justify-center px-5 md:px-0">
        <div className="w-full h-full overflow-hidden flex items-end justify-center">
          <div className="container h-fit">
            <div className="w-full h-fit flex justify-between flex-wrap border-b-2 border-black pb-10">
              <div className="p-5 md:p-0 w-fit h-fit text-lg md:text-2xl">
                <p className="mb-10 break-all">
                  <a href="mailto:medirudiantoni2+memine@gmail.com">medirudiantoni2+memine@gmail.com</a>
                </p>
                <p className="font-bold mb-20">
                  <a href="https://wa.me/6281273624740">+62 812 8181 8888</a>
                </p>
              </div>
              <div className="w-full lg:w-1/4 h-fit">
                <div className="flex gap-5 justify-between text-sm md:text-lg  px-5 md:px-0">
                  <div className="">
                    <ul className='flex flex-col gap-3'>
                      <li><p className="font-semibold">Sitemap</p></li>
                      <li><Link to={'/'}>Home</Link></li>
                      <li><Link to={'/about'}>About</Link></li>
                      <li><Link to={'/projects'}>Projects</Link></li>
                      <li><Link to={'/blog'}>Blog</Link></li>
                      <li><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                  </div>
                  <div className="">
                    <ul className='flex flex-col gap-3'>
                      <li><p className="font-semibold">Socials</p></li>
                      <li><Link to={'/'}>Instagram</Link></li>
                      <li><Link to={'/about'}>Thread</Link></li>
                      <li><Link to={'/projects'}>Facebook</Link></li>
                      <li><Link to={'/blog'}>Twitter</Link></li>
                      <li><Link to={'/contact'}>Dribble</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center p-5">
              <p className="text-center text-xs md:text-base">Version: <span className="font-bold">©</span> Medi Rudiant 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer