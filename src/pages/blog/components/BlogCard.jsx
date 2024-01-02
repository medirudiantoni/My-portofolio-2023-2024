import { color } from "framer-motion";
import React from "react";
import "./BlogCard.css"

const BlogCard = ({primary, secondary, textColor, className, category, title, date, author, poster}) => {
  return (
    <div style={{backgroundColor: primary, color: textColor}} className={`blog-card col-span-1 w-full h-fit rounded-2xl sm:rounded-3xl relative ${className} hover:scale-95 duration-100 group`}>
      <div className="w-full h-fit p-6 sm:p-8 sm:pr-10 flex flex-col gap-1.5 sm:gap-2">
        <p className="text-sm">{category}</p>
        <p className="text-xl sm:text-3xl font-semibold">{title}</p>
        <p className="text-sm">{date}</p>
        <p className="text-sm">{author}</p>
      </div>
      <div style={{ backgroundColor: secondary }} className={`w-full min-h-[100px] rounded-2xl sm:rounded-3xl overflow-hidden`}>
        {poster && <div className="blog-card-poster">
            <img src={poster} alt="sg" className="w-full h-fit object-cover" />
        </div>}
      </div>
      <div className="absolute left-0 top-0 w-full h-full rounded-2xl sm:rounded-3xl hover:border-8">
      </div>
    </div>
  );
};

export default BlogCard;
