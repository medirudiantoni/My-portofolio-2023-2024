import React, { useEffect, useState } from "react";

const AboutPath = (props) => {
  const [drawLength, setDrawLength] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);
  const [isEnter, setIsEnter] = useState(false);

  useEffect(() => {
    // responsive start
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    // responsive end

    const svgWrapper = document.getElementById(props.trigger);
    const path = document.querySelector("path");
    const pathLength = path.getTotalLength();

    let svgWrapperTop = svgWrapper.getBoundingClientRect();

    path.style.strokeDasharray = pathLength;
    setDrawLength(pathLength);

    const observer = new IntersectionObserver((entries) => {
      let entry = entries[0];
      setIsEnter(entry.isIntersecting);
    });

    observer.observe(svgWrapper);

    const handleScroll = () => {
      const scrollPercentage =
        (document.documentElement.scrollTop - svgWrapperTop.top) /
        (svgWrapper.scrollHeight);

      const newDrawLength = pathLength - pathLength * scrollPercentage * 2;
      setDrawLength(newDrawLength);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="line-container absolute z-10 top-[80vh] sm:top-0 left-0 w-[500vw] sm:w-[200vw] md:w-screen h-full">
      <svg
        className="inline-block"
        viewBox="0 0 4175 1155"
        fill="none"
        preserveAspectRatio="xMidYMax meet"
      >
        <path
          d="M40 1115C1232.75 998.804 1461.77 356.313 1340.99 136.706C1237.04 -52.3132 872.75 40.1492 840.172 375.618C807.595 711.087 1296 903.005 2090.27 853.559C2602.05 821.699 2834.81 673.583 2929.04 522.095C3147.05 171.651 2813.55 -17.8187 2743.25 330.678C2663.79 724.546 2998.75 810.432 3427.97 760.057C3776.45 719.158 4029.56 412.199 4135 286.633"
          stroke="url(#paint0_linear_322_15)"
          stroke-width="80"
          stroke-linecap="round"
          style={{
            strokeDashoffset: drawLength,
          }}
        />
        <defs>
          <linearGradient
            id="paint0_linear_322_15"
            x1="4045.32"
            y1="113.66"
            x2="65.8111"
            y2="1069.19"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#7752FE" />
            <stop offset="1" stop-color="#0BB8C4" />
          </linearGradient>
        </defs>
      </svg>
      ;
    </div>
  );
};

export default AboutPath;
