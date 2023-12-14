import React from 'react'
import transitionPage from '../../layout/transition/Transition'
import AboutSection_1 from './sections/AboutSection_1/AboutSection_1'
import AboutSection_2 from './sections/AboutSection_2/AboutSection_2'
import AboutSection_3 from './sections/AboutSection_3/AboutSection_3'
import FooterAlt from '../../layout/footerAlt/FooterAlt'

const About = () => {

  return (
    <div className="w-screen min-h-screen">
      <AboutSection_1 />
      <AboutSection_2 />
      <AboutSection_3 />
      <FooterAlt />
    </div>
  )
}

export default transitionPage(About)