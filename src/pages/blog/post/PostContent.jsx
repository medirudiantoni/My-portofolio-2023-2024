import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { doc, collection, getDoc } from "firebase/firestore";
import "./Post.css";
import { Link } from "react-router-dom";

const PostContent = ({ params }) => {
  const [post, setPost] = useState();
  const content = post ? post.post : null;
  const title = post ? post.title : null;
  const poster = post ? post.posterUrl : null;
  const date = post ? post.date : null;
  const category = post ? post.category : null;

  const getContent = async () => {
    const docRef = doc(db, "medirudiantoni2@gmail.com", params);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setPost(docSnap.data());
    } else {
      console.log("No such document!!!");
    }
  };
  useEffect(() => {
    getContent();
  }, []);

  useEffect(() => {
    const firstParagraf = document.querySelector("#post-content p");
    if (firstParagraf) {
      firstParagraf.classList.add("first-paragraph");
    }
  });

  return (
    <>
      <div className="w-full max-w-5xl h-fit aspect-[4/2] overflow-hidden rounded-2xl">
        <img
          id="poster"
          src={poster}
          alt="poster"
          className="w-full h-full object-cover"
        />
      </div>
      <Link to='/blog'>
        <button className="my-2 py-2 px-4 bg-slate-200 dark:bg-black rounded-lg">{'< Baxk to Blogs'}</button>
      </Link>
      <div id="blogPostInfo" className="w-full h-fit flex flex-col gap-4">
        <h1 className="text-4xl font-bold font-playfair-display lg:leading-[7vh] tracking-normal">
          {title}
        </h1>
        <div className="flex flex-col items-start gap-2">
          <p className="md:text-xl font-medium">{category}</p>
          <p className="text-sm">{date}</p>
        </div>
      </div>
      <div id="blogPostContent" className="flex flex-col gap-5">
        {post ? (
          <div
            id="post-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : null}
      </div>
    </>
  );
};

export default PostContent;
