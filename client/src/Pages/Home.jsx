import React from 'react'
import NavBar from '../Components/NavBar'
import Announcement from '../Components/Announcement'
import Slider from '../Components/Slider'
import CatagoryOption from '../Components/CatagoryOption'
import PopularProduct from '../Components/PopularProduct'
import NewsLatter from '../Components/NewsLatter'
import Footer from '../Components/Footer'

function Home() {
    return (
        <>
            <Announcement />
            <NavBar />
            <Slider />
            {/* <CatagoryOption />
            <PopularProduct />
            <NewsLatter />
            <Footer /> */}
        </>
    )
}

export default Home