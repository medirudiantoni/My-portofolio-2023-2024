import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
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
import Building1 from "./Building/Building1";
import transitionPage from "./layout/transition/Transition";
import { RootContext } from "./context/RootContext";
import Preloader from "./layout/Preloader/Preloader";
import MyHelmet from "./layout/helmet/MyHelmet";
import AssetChecker from "./layout/Preloader/AssetsChecker";

const Homepage = transitionPage(Home);

function App() {
  const { isDarkMode, handleFalseFirstLoad } = useContext(RootContext);
  const [firstLoad, setFirstLoad] = useState(true)
  const loc = useLocation();
  MouseFollower.registerGSAP(gsap);
  const cursor = new MouseFollower({});
  const [isMenu, setIsMenu] = useState();
  const setOke = (val) => {
    setIsMenu(val);
  };

  useEffect(() => {
    setTimeout(() => {
      setFirstLoad(false)
      handleFalseFirstLoad()
    }, 3000);
  }, [])

  if(isDarkMode){
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  return (
    <div className={`font-poppins w-screen overflow-x-hidden app-container dark:bg-negative dark:text-white`}>
      <div className="w-full h-fit relative">
        <Nav status={(val) => setOke(val)} />
        <ScrollToTop />
        <MyHelmet />
        <Analytics />
        <AnimatePresence mode="wait">
          {firstLoad && <Preloader />}
        </AnimatePresence>
        {/* <Preloader /> */}
        <main>
          <AnimatePresence mode="wait">
            <Routes location={loc} key={loc.pathname}>
              <Route index element={<Homepage firstLoad={firstLoad} />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:projectId" element={<ViewProject />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/post/:postId" element={<Post />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/tiny" element={<TinyMce />} />
              <Route path="/projects/*" element={<Not_found />} />
              <Route path="/build" element={<Building1 />} />
              <Route path="/*" element={<Not_found />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;
