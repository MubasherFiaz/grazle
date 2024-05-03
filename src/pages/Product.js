import React from 'react'
import ProductDetail from '../components/product detail/ProductDetail'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import RelatedProduct from '../components/product detail/RelatedProduct'
import AllProduct from '../components/product/AllProduct'
import CartComponent from '../components/cart/CartComponent'
import Wishlist from '../components/wishlist/Wishlist'
import TrackOrder from '../components/TrackOrder/TrackOrder'
import GetTouch from '../components/get in touch/GetTouch'

const Product = () => {
  return (
    <div>
    <Navbar/>
      <AllProduct/>
      <Footer/>
    </div>
  )
}

export default Product
