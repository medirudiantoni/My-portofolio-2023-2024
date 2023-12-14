import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const SvgFilter = () => {
  const turbulenceRef = useRef(null)
  const displacementMapRef = useRef(null)

  useEffect(() => {
    const tls = gsap.timeline();

    tls.to(turbulenceRef.current, {
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "none",
      attr: {
        baseFrequency: 0.03,
      },
    });
    tls.to(
      displacementMapRef.current,
      {
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "none",
        attr: {
          scale: 15,
        },
      },
      0
    );
  }, [])
  return (
    <div className="absolute left-0 top-0">
      <svg className="absolute">
        <defs>
          <filter id="noise" x="0%" y="0%" width="110%" height="110%">
            <feTurbulence
              ref={turbulenceRef}
              type="fractalNoise"
              baseFrequency="0.009 0.005"
              result="noise"
              numOctaves="1"
              id="turbulence"
            />
            <feDisplacementMap
              ref={displacementMapRef}
              in="SourceGraphic"
              in2="noise"
              scale="20"
              xChannelSelector="R"
              yChannelSelector="G"
            ></feDisplacementMap>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default SvgFilter;
