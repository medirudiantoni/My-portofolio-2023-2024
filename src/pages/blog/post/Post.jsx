import React from "react";
import PostContent from "./PostContent";
import PostComment from "./PostComment";
import FooterAlt from "../../../layout/footerAlt/FooterAlt";

const Post = () => {
  return (
    <div className="w-screen min-h-screen relative">
      <div className="w-full h-fit flex flex-col items-center gap-20 relative pt-28 pb-40">
        <div className="w-full max-w-5xl flex flex-col gap-20 relative">
          <PostContent />
          <div className="w-full flex gap-3 text-6xl tracking-widest">***</div>
          <PostComment />
        </div>
      </div>
      <FooterAlt />
    </div>
  );
};

export default Post;
