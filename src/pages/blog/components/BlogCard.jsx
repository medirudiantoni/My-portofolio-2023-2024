import React from "react";

const BlogCard = (props) => {
  return (
    <div className={`col-span-1 h-fit rounded-2xl sm:rounded-3xl relative ${props.className}`}>
      <div className="w-full h-fit p-6 sm:p-8 sm:pr-10 flex flex-col gap-1.5 sm:gap-2">
        <p className="text-sm">{props.category}</p>
        <p className="text-xl sm:text-3xl font-semibold">{props.title}</p>
        <p className="text-sm">{props.date}</p>
        <p className="text-sm">{props.author}</p>
      </div>
      <div className={`w-full min-h-[100px] rounded-2xl sm:rounded-3xl overflow-hidden bg-violet-600`}>
        {props.poster && <div className="w-full h-fit flex overflow-hidden">
            <img src={props.poster} alt="sg" className="w-full h-fit object-cover" />
        </div>}
      </div>
    </div>
  );
};

BlogCard.defaultProps = {
    className: "bg-violet-400"
}

export default BlogCard;
