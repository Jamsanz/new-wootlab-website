import Head from 'next/head'
import React from 'react'
import Footer from './footer'
import Header from './header'

const Layout = ({ children }: {children: JSX.Element}): JSX.Element => {
  return (
    <>
      <Head>
        <title>Wootlab</title>
        <link rel="icon" href="/images/logo.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.4.0/css/all.min.css" integrity="sha512-eBNnVs5xPOVglLWDGXyZnZZ2K2ixXhR/3aECgCpFnW2dGCd/yiqXZ6fcB3BubeA91kM6NX234b6Wrah8RiYAPA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&family=Urbanist&display=swap" rel="stylesheet" />
      </Head>
      <main className='min-h-screen px-2 lg:px-0 lg:max-w-screen-xl mx-auto'>
        <Header />
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
