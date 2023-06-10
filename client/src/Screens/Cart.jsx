import React from 'react'
import Navbar from '../components/HomePage/Navbar'
import Announcement from '../components/HomePage/Announcement'
import CartPage from '../components/Cart/CartPage'

function Cart() {
  return (
    <>
      <Announcement />
      <Navbar />
      <CartPage />
    </>
  )
}

export default Cart
