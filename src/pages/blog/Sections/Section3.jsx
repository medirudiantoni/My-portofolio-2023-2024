import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import mediSg from '../../../assets/img/me/medi-sg.jpg'
import { db } from '../../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { Link } from 'react-router-dom'

const Section3 = () => {
  const [data, setData] = useState([]);

  const bgColorsTheme = [
    { name: 'violet' , primary: '#A78BFA', secondary: '#7C3AED', text: '#000000'},
    { name: 'teal' , primary: '#5EEAD4', secondary: '#0D9488', text: '#000000'},
    { name: 'dark' , primary: '#2C2C2C', secondary: '#181818', text: '#ffffff'},
    { name: 'yellow' , primary: '#FDE047', secondary: '#EAB308', text: '#000000'},
    { name: 'sky' , primary: '#7DD3FC', secondary: '#0EA5E9', text: '#000000'},
    { name: 'light' , primary: '#E2E8F0', secondary: '#CBD5E1', text: '#000000'},
  ]

  console.log(data)
  
  const getAllPosts = async () => { 
    try {
      const querySnapshot = await getDocs(collection(db, "medirudiantoni2@gmail.com"));
      let newData = [];

      querySnapshot.forEach((doc) => {
        newData.push({ id: doc.id, ...doc.data() });
      });

      setData(newData);
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
              <BlogCard category={item.category} title={item.title} date={item.date} poster={item.posterUrl} primary={item.cardColor ? item.cardColor : bgColorsTheme[0].primary} />
            </Link>
          )
        })}
        <BlogCard category="Blog" title="Welcome to my personal blog" date="27 Nov 2023" />
        <BlogCard category="Journey" title="Vacation in singapore" date="27 Nov 2023" poster={mediSg} className="bg-gray-800 text-white " />
        <BlogCard category="Assumption" title="Islam in modern day" date="27 Nov 2023" poster={'https://source.unsplash.com/1920x1080?islam'} className="bg-green-400" />
        <BlogCard category="Insight" title="Why we don't have argue with stupid starnger on the internet?" date="27 Nov 2023" poster={'https://source.unsplash.com/1920x1200?social media'} className="bg-orange-400" />
        <BlogCard category="Game" title="League of legends: wild rift" date="27 Nov 2023" poster={'https://www.riotgames.com/darkroom/1440/08bcc251757a1f64e30e0d7e8c513d35:be16374e056f8268996ef96555c7a113/wr-cb1-announcementarticle-banner-1920x1080.png'} className="bg-teal-400" />
      </div>
    </section>
  )
}

export default Section3