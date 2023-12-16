import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { doc, collection, getDoc } from "firebase/firestore";

const PostContent = () => {
  const [post, setPost] = useState();
  const content = post ? post.post : null
  const getContent = async () => {
    const docRef = doc(db, "medirudiantoni2@gmail.com", "16-december-2023, 20:27");
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
  return (
    <>
      <div className="w-full max-w-5xl aspect-[4/2] overflow-hidden rounded-2xl">
        <img
          id="poster"
          src="https://source.unsplash.com/1920x1080?nature"
          alt="poster"
          className="w-full h-full object-cover"
        />
      </div>
      <div id="blogPostInfo" className="w-full h-fit flex flex-col gap-8">
        <h1 className="text-4xl font-bold font-playfair-display leading-[7vh] tracking-normal">
          This is for Post or article Title field with big font size as a
          Heading 1 and serif font-face
        </h1>
        <div className="flex items-center gap-4">
          <p className="text-xl font-medium">Category</p>
          <div className="w-10 h-1 border-b-2 border-black"></div>
          <p>16 December 2023</p>
        </div>
      </div>
      <div id="blogPostContent" className="flex flex-col gap-5">
        {post ? <div dangerouslySetInnerHTML={{__html: content}} /> : null}
      </div>
    </>
  );
};

export default PostContent;
