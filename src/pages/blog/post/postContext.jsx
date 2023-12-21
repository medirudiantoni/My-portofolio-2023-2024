import React, { createContext, useState } from "react";

export const PostContext = createContext();
const { Provider } = PostContext;

const PostContextProvider = ({children}) => {
  const [post, setPost] = useState()
  return (
    <Provider value={{post}}>
      {children}
    </Provider>
  )
};

export default PostContextProvider;