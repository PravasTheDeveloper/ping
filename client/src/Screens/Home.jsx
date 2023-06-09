import React from 'react'
import Announcement from '../components/HomePage/Announcement'
import Navbar from '../components/HomePage/Navbar'
import Poster from '../components/HomePage/Poster'
import Categorys from '../components/HomePage/Categorys'
import PolpularProducts from '../components/HomePage/PolpularProducts'
import NewProduct from '../components/HomePage/NewProduct'
import Footer from '../components/HomePage/Footer'
import NavbarMobileView from '../components/HomePage/NavbarMobileView'
import NavbarMobileViewLower from '../components/HomePage/NavbarMobileViewLower'

function Home() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Poster />
      <Categorys />
      <PolpularProducts />
      <NewProduct />
      <Footer />
      <NavbarMobileViewLower />
    </>
  )
}

export default Home
