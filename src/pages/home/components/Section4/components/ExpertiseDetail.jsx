import React from 'react';
import { motion } from 'framer-motion';
import crossSmall from '../../../../../../public/assets/images/icons/cross-small.png'

const ExpertiseDetail = ({onClick, title, text}) => {
  return (
    <motion.div 
    initial={{ y: '100vh' }}
    animate={{ y: '0vh' }}
    exit={{ y: '100vh' }}
    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
    className="fixed z-[950] left-0 bottom-0 w-screen h-[90vh] px-2 lg:px-5 lg:flex lg:items-end lg:justify-center">
        <div className="w-full lg:w-1/2 h-full rounded-t-xl bg-slate-200 text-black dark:bg-neutral-900 dark:text-white relative px-5 lg:px-10 py-10">
            <button onClick={onClick} className="absolute top-2 right-2 lg:top-5 lg:right-5 cursor-pointer w-10 p-2 aspect-square rounded-full bg-violet-700 active:bg-violet-950">
                <img src={crossSmall} alt="x" className='w-full h-full object-cover' />
            </button>
            <div className="container mx-auto h-full overflow-y-scroll md:overflow-y-auto">
                <p className="text-xl lg:text-2xl font-semibold mb-2">{title}</p>
                <p className="text-sm lg:text-base">{text}</p>
            </div>
        </div>
    </motion.div>
  )
}

export default ExpertiseDetail