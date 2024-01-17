import React, { createContext, useEffect, useState } from 'react';

const RootContext = createContext(false);

const RootProvider = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState(null);
  const [blogPosts, setBlogPosts] = useState();
  const [isDarkMode, setIsDarkMode] = useState();
  // const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
  const [firstLoad, setFirstLoad] = useState(true)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      setIsDarkMode(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  // }, [isDarkMode]);

  // useEffect(() => {
  //   const storedDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));
  //   if(storedDarkMode){
  //     setIsDarkMode(storedDarkMode);
  //   }
  // }, []);

  const handleRegistRoute = (value) => {
    setCurrentRoute(value)
  }

  const handleBlogPosts = (value) => {
    setBlogPosts(value)
  }

  const handleDarkModeToggle = (value) => {
    setIsDarkMode(value)
  }

  const handleFalseFirstLoad = () => {
    setFirstLoad(false)
  }

  const contextValue = {
    currentRoute,
    blogPosts,
    isDarkMode,
    firstLoad,
    handleRegistRoute,
    handleBlogPosts,
    handleDarkModeToggle,
    handleFalseFirstLoad,
  };

  return <RootContext.Provider value={contextValue}>{children}</RootContext.Provider>;
};

export { RootContext, RootProvider };
