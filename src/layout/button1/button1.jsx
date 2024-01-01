import React, { useRef, useEffect } from "react";
import "./button1.css";
import Magnetic from "../magnetic";
import { Link } from "react-router-dom";
import arrowLinkBlack from '../../assets/img/icons/arrowLinkBlack.png'

const Button1 = (props) => {
  const itemHover = useRef(null);
  const bgHover = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const itemHoverRect = itemHover.current.getBoundingClientRect();
      const x = e.clientX - itemHoverRect.left;
      const y = e.clientY - itemHoverRect.top;

      bgHover.current.style.transform = `translate(-50%, -50%)`;
      bgHover.current.style.left = `${x}px`;
      bgHover.current.style.top = `${y}px`;
    };

    if (itemHover.current) {
      itemHover.current.addEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <Magnetic>
      <Link to={props.to}>
      <div
        data-cursor="-hidden"
        ref={itemHover}
        className={`itemHover2 group ${props.className}`}
      >
        <div ref={bgHover} className="bgHover rounded-full w-fit h-fit absolute">
          <div className=""></div>
        </div>
        <Magnetic>
          <div className="text-sm sm:text-lg lg:text-xl font-poppins font-[500] cursor-pointer text-black group group-hover:text-white duration-100">{
            props.arrow === 'true' ? <div className="w-fit border-red-700">
                <div className="w-16 aspect-square relative flex items-center justify-center -rotate-45 scale-[0.6] lg:scale-100">
                  <div className="w-full h-2 bg-black group-hover:bg-white duration-100 rounded-xl"></div>
                  <div className="w-1/2 h-2 bg-black group-hover:bg-white duration-100 rounded-xl absolute rotate-45 origin-right right-0 translate-y-0.5"></div>
                  <div className="w-1/2 h-2 bg-black group-hover:bg-white duration-100 rounded-xl absolute -rotate-45 origin-right right-0 -translate-y-0.5"></div>
                </div>
              </div> : props.name
          }{
            props.toggle === 'true' ? 
            <div className='w-8 aspect-video relative flex flex-col items-end justify-between'>
                <div className="w-full h-[3px] bg-black group-hover:bg-white"></div>
                <div className="w-1/2 h-[3px] bg-black group-hover:bg-white"></div>
            </div> : null
          } </div>
          <div className="w-full aspect-square absolute -top-10 left-0 group-hover:scale-[3]"></div>
        </Magnetic>
      </div>
      </Link>
    </Magnetic>
  );
};

Button1.defaultProps = {
    name: "Click me",
    to: "/",
    className: "bg-gray-200"
}

export default Button1;
