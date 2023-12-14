import React from "react";

const Arrow = () => {
  return (
    <div className="w-8 h-8 -rotate-45 relative flex items-center">
      <div className="w-full h-1 bg-white rounded-lg"></div>
      <div className="w-1/2 h-1 bg-white rounded-lg absolute right-[1px] origin-right rotate-45"></div>
      <div className="w-1/2 h-1 bg-white rounded-lg absolute right-[1px] origin-right -rotate-45"></div>
    </div>
  );
};

export default Arrow;
