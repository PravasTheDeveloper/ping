import React from 'react'
import Announcement from '../Components/Announcement'
import NavBar from '../Components/NavBar'
import CartProduct from '../Components/CartProduct'

function CartPage() {
  return (
    <>
        <NavBar />
        <Announcement />
        <CartProduct />
    </>
  )
}

export default CartPage