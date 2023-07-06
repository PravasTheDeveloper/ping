import React from 'react'
import LeftSideComponents from '../components/ProductPage/LeftSideComponents'
import RightSideComponents from '../components/ProductPage/RightSideComponents'
import NavbarWebView from '../components/HomePage/NavbarWebView'
import NavbarMobileViewLower from '../components/HomePage/NavbarMobileViewLower'
import NavbarMobileView from '../components/HomePage/NavbarMobileView'
import { useParams } from 'react-router-dom'

function ProductPage() {
  const param = useParams().name;
  // console.log(param)
  return (
    <>
        <NavbarWebView />
        <NavbarMobileView />
        <div className='h-full min-h-[90vh] w-full bg-red-100 container mx-auto product_page_grid mt-10'>
            <LeftSideComponents />
            <RightSideComponents />
        </div>
        <NavbarMobileViewLower />
    </>
  )
}

export default ProductPage
