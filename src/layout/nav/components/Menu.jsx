import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import Arrow from './Arrow'
import checked from '../../../assets/img/icons/checked.png'
import levelUp from '../../../assets/img/icons/levelUp.png'
import moonStars from '../../../assets/img/icons/moonStars.png'
import brightness from '../../../assets/img/icons/brightness.png'
import moonStarsWhite from '../../../assets/img/icons/moonStarsWhite.png'
import brightnessWhite from '../../../assets/img/icons/brightnessWhite.png'
import RunningTextNav from './RunningText';
import { borderBottom, menuSlide, slideText } from './animNav';
import { RootContext } from '../../../context/RootContext';

const Menu = (props) => {
  const {isDarkMode, handleDarkModeToggle} = useContext(RootContext);
  const [vh, setVh] = useState(window.innerHeight);
  const menus = ['Home', 'About', 'Projects', 'blog', 'Contact'];
  const socials = [
    { name: 'Instagram', url: 'https://www.instagram.com/oosthavent/' },
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100071443454995' },
    { name: 'Twitter', url: 'https://twitter.com/medi_rudiant89' },
    { name: 'Dribbble', url: 'https://dribbble.com/medi89' },
  ];

  useEffect(()=>{
    const inHeight = () => {
        setVh(window.innerHeight);
    }
    window.addEventListener('resize', inHeight);
    return () => window.removeEventListener('resize', inHeight)
  })

  return (
    <motion.div 
    variants={menuSlide}
    initial="initial"
    animate="enter"
    exit="exit"
    className={`w-screen h-screen fixed top-0 left-0 bg-primary dark:bg-primary-dark text-white flex flex-col items-center justify-end`}>

    <div className="container h-[78.5%] bord2 border-orange-400 flex justify-end px-5 lg:px-20 pb-[6vh] md:pb-10">
      <div className="w-full xl:w-4/6 h-full bord2 border-red-600 flex flex-col-reverse md:flex-row gap-5 justify-between">
        <div className="w-full md:w-2/6 h-fit md:h-full bord2 border-green-400 flex flex-wrap items-end md:items-start md:flex-col justify-between text-[2vh]">
          <div className="">
            <div className="mb-[1.5vh] md:mb-[5.5vh] text-[2.5vh] font-semibold text-white/70"><p>Socials</p></div>
            <div className="w-full h-fit flex flex-row md:flex-col gap-3">
              {socials.map((social, i) => {
                return <a href={social.url} key={i}><div className="w-full hover:text-blue-200">{social.name}</div></a>
              })}
            </div>
          </div>
          <div className="md:mb-10 mt-5 md:mt-0 flex flex-col gap-2">
            <p className='hidden md:inline-block'>Dark mode :</p>
            <div onClick={() => handleDarkModeToggle(!isDarkMode)} className="flex p-1 gap-2 justify-between rounded-full border-2 relative group cursor-pointer hover:bg-violet-800 duration-100 active:scale-95">
              <div className={`absolute w-8 h-8 rounded-full bg-slate-200 top-1 duration-150 left-1 ${isDarkMode ? 'translate-x-10' : ''}`}></div>
              <div className={`w-8 h-8 rounded-full p-1.5 relative z-10`}>
                <img src={isDarkMode ? brightnessWhite : brightness} alt="d" className={`w-full h-full object-cover`} />
              </div>
              <div className={`w-8 h-8 rounded-full p-1.5 relative z-10`}>
                <img src={isDarkMode ? moonStars : moonStarsWhite} alt="d" className={`w-full h-full object-cover`} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/6 h-full bord2 border-yellow-400">
          <div className="mb-[1.5vh] md:mb-[2vh] text-[2.5vh] font-semibold text-white/70"><p>Sitemap</p></div>
          <div className={`w-full h-fit text-[4vh] ${ vh >= 1080 ? 'md:text-5xl' : 'md:text-[5vh]' } bord`}>
            {menus.map((menu, i)=> {
              return (
                <Link to={menu === 'Home' ? '/' : `/${menu}`} key={i}>
                  <div className="w-full py-[1.5vh] md:py-[2.4vh] relative flex items-center pr-5 font-semibold overflow-hidden group hover:bg-violet-900 dark:hover:bg-violet-950 hover:pl-5 duration-200"  onClick={props.onClickItem}>
                    <motion.div 
                    variants={slideText}
                    initial="initial"
                    animate={slideText.enter(i)}
                    exit={slideText.exit(i)}
                    className="w-full flex items-center justify-between">
                        <p>{menu}</p>
                        <div className="scale-50 md:scale-90">
                          <Arrow />
                        </div>
                    </motion.div>
                    <motion.div 
                    variants={borderBottom}
                    initial="initial"
                    animate={borderBottom.enter(i)}
                    exit={borderBottom.exit(i)}
                    className="absolute top-0 left-0 w-full h-full border-b-2 border-white"></motion.div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

      </div>
    </div>

    <div className={`w-full h-[10vh] bg-white text-black text-[4vh] ${ vh >= 1080 ? 'md:text-5xl' : 'md:text-[5vh]' } font-semibold flex items-center whitespace-nowrap`}>
      <div className="flex items-center gap-2 h-fit w-fit animate-marquee-normal ">
        <div className="flex items-center gap-4 bord2 border-red-600 px-2">
          <p>Let's work togather</p>
          <div className="w-[7vh] h-[7vh] flex">
            <img src={checked} alt="" className='w-full object-cover' />
          </div>
        </div>
        <div className="flex items-center gap-4 bord2 border-red-600 px-2">
          <p>Let's improve togather</p>
          <div className="w-[6vh] h-[6vh] flex">
            <img src={levelUp} alt="" className='w-full object-cover' />
          </div>
        </div>
        <div className="flex items-center gap-4 bord2 border-red-600 px-2">
          <p>Let's work togather</p>
          <div className="w-[7vh] h-[7vh] flex">
            <img src={checked} alt="" className='w-full object-cover' />
          </div>
        </div>
        <div className="flex items-center gap-4 bord2 border-red-600 px-2">
          <p>Let's improve togather</p>
          <div className="w-[6vh] h-[6vh] flex">
            <img src={levelUp} alt="" className='w-full object-cover' />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 h-fit w-fit animate-marquee-normal ">
        <div className="flex items-center gap-4 bord2 border-red-600 px-2">
          <p>Let's work togather</p>
          <div className="w-[7vh] h-[7vh] flex">
            <img src={checked} alt="" className='w-full object-cover' />
          </div>
        </div>
        <div className="flex items-center gap-4 bord2 border-red-600 px-2">
          <p>Let's improve togather</p>
          <div className="w-[6vh] h-[6vh] flex">
            <img src={levelUp} alt="" className='w-full object-cover' />
          </div>
        </div>
        <div className="flex items-center gap-4 bord2 border-red-600 px-2">
          <p>Let's work togather</p>
          <div className="w-[7vh] h-[7vh] flex">
            <img src={checked} alt="" className='w-full object-cover' />
          </div>
        </div>
        <div className="flex items-center gap-4 bord2 border-red-600 px-2">
          <p>Let's improve togather</p>
          <div className="w-[6vh] h-[6vh] flex">
            <img src={levelUp} alt="" className='w-full object-cover' />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
  )
}

export default Menu