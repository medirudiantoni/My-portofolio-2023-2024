import React, { forwardRef } from 'react'
import levelUp from '../../assets/img/icons/levelUp.png'
import checked from '../../assets/img/icons/checked.png'

const WorkTogather = forwardRef((props, ref) => {
  return (
    <div className={`w-full h-16 sm:h-24 lg:h-36 ${props.className} flex items-center`}>
        <div ref={ref} className="w-full flex gap-2 sm:gap-5 lg:gap-14 whitespace-nowrap text-xl sm:text-4xl lg:text-6xl font-semibold">
            <div className="w-fit flex gap-2 sm:gap-5 lg:gap-14 items-center flex-nowrap">
                <div className="">
                    <p>let's work together</p>
                </div>
                <div className="w-6 sm:w-10 lg:w-16">
                    <img src={props.levelUp} alt="level up" className='w-full' />
                </div>
                <div className="">
                    <p>let's improve together</p>
                </div>
                <div className="w-6 sm:w-10 lg:w-16">
                    <img src={props.checked} alt="checked" className='w-full' />
                </div>
            </div>
            <div className="w-fit flex gap-2 sm:gap-5 lg:gap-14 items-center flex-nowrap">
                <div className="">
                    <p>let's work together</p>
                </div>
                <div className="w-6 sm:w-10 lg:w-16">
                    <img src={props.levelUp} alt="level up" className='w-full' />
                </div>
                <div className="">
                    <p>let's improve together</p>
                </div>
                <div className="w-6 sm:w-10 lg:w-16">
                    <img src={props.checked} alt="checked" className='w-full' />
                </div>
            </div>
            <div className="w-fit flex gap-2 sm:gap-5 lg:gap-14 items-center flex-nowrap">
                <div className="">
                    <p>let's work together</p>
                </div>
                <div className="w-6 sm:w-10 lg:w-16">
                    <img src={props.levelUp} alt="level up" className='w-full' />
                </div>
                <div className="">
                    <p>let's improve together</p>
                </div>
                <div className="w-6 sm:w-10 lg:w-16">
                    <img src={props.checked} alt="checked" className='w-full' />
                </div>
            </div>
        </div>
    </div>
  )
})

WorkTogather.defaultProps = {
    levelUp: levelUp,
    checked: checked,
}

export default WorkTogather