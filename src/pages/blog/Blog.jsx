import React from 'react'
import transitionPage from '../../layout/transition/Transition'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'
import Section3 from './Sections/Section3'
import FooterAlt from '../../layout/footerAlt/FooterAlt'

const Blog = () => {
  return (
    <div className="w-screen min-h-screen">
      <Section1 />
      <Section2 />
      <Section3 />
      <FooterAlt />
    </div>
  )
}

export default transitionPage(Blog)