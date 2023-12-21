import React, { useEffect, useState } from "react";
import PostContent from "./PostContent";
import PostComment from "./PostComment";
import FooterAlt from "../../../layout/footerAlt/FooterAlt";
import { useParams } from "react-router";
import transitionPage from "../../../layout/transition/Transition";
import PostContextProvider from "./postContext";
import Footer from "../../../layout/footer/Footer";

const Post = () => {
  const [isFooter, setIsFooter] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsFooter(true);
    }, 1000);
  }, [isFooter]);
  const { postId } = useParams();
  console.log(postId);
  return (
    <PostContextProvider>
      <div className="w-screen min-h-screen relative">
        <div className="w-full h-fit flex flex-col items-center gap-20 relative px-5 pt-28 pb-40">
          <div className="w-full h-fit max-w-5xl flex flex-col gap-20 relative">
            <PostContent params={postId} />
            <div className="w-full h-fit flex gap-3 text-6xl tracking-widest">
              ***
            </div>
            <PostComment postId={postId} />
          </div>
        </div>
      </div>
      <Footer />
    </PostContextProvider>
  );
};

export default transitionPage(Post);
