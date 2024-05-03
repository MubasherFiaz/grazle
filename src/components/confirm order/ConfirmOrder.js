import React from 'react'
import tick from "../../assets/image/tick.png"
import Navbar from '../../shared/Navbar'
import Footer from '../../shared/Footer'


const ConfirmOrder = () => {
  return (
    <div>
    <Navbar/>
    <div class="container">
    <div class="row">
<div className="col-12 d-flex justify-content-center align-items-center my-3" style={{width:"100%", backgroundColor:"#F8F8F8",color:"#909198",height:"40px"}}>Home - Shop - Add to Cart</div>

        
        <div className='text-center my-4 customconfim'>
        <img src={tick} alt="" style={{width:"20rem",height:"12rem"}} />
        <h3 style={{color:"#434343",fontSize:"48px"}}>Your order has been successfully <br /> placed</h3>
        <p style={{color:"#434343"}}>We will be sending you an email confirmation to user888@email.com shortly</p>
        <div className="d-flex w100 justify-content-center mb-3 customconfimbtn">
         <button className='btn px-md-5 py-md-3 mx-2' style={{background:"#F70000",color:"white",borderRadius:"12px"}}>Leave a Review</button>
         <button className='btn px-md-5 py-md-3 mx-2' style={{background:"#F69B26",color:"white",borderRadius:"12px"}}>Back to Home</button>
        </div>


        </div>
    </div>
</div>
<Footer/>
      
    </div>
  )
}

export default ConfirmOrder
