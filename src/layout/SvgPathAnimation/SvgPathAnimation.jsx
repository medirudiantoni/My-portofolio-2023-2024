import React, { useEffect, useRef, useState } from "react";
import { gsap, Power3 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Svg700Alt2, Svg900Alt } from "./svgAlt";
// import './SvgPathAnimation.css'

const SvgPathAnimation = () => {
  const [vw, setVw] = useState(window.innerWidth);
  const [vh, setVh] = useState(window.innerWidth);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const path = document.getElementById("animatedPath");
    const pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    gsap.to(path, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top", 
        end: "5500 top", 
        scrub: 8, 
      },
    });
    
    window.addEventListener('resize', () => setVw(window.innerWidth));
    window.addEventListener('resize', () => setVh(window.innerHeight));
    return () => {
        window.removeEventListener('resize', () => setVw(window.innerWidth));
        window.removeEventListener('resize', () => setVh(window.innerHeight));
    }
  });
  return (
    <div className="w-screen max-w-[1920px] hidden bord2 border-blue-600 h-[650vh] xl:flex items-center justify-center relative">
      <div
        id="triggerPath"
        ref={triggerRef}
        className="absolute border-red-600 z-50 w-full h-full top-0 bord2 origin-top flex justify-center items-start"
        style={{transform: vw <= 1280 ? "rotateY(50deg)" : vw <= 640 ? "rotateY(75deg)" : "rotateY(0deg)"}}
      >
        {vh <= 900 ? <svg
          width="1421" height="100%" viewBox="0 0 1421 100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0"
        >
          <path id="animatedPath" d="M1023.53 0C1076.23 50.1279 1150.02 178.469 1023.53 290.808C865.413 431.233 370.627 672.743 163.634 644.858C-43.3579 616.972 213.013 398.866 311.272 697.143C409.531 995.421 297.307 1387.32 128.72 1436.61C-39.8662 1485.91 50.9112 1138.34 384.593 1173.69C718.274 1209.05 949.707 1643.76 1149.72 1675.14C1349.73 1706.51 1391.62 1534.71 1251.47 1548.65C1111.31 1562.6 928.758 1940.55 732.24 1961.96C535.722 1983.37 761.093 1731.5 1041 2030.5C1508.61 2530 1557.22 2064.67 1149.72 2229C742.216 2393.33 15.9968 2845.34 286.334 2876.71C556.671 2908.08 637.473 2900.61 528.739 2823.93C420.006 2747.24 177.501 3314.5 54.0007 3284.5C-76.9954 3252.68 54.0008 3077.95 265 3284.5C444.061 3459.78 991.645 3762.92 1135.75 3640.58C1282.5 3516 955.5 3578 663 3735C403.597 3874.24 54.0007 3981.59 54.0007 3856C54.0007 3740.5 363.5 3838.5 644.455 4138C910.852 4421.98 1219 4472.5 1435 4383" stroke="#999999" strokeWidth="2"/>
        </svg> : <Svg700Alt2 /> }
      </div>
    </div>
  );
};

export default SvgPathAnimation;
