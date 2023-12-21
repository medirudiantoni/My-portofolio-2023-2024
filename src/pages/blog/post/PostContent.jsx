import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { doc, collection, getDoc } from "firebase/firestore";
import "./Post.css"

const PostContent = ({params}) => {
  const [post, setPost] = useState();
  const content = post ? post.post : null;
  const title = post ? post.title : null;
  const poster = post ? post.posterUrl : null;
  const date = post ? post.date : null;
  const category = post ? post.category : null;
  
  const getContent = async () => {
    const docRef = doc(db, "medirudiantoni2@gmail.com", params);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
      setPost(docSnap.data())
    } else {
      console.log("No such document!!!")
    }
  }
  useEffect(() => {
    getContent()
  }, [])
  
  useEffect(() => {
    const firstParagraf = document.querySelector('#post-content p')
    if(firstParagraf){
      firstParagraf.classList.add('first-paragraph');
    }
  })

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
      <div id="blogPostInfo" className="w-full h-fit flex flex-col gap-8">
        <h1 className="text-4xl font-bold font-playfair-display lg:leading-[7vh] tracking-normal">
          {title}
        </h1>
        <div className="flex items-center gap-4">
          <p className="text-xl font-medium">{category}</p>
          <div className="w-10 h-1 border-b-2 border-black"></div>
          <p>{date}</p>
        </div>
      </div>
      <div id="blogPostContent" className="flex flex-col gap-5">
        {post ? <div id="post-content" dangerouslySetInnerHTML={{__html: content}} /> : null}
      </div>
    </>
  );
};

export default PostContent;
