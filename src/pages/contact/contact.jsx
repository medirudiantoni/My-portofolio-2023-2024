import React, { useContext, useEffect } from 'react'
import transitionPage from '../../layout/transition/Transition'
import Section1 from './sections/section1'
import Section2 from './sections/section2'
import Medi_2023 from '../../layout/medi2023/Medi_2023'
import { RootContext } from '../../context/RootContext'

const Contact = () => {
  const {handleRegistRoute} = useContext(RootContext)
  useEffect(() => {
    handleRegistRoute('contact')
    document.title = 'Contact - Medi Rudiant'
  }, [])
  return (
    <div className="w-screen min-h-screen relative">
      <Section1 />
      <Section2 />
      <div className="w-screen h-fit bg-[#222]">
        <Medi_2023 />
      </div>
    </div>
  )
}

export default transitionPage(Contact)