// import React, { useRef, useState } from "react";
// import { database, storage } from "../../../config/firebase";
// import { ref as storageRef } from "firebase/storage";
// import { ref, set } from "firebase/database";
// import { v4 as uuidv4 } from "uuid";
// import { Editor as TinyMCEEditor } from "@tinymce/tinymce-react";

// const Editor = () => {
//   const [title, setTitle] = useState("");
//   const [post, setPost] = useState("");
//   const [poster, setPoster] = useState("");
//   const [imageUpload, setImageUpload] = useState("");
//   const [linkPoster, setLinkPoster] = useState("");
//   const [category, setCategory] = useState("");
//   const [progress, setProgress] = useState(0);
//   const editorRef = useRef(null);
//   const posterInputRef = useRef(null);

//   const writePost = async (postData) => {
//     const db = database;
//     const postId = uuidv4();
//     await set(ref(db, `blogs/${postId}`), {
//       post: postData,
//       linkPoster: linkPoster,
//       category: category,
//     });

//     setTitle("");
//     setPost("");
//     setPoster("");
//     setLinkPoster("");
//     setCategory("");
//   };

//   const uploadImage = () => {

//   }

//   const setBlogPost = () => {
//     if (editorRef.current) {
//       writePost(editorRef.current.getContent());
//     }
//   };

//   return (
//     <div className="w-screen min-h-screen lg:h-screen relative">
//       <div className="w-full min-h-screen lg:h-screen py-10 lg:pt-20">
//         <div className="container px-5 sm:px-10 lg:px-20 mx-auto h-fit flex justify-center">
//           <div className="w-full">
//             <div className="mb-6 pb-1 border-b-2 border-slate-800 text-center text-2xl font-semibold">
//               <p>Welcome to blog editor</p>
//             </div>
//             <form className="bord2 border-orange-600 grid lg:gap-16 grid-cols-6">
//               <div className="col-span-6 lg:col-span-2 flex flex-col justify-between">
//                 <div className="">
//                   <label htmlFor="category">Category</label>
//                   <input
//                     type="text"
//                     name="category"
//                     id="category"
//                     placeholder="insert your blog category"
//                     className="w-full h-fit py-2 px-4 border-2 rounded-xl mt-2 mb-5"
//                     value={category}
//                     onChange={(e) => setCategory(e.target.value)}
//                   />
//                   <label htmlFor="poster">Poster</label>
//                   <input
//                     ref={posterInputRef}
//                     type="file"
//                     name="poster"
//                     id="poster"
//                     placeholder="insert your blog poster"
//                     className="w-full h-fit py-2 px-4 border-2 rounded-xl mt-2 mb-5"
//                     // value={poster}
//                   />
//                   <label htmlFor="linkPoster">Gunakan link untuk poster</label>
//                   <input
//                     type="text"
//                     name="linkPoster"
//                     id="linkPoster"
//                     placeholder="insert your blog linkPoster"
//                     className="w-full h-fit py-2 px-4 border-2 rounded-xl mt-2 mb-5"
//                     value={linkPoster}
//                     onChange={(e) => setLinkPoster(e.target.value)}
//                   />
//                 </div>
//                 <div className="hidden lg:inline-block">
//                   <button
//                     type="button"
//                     className="w-fit h-fit py-2 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"
//                     onClick={setBlogPost}
//                   >
//                     Publish
//                   </button>
//                 </div>
//               </div>
//               <div className="col-span-6 lg:col-span-4 h-fit mt-7">
//                 <TinyMCEEditor
//                   apiKey="a2npaeni1zb6syl93slh8wg31847c5kavqak3y8gk45ctioy"
//                   onInit={(evt, editor) => (editorRef.current = editor)}
//                   value={post}
//                   init={{
//                     height: 500,
//                     menubar: true,
//                     plugins: [
//                       "advlist",
//                       "autolink",
//                       "lists",
//                       "link",
//                       "image",
//                       "charmap",
//                       "preview",
//                       "anchor",
//                       "searchreplace",
//                       "visualblocks",
//                       "code",
//                       "fullscreen",
//                       "insertdatetime",
//                       "media",
//                       "table",
//                       "code",
//                       "help",
//                       "wordcount",
//                     ],
//                     toolbar:
//                       "undo redo | fontsize " +
//                       "bold italic forecolor | alignleft aligncenter " +
//                       "alignright alignjustify | bullist numlist outdent indent | " +
//                       "removeformat | help",
//                     fontsize_formats:
//                       "8px 10px 12px 14px 18px 24px 36px 40px 44px 48px 52px 56px 60px 64px 68px 72px 76px 80px 84px 88px 92px",
//                     content_style:
//                       "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
//                     font_family_formats:
//                       "Lexend=lexend,sans-serif;Lexend Deca=lexend+deca,sans-serif;Poppins=poppins,sans-serif",
//                   }}
//                 />
//               </div>
//             </form>
//             <div className="w-full pt-5 lg:hidden">
//               <button
//                 type="button"
//                 className="w-full flex justify-center h-fit py-2 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"
//                 onClick={setBlogPost}
//               >
//                 Publish
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Editor;
