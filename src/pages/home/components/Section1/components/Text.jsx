import React, { useEffect, useState } from 'react'

const Text = () => {
  const [vw, setVw] = useState(window.innerWidth)
  const [vh, setVh] = useState(window.innerHeight)
  useEffect(() => {
    const inwidth = () => {
      setVw(window.innerWidth)
    }
    const inHeight = () => {
      setVh(window.innerHeight)
    }
    window.addEventListener('resize', inwidth)
    window.addEventListener('resize', inHeight)
    return () => {
      window.removeEventListener('resize', inwidth)
      window.removeEventListener('resize', inHeight)
    }
  })
  return (
    <div className="col-span-1 order-2 lg:order-1 lg:h-full bord border-green-600 flex items-start lg:items-center lg:py-10">
        <div className="w-full min-h-fit bord border-blue-600">
            <div className={`flex flex-col sm:gap-2 items-start sm:text-5xl whitespace-nowrap font-semibold leading-[1.2] mb-10 ${ vh <= 739 ? ' xl:text-[10vh]' : 'xl:text-7xl' }`} style={{fontSize: `${vw <= 640 ? vw / 10 - 3 : null}px`}}>
                <div className="">{'['}</div>
                <div className="pl-10">"Designing 🎉",</div>
                <div className="pl-10">"🧑‍💻 Coding",</div>
                <div className="pl-10">"& Deploying"</div>
                <div className="">{'];'}</div>
            </div>
            <div className={` bg-[#EFC900] text-lg font-[500] tracking-tighter ${ vh <= 595 ? "xl:text-base py-5 px-9 rounded-3xl" : "xl:text-xl xl:leading-[34px] py-7 px-12 rounded-[40px]" }`}>
                <p>Designing pages with unique and responsive interfaces, coding in an ideal way, and building trust with maximum and satisfying result.</p>
            </div>
        </div>
    </div>
  )
}

export default Text