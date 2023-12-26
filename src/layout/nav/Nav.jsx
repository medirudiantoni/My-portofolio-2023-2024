import React, { useContext, useEffect, useState } from 'react'
import Menu from './components/Menu'
import { AnimatePresence } from 'framer-motion'
import { RootContext } from '../../context/RootContext'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  const {currentRoute} = useContext(RootContext)
  const [isMenu, setIsMenu] = useState(false)
  useEffect(() => {
    if(isMenu){
      setTimeout(() => {
        document.body.style.overflowY = 'hidden'
      }, 1000)
      props.status(true)
    } else {
      setTimeout(() => {
        document.body.style.overflowY = 'scroll'
      }, 1000)
      props.status(false)
    }
  })
  
  return (
    <nav className='relative lg:absolute z-[1000] top-0 left-0 w-full h-fit py-5 px-4 sm:py-[5vh] sm:px-10 flex items-center justify-between'>
        <div className={`text-lg sm:text-xl font-semibold font-poppins block dark:text-white ${ currentRoute === "home" ? 'text-transparent dark:text-transparent lg:text-black' : '' }`}><Link to={'/'}>Medi Rudiant.</Link></div>
        <div className={`sm:text-lg cursor-pointer py-2 px-4 sm:rounded-lg sm:bg-white/400 duration-100 group backdrop-blur-lg fixed top-4 right-2 sm:top-[4vh] sm:right-6 z-[1100] overflow-hidden`} onClick={() => {
          setIsMenu(!isMenu)
          }}>
          <div className="absolute top-0 left-0 w-full h-full rounded-lg translate-y-full group-hover:rotate-0 group-hover:translate-y-0 duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)] origin-left bg-violet-300 dark:bg-primary"></div>
          <div className={`font-semibold sm:font-medium relative z-20 duration-100 dark:text-white ${isMenu ? 'text-white' : 'text-black'}`}>
            { isMenu ? 'Close' : 'Menu' }
          </div>
        </div>
        <AnimatePresence>
            {isMenu && <Menu onClickItem={() => setTimeout(() => {{
              setIsMenu(!isMenu)
              }}, 250)} />}
        </AnimatePresence>
    </nav>
  )
}

export default Nav