import React, { forwardRef, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const SvgImage = forwardRef((props, ref) => {
  const svgRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger)
  useEffect(()=>{
    const svgAnimate = gsap.to(svgRef.current, {
        attr: {
          r: 800,
        },
        duration: 2,
        scrollTrigger: {
          trigger: props.trigger,
          start: "top top",
          end: "bottom top",
          pin: true,
          toggleActions: "play none none reverse",
        },
      });
      const svgBlur = gsap.to(props.blur, {
        filter: "blur(50px)",
        duration: 1,
        scrollTrigger: {
          trigger: props.trigger,
          start: "200 top",
          end: "600 top",
          toggleActions: "play none none reverse",
        }
      })
      return () => {
        svgAnimate.kill();
        svgBlur.kill();
      };
  }, [])
  return (
    <svg
      viewBox="0 0 1920 2080"
      fill="none"
      preserveAspectRatio="xMidYMin slice"
      className="w-full h-full border-red-700"
    >
      <defs>
        <filter id="displacementFilter2">
          <feTurbulence
            className="feTurbulence"
            type="fractalNoise"
            baseFrequency="0.01"
            numOctaves="1"
            result="noise"
          />
          <feDisplacementMap
            className="feDisplacementMap"
            in="SourceGraphic"
            in2="noise"
            scale="200"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <mask id={props.id}>
          <circle
            cx="50%"
            cy="50%"
            r="0"
            fill="white"
            ref={svgRef}
            className="displacement"
            style={{ filter: "url(#displacementFilter2)" }}
          />
        </mask>
      </defs>
      <image
        xlinkHref={props.image}
        width="100%"
        height="100%"
        mask={`url(#${props.id})`}
        style={{ filter: "url(#noise)" }}
      />
    </svg>
  );
});

export default SvgImage;
