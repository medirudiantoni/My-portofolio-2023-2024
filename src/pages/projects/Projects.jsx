import React, { useEffect, useContext } from "react";
import transitionPage from "../../layout/transition/Transition";
import ProjectSection_1 from "./sections/ProjectSection_1/ProjectSection_1";
import ProjectSection_2 from "./sections/ProjectSection_2/ProjectSection_2";
import Footer from "../../layout/footer/Footer";
import FooterAlt from "../../layout/footerAlt/FooterAlt";
import { RootContext } from '../../context/RootContext'

const Projects = () => {
  const {handleRegistRoute} = useContext(RootContext)
  useEffect(() => {
    handleRegistRoute('contact')
  }, [])
  useEffect(() => {
    document.title = 'Work - Medi Rudiant'
  })
  return (
    <div className="w-screen max-w-[1920px] min-h-screen">
      <ProjectSection_1 />
      <ProjectSection_2 />
      <FooterAlt />
    </div>
  );
};

export default transitionPage(Projects);


