import React, { useContext, useEffect } from 'react'
import transitionPage from '../../layout/transition/Transition'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

import Section3 from './components/Section3/Section3'
import Section4 from './components/Section4/Section4'
import Section5 from './components/Section5/Section5'
import Section6 from './components/Section6/Section6'
import Section7 from './components/Section7/Section7'
import Section8 from './components/Section8/Section8'
import FooterAlt from '../../layout/footerAlt/FooterAlt'
import { RootContext } from '../../context/RootContext'
import MyHelmet from '../../layout/helmet/MyHelmet'

const Home = () => {
  const { handleRegistRoute} = useContext(RootContext)
  useEffect(() => {
    handleRegistRoute('home')
    document.title = 'Medi Rudiant'
  }, [])
  return (
    <div className="w-full min-h-screen flex flex-col items-start justify-center bg-white dark:bg-neutral-900 dark:text-white">
      <MyHelmet title={''} />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <FooterAlt />
    </div>
  )
}

export default Home