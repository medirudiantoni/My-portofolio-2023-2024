import React from "react";

const BlogCard = ({primary, secondary, className, category, title, date, author, poster}) => {
  console.log({primary}, {secondary})
  return (
    <div style={{backgroundColor: primary}} className={`col-span-1 h-fit rounded-2xl sm:rounded-3xl relative ${className}`}>
      <div className="w-full h-fit p-6 sm:p-8 sm:pr-10 flex flex-col gap-1.5 sm:gap-2">
        <p className="text-sm">{category}</p>
        <p className="text-xl sm:text-3xl font-semibold">{title}</p>
        <p className="text-sm">{date}</p>
        <p className="text-sm">{author}</p>
      </div>
      <div style={{ backgroundColor: secondary }} className={`w-full min-h-[100px] rounded-2xl sm:rounded-3xl overflow-hidden`}>
        {poster && <div className="w-full h-fit flex overflow-hidden">
            <img src={poster} alt="sg" className="w-full h-fit object-cover" />
        </div>}
      </div>
    </div>
  );
};

export default BlogCard;
