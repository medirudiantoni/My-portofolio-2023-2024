import React from 'react'
import { Helmet } from 'react-helmet'
import mediUnida from '../../assets/img/me/medi-unida.png'

const MyHelmet = () => {
  const keywords = ['medi rudiant', 'medirudiant', 'Medi Rudiant', 'Oosthavent', 'lakaran', 'kota agung', 'medi rudiantoni', '081273624740', 'mahasiswa umy', 'portfolio', 'portofolio', 'website portfolio', 'website portofolio', 'front-end', 'frontend', 'frontend web developer', "Medi Rudiant's Portfolio"]
  return (
    <Helmet>
      <title>Medi Rudiant - Portfolio</title>
      <meta name="description" content="Hello, I am Medi Rudiant, a front-end web developer and graphic designer" />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content='Medi Rudiant' />
      <meta name='creator' content='Medi Rudiant' />
      <meta property="og:title" content="Medi Rudiant" />
      <meta property="og:description" content="Hello, I am Medi Rudiant, a front-end web developer and graphic designer" />
      <meta property="og:image" content={mediUnida} />
      <meta property="og:image:alt" content="Medi Rudiant's Portfolio" />
      <meta name="twitter:image:alt" content="Medi Rudiant's Portfolio" />
      <meta name="twitter:title" content="Medi Rudiant" />
      <meta name="twitter:description" content="Hello, I am Medi Rudiant, a front-end web developer and graphic designer" />
      <meta name="twitter:image" content={mediUnida} />
      <meta name="google-site-verification" content="haZKmIeEcueD5dg8qT3YlPVRLsz4Mr5crgt9DTVGSGI" />
    </Helmet>
  )
}

export default MyHelmet