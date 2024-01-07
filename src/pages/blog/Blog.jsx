import React, { useEffect, useState, useContext } from 'react'
import transitionPage from '../../layout/transition/Transition'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'
import Section3 from './Sections/Section3'
import FooterAlt from '../../layout/footerAlt/FooterAlt'
import { RootContext } from '../../context/RootContext'
import MyHelmet from '../../layout/helmet/MyHelmet'

const Blog = () => {
  const [isFooter, setIsFooter] = useState(false);
  const {handleRegistRoute} = useContext(RootContext)
  useEffect(() => {
    handleRegistRoute('blog')
  }, [])
  useEffect(() => {
    setTimeout(() => {
      setIsFooter(true)
    }, 1000);
  })
  return (
    <div className="w-screen min-h-screen">
      <MyHelmet title={' | Blog'} keyword={'blog medi rudiant'} />
      <Section1 />
      <Section2 />
      <Section3 />
      {isFooter && <FooterAlt />}
    </div>
  )
}

export default transitionPage(Blog)