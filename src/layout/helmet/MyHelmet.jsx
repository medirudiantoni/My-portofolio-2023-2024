import React from 'react'
import { Helmet } from 'react-helmet'
import mediUnida from '../../assets/img/me/medi-unida.png'

const MyHelmet = () => {
  const keywords = ['medi rudiant', 'medirudiant', 'Medi Rudiant', 'Oosthavent', 'lakaran', 'kota agung', 'medi rudiantoni', '081273624740', 'mahasiswa umy', 'portfolio', 'portofolio', 'website portfolio', 'website portofolio', 'front-end', 'frontend', 'frontend web developer']
  return (
    <>
        <Helmet>
          <meta name="description" content="Hello, I am Medi Rudiant, an appreciator of visually stunning graphic content, striving to bring it to life in tangible forms." />
          <meta name="keywords" content={keywords.join(', ')} />
          <meta name="author" content='Medi Rudiant' />
          <meta name='creator' content='Medi Rudiant' />
          <meta property="og:title" content="Medi Rudiant" />
          <meta property="og:description" content="Hello, I am Medi Rudiant, an appreciator of visually stunning graphic content, striving to bring it to life in tangible forms." />
          <meta property="og:image" content={mediUnida} />
          <meta name="twitter:title" content="Medi Rudiant" />
          <meta name="twitter:description" content="Hello, I am Medi Rudiant, an appreciator of visually stunning graphic content, striving to bring it to life in tangible forms." />
          <meta name="twitter:image" content={mediUnida} />
        </Helmet>
    </>
  )
}

export default MyHelmet