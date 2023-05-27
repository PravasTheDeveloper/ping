import React from 'react'
import Announcement from '../components/HomePage/Announcement'
import Navbar from '../components/HomePage/Navbar'
import Poster from '../components/HomePage/Poster'
import Categorys from '../components/HomePage/Categorys'

function Home() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Poster />
      <Categorys />
    </>
  )
}

export default Home
