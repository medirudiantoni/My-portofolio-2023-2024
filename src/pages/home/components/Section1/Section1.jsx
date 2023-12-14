import React, { useEffect, useState } from 'react'
import Text from './components/Text'
import ImgSide from './components/ImgSide'

const Section1 = () => {
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
    <section className={`w-full px-5 sm:px-10 lg:px-20 ${ vh <= 595 ? 'xl:px-[40vh]' : 'xl:px-36' } xl:mt-0 min-h-screen ${ vh >= 1081 ? 'lg:min-h-fit duration-200' : '' } py-[10vh] items-center flex justify-center bord2 border-orange-600`}>
        <div className="container h-fit lg:h-full bord2 border-yellow-600 grid gap-10 lg:gap-0 grid-cols-1 lg:grid-cols-2">
            <Text />
            <ImgSide />
        </div>
      </section>
  )
}

export default Section1