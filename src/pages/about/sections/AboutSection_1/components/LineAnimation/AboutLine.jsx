import React from 'react'
import AboutPath from './AboutPath'

const AboutLine = () => {
  return (
    <div id='lineWrapper' className="absolute z-20 top-[50vh] left-0 w-screen h-[500vh] overflow-hidden md:overflow-visible border-teal-600">
        <AboutPath trigger="lineWrapper" />
    </div>
  )
}

export default AboutLine