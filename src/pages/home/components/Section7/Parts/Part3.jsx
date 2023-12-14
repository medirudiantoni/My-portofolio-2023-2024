import React from 'react'
import SvgImage from './SvgImage'
import story3 from "../../../../../assets/img/story/story3.jpg"

const Part3 = () => {
  return (
    <div id='story3' className="w-screen min-h-screen bord2 relative">
        <div className="w-full h-screen bord2 border-teal-600">
            <div id="image-story-3" className="w-full h-full flex items-center justify-center">
                <div className="container h-fit flex justify-end">
                    <div className="relative w-full lg:w-1/2 aspect-square -translate-y-1/3 lg:translate-x-0 lg:translate-y-0 bord2 border-orange-200">
                      <SvgImage trigger="#image-story-3" id="circleMask4" image={story3} blur="#story3" />
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full h-screen flex items-center justify-center relative z-10 bord2 border-blue-600">
            <div className="container px-5 sm:px-20 xl:px-32 bord2 h-full lg:h-fit flex items-end lg:items-start">
                <div className="w-full lg:w-4/6 bord2 border-yellow-500 my-[16vh] sm:my-[8vh] lg:my-0">
                    <p className="my-story-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-macondo text-white break-words">
                        Let's unite in strength, share the burden, and lend a helping hand to lift each other up.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Part3