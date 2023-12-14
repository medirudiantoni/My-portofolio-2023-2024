import React from 'react'
import story2 from '../../../../../assets/img/story/story2.jpg'
import SvgImage from './SvgImage'

const Part2 = () => {
  return (
    <div id='story2' className="w-screen h-screen bord2 relative">
      <div className="w-full h-screen bord2 border-teal-500 absolute left-0 bottom-1/2">
        <div id="story-image-2" className="w-full h-full flex items-center justify-center">
          <div className="container h-fit">
            <div className="relative w-full lg:w-1/2 aspect-square -translate-y-1/3 lg:translate-x-0 lg:translate-y-0 bord2 border-orange-500">
              <SvgImage trigger="#story-image-2" id="circleMask3" image={story2} blur="#story2" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen bord2 border-blue-500 absolute left-0 top-1/2">
        <div className="w-full h-full flex items-center justify-center">
          <div className="container px-5 sm:px-20 xl:px-32 bord2 h-full lg:h-fit flex items-end justify-end">
              <div className="w-full lg:w-4/6 bord2 border-yellow-500 my-[16vh] sm:my-[8vh] lg:my-0">
                  <p className="my-story-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-macondo text-white break-words lg:text-end">
                    in the midst there are storms and challenging terrain, which is why we need the help of others.
                  </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Part2