import React from 'react'
import { Helmet } from 'react-helmet'
import mediUnida from '../../assets/img/me/medi-unida.png'

const MyHelmet = ({title, keyword}) => {
  const keywords = [
    'medi rudiant', 
    'medirudiant', 
    'Medi Rudiant', 
    keyword,
    'Oosthavent', 
    'lakaran', 
    'kota agung', 
    'mahasiswa umy', 
    'portfolio', 
    'portofolio', 
    'website portfolio', 
    'website portofolio', 
    'front-end', 
    'frontend', 
    'frontend web developer', 
    "Medi Rudiant's Portfolio",
    'web development',
    'graphic design', 
  ];
  
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Medi Rudiant{title && title}</title>
      <meta name="description" content="Hello, I am Medi Rudiant, a front-end web developer and graphic designer" />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Medi Rudiant" />
      <meta name="creator" content="Medi Rudiant" />
      <meta property="og:title" content="Medi Rudiant" />
      <meta property="og:description" content="Hello, I am Medi Rudiant, a front-end web developer and graphic designer" />
      <meta property="og:image" content={mediUnida} />
      <meta property="og:image:alt" content="Medi Rudiant's Portfolio" />
      <meta name="twitter:image:alt" content="Medi Rudiant's Portfolio" />
      <meta name="twitter:title" content="Medi Rudiant" />
      <meta name="twitter:description" content="Hello, I am Medi Rudiant, a front-end web developer and graphic designer" />
      <meta name="twitter:image" content={mediUnida} />
      <meta name="google-site-verification" content="haZKmIeEcueD5dg8qT3YlPVRLsz4Mr5crgt9DTVGSGI" />
      <meta name="google-site-verification" content="dQkwiFeomc83bxYwZIi6W9qVXZ0RZ6wXWTs5fKjne58" />
    </Helmet>
  )
}

export default MyHelmet
