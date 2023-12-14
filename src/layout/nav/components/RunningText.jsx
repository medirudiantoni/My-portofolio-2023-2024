import React, { forwardRef } from 'react'
import levelUp from '../../../assets/img/icons/levelUp.png'
import checked from '../../../assets/img/icons/checked.png'

const RunningTextNav = forwardRef((props, ref) => {
  return (
    <div className={`w-screen py-3 2xl:py-6 ${props.className} flex items-center`}>
        <div ref={ref} className="w-full flex gap-2 lg:gap-5 2xl:gap-14 whitespace-nowrap animate-marquee-normal">
            <div className="w-fit flex gap-2 lg:gap-5 2xl:gap-14 items-center flex-nowrap text-xl lg:text-4xl 2xl:text-6xl font-semibold">
                <div className="">
                    <p>let's work together</p>
                </div>
                <div className="w-6 lg:w-10 2xl:w-16">
                    <img src={props.levelUp} alt="level up" className='w-full' />
                </div>
                <div className="">
                    <p>let's improve together</p>
                </div>
                <div className="w-6 lg:w-10 2xl:w-16">
                    <img src={props.checked} alt="checked" className='w-full' />
                </div>
            </div>
            <div className="w-fit flex gap-2 lg:gap-5 2xl:gap-14 items-center flex-nowrap text-xl lg:text-4xl 2xl:text-6xl font-semibold">
                <div className="">
                    <p>let's work together</p>
                </div>
                <div className="w-6 lg:w-10 2xl:w-16">
                    <img src={props.levelUp} alt="level up" className='w-full' />
                </div>
                <div className="">
                    <p>let's improve together</p>
                </div>
                <div className="w-6 lg:w-10 2xl:w-16">
                    <img src={props.checked} alt="checked" className='w-full' />
                </div>
            </div>
            <div className="w-fit flex gap-2 lg:gap-5 2xl:gap-14 items-center flex-nowrap text-xl lg:text-4xl 2xl:text-6xl font-semibold">
                <div className="">
                    <p>let's work together</p>
                </div>
                <div className="w-6 lg:w-10 2xl:w-16">
                    <img src={props.levelUp} alt="level up" className='w-full' />
                </div>
                <div className="">
                    <p>let's improve together</p>
                </div>
                <div className="w-6 lg:w-10 2xl:w-16">
                    <img src={props.checked} alt="checked" className='w-full' />
                </div>
            </div>
        </div>
    </div>
  )
})

RunningTextNav.defaultProps = {
    className: 'bg-white text-black',
    levelUp: levelUp,
    checked: checked,
}

export default RunningTextNav