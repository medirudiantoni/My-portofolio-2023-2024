import React, { useEffect, useState } from "react";
import mediAi from '../../../../../assets/img/me/medi-ai.jpg'

const ImgSide = () => {
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
    <div className={`col-span-1 order-1 lg:order-2 h-fit lg:h-full min-h-fit bord2 border-blue-600 relative flex items-center justify-center lg:justify-end text-xs sm:text-lg 2xl:text-xl`}>
      <div className={`w-full min-h-fit bord2 py-[5vh] border-orange-600 flex items-center justify-center relative ${ vh <= 738 ? 'sm:w-[70vh]' : 'sm:w-5/6 ' }`}>
        <div className="w-4/6 aspect-[3/4] p-3 rounded-full border-teal-700 border-4 sm:border-8 relative z-10">
            <div className="w-full h-full rounded-full bg-slate-400 flex overflow-hidden">
                <img src={mediAi} alt={mediAi} className="w-full h-full object-cover" />
            </div>
        </div>
        <div className={`absolute w-full h-full  bord2 border-red-700 sm:p-5 ${ vh <= 595 ? 'lg:w-[110%] lg:h-[110%]' : '' }`}>
          <div className="relative w-full h-full bord2 border-blue-600">
            <div className="absolute top-0 right-0 py-1.5 px-2 2xl:py-3 2xl:px-6 flex flex-col gap-2 items-start bg-blue-600 text-white rounded-lg rounded-tr-3xl">
                <p className="text-2xl">🎨</p>
                <p>Visual graphic <br />enthusiast</p>
            </div>
            <div className="absolute z-20 right-0 bottom-0 py-1.5 px-2 2xl:py-3 2xl:px-6 flex flex-col gap-0.5 items-start bg-white/5 backdrop-blur-lg rounded-lg">
                <p>me {'>'}</p>
                <p className="font-medium">Medi Rudiant</p>
            </div>
            <div className="absolute z-20 top-2 left-0 sm:left-5 py-1.5 px-2 2xl:py-3 2xl:px-6 flex gap-2 items-center bg-violet-600 text-white rounded-lg rounded-tl-2xl rounded-br-2xl">
                <p className="text-3xl font-semibold text-orange-400">O</p>
                <p className="font-medium">Oosthavent</p>
            </div>
            <div className="absolute bottom-0 left-0 flex flex-col items-start">
                <div className="py-1.5 px-2 2xl:py-3 2xl:px-6 rounded-md rounded-bl-2xl bg-slate-300 font-medium">Indonesia 🗺️</div>
                <div className="py-1.5 px-2 2xl:py-3 2xl:px-6 rounded-md rounded-tl-2xl bg-orange-600 text-white">📌 Lampung</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgSide;
