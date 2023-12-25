import React, { useContext } from "react";
import { RootContext } from "../../../context/RootContext";

const Section2 = () => {
  const {blogPosts} = useContext(RootContext)
  const blogPostsArray = Array.from(blogPosts ? blogPosts : false)
  return (
    <section className="w-screen h-fit relative">
      <div className={`w-full px-2 sm:px-5 h-fit flex justify-center`}>
        <div className="w-full px-10 sm:px-20 xl:px-12 py-6 sm:py-[5vh] bg-gray-300 dark:bg-neutral-800 rounded-3xl sm:rounded-[30px] relative overflow-hidden">
          <div className="w-full h-fit flex gap-5 items-center sm:text-lg font-medium">
            <div className="">
              <p>Number of blogs: {blogPostsArray.length - 1}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
