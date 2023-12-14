import React from 'react'
import { Line1, Line2, Line3 } from '../components/3linesSvg'

const Section1 = () => {
  return (
    <section className="w-screen h-[87.5vh] lg:h-screen flex flex-col items-start justify-end bord2 border-teal-600">
        <div className="w-full px-2 sm:px-5 h-fit py-5 flex flex-col-reverse gap-5 md:gap-0 md:flex-row justify-between bord2 border-black">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-semibold">./Blog</h1>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-semibold text-slate-200">Spiritual Oasis</h1>
        </div>
        <div className="w-full px-2 sm:px-5 h-fit flex justify-center">
            <div className="w-full px-5 sm:px-20 xl:px-28 py-16 h-fit sm:h-96 bg-[#7752FE] text-white rounded-[30px] relative overflow-hidden">
                <div className="w-full h-full absolute left-0 top-0">
                    <Line1 />
                    <Line2 />
                    <Line3 />
                </div>
                <div className="w-full h-full grid gap-5 grid-cols-1 lg:grid-cols-2 relative z-10">
                    <div className="col-span-1 bord2 border-orange-600">
                        <p className="text-4xl sm:text-6xl lg:text-8xl font-semibold">Monologue</p>
                    </div>
                    <div className="col-span-1 bord2 border-orange-600 flex items-end justify-end">
                        <p className="text-sm sm:text-lg">Only a story, complaints, history, dreams, entertainment, and opinions, assumptions, responses, social issues, international, political, religious, meditation, inner peace, and other lighthearted matters.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section1