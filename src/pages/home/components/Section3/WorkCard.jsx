import React, { forwardRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  arror45degSVG,
  smallLongArrowSVG,
} from "../../../../layout/icons/icons";
import valeeqa from "../../../../assets/img/works/valeeqa.png";

export const KeepScrollDown = () => {
  const [vh, setVh] = useState(window.innerHeight);
  useEffect(()=>{
    window.addEventListener('resize', () => setVh(window.innerHeight));
    return () => window.removeEventListener('resize', () => setVh(window.innerHeight));
  },[])
  return (
    <div className={`w-[200px] md:w-[300px] ${ vh <= 739 ? '2xl:w-[45vh] lg:w-[45vh]' : ' 2xl:w-[400px]' } aspect-[3/4] rounded-[24px] sm:rounded-[50px] flex overflow-hidden`}>
      <div className="w-full h-1/2 rounded-[24px] sm:rounded-[50px] bg-[#7752FE] text-white p-6 md:p-7 lg:p-8">
        <div className="w-full h-full relative">
          <div className="absolute right-0 bottom-0 w-[60px] aspect-square flex">
            <div className="scale-50 2xl:scale-100 w-full origin-bottom-right">
              {arror45degSVG}
            </div>
          </div>
          <div className="w-1/6 aspect-square flex flex-col">
            <div className="w-1/2 aspect-square bg-white self-end"></div>
            <div className="w-1/2 aspect-square bg-white"></div>
          </div>
          <div className="w-full h-4/5 flex items-center font-[500] md:text-2xl 2xl:text-4xl">
            <p>
              Keep scrolling <br />
              down
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MoreProjects = () => {
  const [vh, setVh] = useState(window.innerHeight);
  useEffect(()=>{
    window.addEventListener('resize', () => setVh(window.innerHeight));
    return () => window.removeEventListener('resize', () => setVh(window.innerHeight));
  },[])
  return (
    <div className="">
      <div className={`w-[200px] md:w-[300px] ${ vh <= 739 ? '2xl:w-[45vh] lg:w-[45vh]' : '2xl:w-[400px]' } aspect-[3/4] rounded-[24px] sm:rounded-[50px] flex overflow-hidden bg-[#7752fe] text-white md:text-2xl 2xl:text-4xl font-[500] 2xl:leading-[50px] p-7 md:p-8 2xl:p-10`}>
        <div className="w-full h-full flex flex-col justify-between">
          <Link to={"/projects"}>
            <div className="w-full group">
              <p className="mb-4 lg:mb-6">
                More <br />
                projects
              </p>
              <div className="group-hover:translate-x-10 duration-300 origin-left scale-50 2xl:scale-100">
                {smallLongArrowSVG}
              </div>
            </div>
          </Link>
          <div className="">
            <p className="text-end">
              Keep <br />
              scrolling <br />
              down
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const WorkCard = forwardRef((props, ref) => {
  const [vh, setVh] = useState(window.innerHeight);
  useEffect(()=>{
    window.addEventListener('resize', () => setVh(window.innerHeight));
    return () => window.removeEventListener('resize', () => setVh(window.innerHeight));
  },[])
  return (
    <div className="">
      <Link to={`/projects/${props.to}`}>
        <div
          data-cursor-text="View project"
          className={`w-[200px] md:w-[300px] ${ vh <= 739 ? '2xl:w-[45vh] lg:w-[45vh]' : '2xl:w-[400px] ' } aspect-[3/4] relative rounded-[24px] sm:rounded-[50px] bg-blue-600 flex overflow-hidden hover:scale-95 group duration-200`}
        >
          <div
            ref={ref}
            className="bg-gray-400 w-[300px] md:w-[450px] 2xl:w-[600px] h-full absolute top-0 right-0 group-hover:scale-125 duration-200"
          >
            <img
              src={props.image}
              alt={props.image}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </Link>
      <h4 className="mt-5 pl-5 lg:pl-10 md:text-lg lg:text-xl font-semibold">
        {props.name}
      </h4>
    </div>
  );
});

WorkCard.defaultProps = {
  image: valeeqa,
  name: "Website",
};

export default WorkCard;
