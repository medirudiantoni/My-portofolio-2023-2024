import React from 'react'
import PathAnimation from './PathAnimation'

const LineAnimation = () => {
  return (
    <div id='objectTest' className="absolute z-10 top-[1050vh] lg:top-[1250vh] xl:top-[1100vh] left-0 w-screen h-[500vh] overflow-hidden md:overflow-visible border-teal-600">
        <PathAnimation trigger="objectTest" />
    </div>
  )
}

export default LineAnimation