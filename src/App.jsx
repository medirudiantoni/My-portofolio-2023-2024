import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import gsap from "gsap";
import MouseFollower from "mouse-follower";
import "./scss/index.scss";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Blog from "./pages/blog/Blog";
import Not_found from "./pages/404/Not_Found";
import { AnimatePresence } from "framer-motion";
import Nav from "./layout/nav/Nav";
import ScrollToTop from "./layout/nav/components/scrollToTop";
import ViewProject from "./pages/projects/ViewProject/ViewProject";
import Wsc from "./guide/wsc/Wsc";
import Hsc from "./guide/hsc/Hsc";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/contact";
// import Editor from "./pages/blog/article/Editor";
import TinyMce from "./pages/blog/article/TinyMce";
// import Poster from "./pages/blog/article/Poster";
import Post from "./pages/blog/post/Post";

function App() {
  const loc = useLocation();
  MouseFollower.registerGSAP(gsap);
  const cursor = new MouseFollower({});
  const [isMenu, setIsMenu] = useState();
  const setOke = (val) => {
    setIsMenu(val)
  }
  return (
    <div className="font-poppins w-screen overflow-x-hidden">
      <div className="w-full h-fit relative">
        <Nav status={val => setOke(val)} />
        <Wsc />
        <Hsc />
        <ScrollToTop />
        <main>
        <AnimatePresence mode="wait">
          <Routes location={loc} key={loc.pathname}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ViewProject />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/edit" element={<Editor />} /> */}
            <Route path="/tiny" element={<TinyMce />} />
            {/* <Route path="/poster" element={<Poster />} /> */}
            <Route path="/post" element={<Post />} />
            <Route path="/projects/*" element={<Not_found />} />
            <Route path="/*" element={<Not_found />} />
          </Routes>
        </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;
