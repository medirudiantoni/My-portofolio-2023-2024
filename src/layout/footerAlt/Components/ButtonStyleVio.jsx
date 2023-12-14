import React from "react";

const ButtonStyleVio = (props) => {
  return (
    <a
      href={props.href}
      className="flex max-w-fit gap-4 duration-100 items-center justify-center py-2 px-4 sm:py-4 sm:px-8 text-inherit font-medium rounded-2xl bg-violet-50 group relative hover:scale-95 overflow-hidden"
      target="_blank"
    >
      <div className="relative z-10 min-w-fit">{props.name}</div>
      <div className="w-full h-full absolute left-0 top-full rounded-2xl bg-violet-300 group-hover:top-0 duration-500 origin-left rotate-12 group-hover:rotate-0"></div>
    </a>
  );
};

export default ButtonStyleVio;
