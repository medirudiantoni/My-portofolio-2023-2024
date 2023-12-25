import React, { useContext, useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import { db } from '../../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { RootContext } from '../../../context/RootContext'

const Section3 = () => {
  const {handleBlogPosts} = useContext(RootContext)
  const [data, setData] = useState([]);

  const bgColorsTheme = [
    { name: 'violet' , primary: '#A78BFA', secondary: '#7C3AED', text: '#000000'},
    { name: 'teal' , primary: '#5EEAD4', secondary: '#0D9488', text: '#000000'},
  ]
  
  const getAllPosts = async () => { 
    try {
      const querySnapshot = await getDocs(collection(db, "medirudiantoni2@gmail.com"));
      let newData = [];

      querySnapshot.forEach((doc) => {
        newData.push({ id: doc.id, ...doc.data() });
      });

      setData(newData);
      handleBlogPosts(newData);
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  };
  useEffect(() => {
    getAllPosts()
  }, [])
  return (
    <section className="w-screen min-h-screen relative py-20 sm:py-32">
      <div className="w-full min-h-fit max-w-[1920px] mx-auto px-5 grid gap-5 lg:gap-x-5 lg:gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {data && data.map(item => {
          if(item.id === "comment visitors"){
            return false
          }
          return (
            <Link to={`/post/${item.id}`} key={item.id}>
              <BlogCard category={item.category} title={item.title} date={item.date} poster={item.posterUrl} primary={item.cardColor ? item.cardColor.primary : bgColorsTheme[0].primary} textColor={item.cardColor ? item.cardColor.text : bgColorsTheme[0].text} secondary={item.cardColor ? item.cardColor.secondary : bgColorsTheme[0].secondary} />
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Section3