import React, { useEffect, useState } from 'react'
import transitionPage from '../../layout/transition/Transition'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'
import Section3 from './Sections/Section3'
import FooterAlt from '../../layout/footerAlt/FooterAlt'

const Blog = () => {
  const [isFooter, setIsFooter] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsFooter(true)
    }, 1000);
  })
  return (
    <div className="w-screen min-h-screen">
      <Section1 />
      <Section2 />
      <Section3 />
      {isFooter && <FooterAlt />}
    </div>
  )
}

export default transitionPage(Blog)