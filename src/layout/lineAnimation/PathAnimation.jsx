import React, { useEffect, useState } from "react";

const PathAnimation = (props) => {
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
        (svgWrapper.scrollHeight - document.documentElement.clientHeight);

      const newDrawLength = pathLength - pathLength * scrollPercentage;
      setDrawLength(newDrawLength);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="line-container border-8 border-blue-600 absolute z-10 top-[80vh] sm:top-0 left-0 w-[500vw] sm:w-[200vw] md:w-screen h-full">
      <svg
        className="inline-block"
        viewBox="0 0 1920 6526"
        fill="none"
        preserveAspectRatio="xMidYMax meet"
      >
        {isSmallScreen ? (
          <path
            d="M351.499 0.5C366.832 10.3333 397.299 49.3 396.499 126.5C395.499 223 193.499 251.5 191.999 385.5C190.499 519.5 344.999 472 348.999 394.5C352.999 317 268 290 264 408.5C260 527 415 541 417.5 723C420 905 229 942 193 942C157 942 137 845.5 232 876.5C327 907.5 321.5 1077.5 320.5 1175.5C319.5 1273.5 430.499 1234 417.5 1197C404.5 1160 226.499 1293.5 193 1234.5C159.5 1175.5 284 1172.5 338.5 1313C393 1453.5 462.5 1378 434 1345.5C405.5 1313 232.999 1560.5 193 1569.5C153 1578.5 160 1534 180.5 1528.5C201 1523 193 1881.5 193 1953.5C193 2025.5 227 1992 223 1960C219 1928 152 1958 152 1903.5C152 1849 269.5 1933 268 2063C266.5 2193 397 2171 408.5 2123.5C420 2076 341.5 2127.5 241 2265.5C140.5 2403.5 126.5 2265.5 180.5 2265.5C234.5 2265.5 385.501 2408.5 408.5 2348C431.5 2287.5 336.999 2327.5 302.5 2366C268 2404.5 200.001 2515 180.5 2458.5C161 2402 340.501 2567.5 408.5 2571C476.5 2574.5 546.5 2550 542.5 2474C538.5 2398 453.5 2363 384 2458.5C314.5 2554 325.001 2684 268 2764C211 2844 173 2860.5 149.5 2837.5C126 2814.5 224 2787.5 322 2915C420 3042.5 475.499 3045 513.999 3011.5C552.499 2978 500.498 2909.5 454.499 2938C408.5 2966.5 421.998 3131.5 344.999 3170C268 3208.5 156.499 3183 177.499 3143C198.499 3103 230.499 3144.5 232.999 3210C235.499 3275.5 377.499 3243.5 392.999 3286C408.499 3328.5 201.499 3309 189.499 3354C177.499 3399 379.999 3468 400.499 3429C420.999 3390 383.999 3352.5 352.999 3387.5C322 3422.5 322 3717.5 322 3773C322 3828.5 365.499 3839.5 375.999 3792C386.499 3744.5 306.499 3709.5 241.999 3758.5C177.499 3807.5 177.499 3926 177.499 3994.5C177.499 4063 258.499 4114.5 329.499 4123.5C400.499 4132.5 407.999 4146 321.999 4140.5C235.999 4135 184.499 4157 277.499 4187C370.499 4217 393.499 4270 395.499 4288.5C397.499 4307 423.999 4319 432.999 4294C441.999 4269 388.999 4277.5 357.499 4294C325.999 4310.5 253.499 4355.5 235.999 4322C218.499 4288.5 275.999 4299 293.999 4318C311.999 4337 327.499 4506 365.499 4519C403.499 4532 415.999 4517 413.499 4493.5C410.999 4470 360.499 4641 302.499 4623C244.499 4605 332.499 4587 357.499 4605C382.499 4623 399.999 4674 432.499 4693.5C464.999 4713 529.499 4646.5 462.999 4668C396.499 4689.5 323.499 4906 95.9992 4895.5C-131.501 4885 115.499 4802 154.499 4874.5C185.699 4932.5 370.833 4965.67 459.5 4975"
            stroke="#ffffff"
            strokeWidth="2"
            style={{
              strokeDashoffset: drawLength,
            }}
          />
        ) : (
          <path
            d="M1135 0.5C1183.5 15.6667 1269.7 70.9 1226.5 170.5C1172.5 295 404.5 556 234.5 523C64.5003 490 285 257.5 463 743C641 1228.5 853 1216 940 1116.5C1027 1017 612.5 1055 463 1316C313.5 1577 250 1570.5 197 1564.5C99.7937 1553.5 6.00027 1407.5 429.5 1486C853 1564.5 1266.5 2062 1568 2068.5C1869.5 2075 1641 1704 1435.5 2022C1230 2340 1229.34 2745.72 1121 2671.5C1003.5 2591 1313.23 2592.91 1582 2681.5C1806.5 2755.5 1822.95 2397.86 1664.5 2588C1464.5 2828 722 3215 819.5 2973.5C865.836 2858.73 1288.5 2944.5 1582 3071.5C1723.47 3132.72 1972 3065 1763.5 3035C1555 3005 1121.5 3432 816.5 3551.5C511.5 3671 168 3571.5 376.5 3442.5C585.001 3313.5 555.501 4194 326.5 3945.5C101.922 3701.8 1089.5 4315 1006.5 4132.5C871.673 3836.04 799 4675.5 205 4507.5C-19.0726 4444.13 222.552 4754.44 326.5 4638C443 4507.5 -287.5 4917.5 -267.5 5090C-247.5 5262.5 -209.5 7864 -286 8013C-362.5 8162 -549.499 7923.5 -198.499 7926.5C152.501 7929.5 928.001 7926.5 987.501 7926.5C1047 7926.5 1120 7844.5 1055 7864.5C990 7884.5 965.5 8008.5 882 8031.5C798.5 8054.5 847.501 7991 958.501 7989.5C1047.3 7988.3 1837.17 7989 2221 7989.5"
            stroke="#999999"
            strokeWidth="2"
            style={{
              strokeDashoffset: drawLength,
            }}
          />
        )}
      </svg>
    </div>
  );
};

export default PathAnimation;
