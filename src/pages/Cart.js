import React from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import CartComponent from '../components/cart/CartComponent'

const Cart = () => {
  return (
    <div>
    <Navbar/>
      <CartComponent/>
      <Footer/>
    </div>
  )
}

export default Cart
