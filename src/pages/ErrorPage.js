import React from 'react'
import errorimg from "../assets/image/404 error.jpg";
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <Navbar/>
      <section class="our-dashbord dashbord p-0 mb-3">
      <div class="container">
          <div class="row">
    <div className="row d-flex justify-content-center align-items-center my-3" style={{width:"100%", backgroundColor:"#F8F8F8",color:"#909198",height:"40px"}}>Home - My Account</div>
    
              
              <div className='text-center my-4'>
              <img src={errorimg} alt="" />
              <h1 style={{color:"#434343", fontSize:"128px",fontWeight:"700"}}>404</h1>
              <h3 style={{fontSize:"48px"}}>OPPS! PAGE NOT BE FOUND</h3>
              <p style={{color:"#777777"}}>Sorry but the page you are looking for does not exist, have been removed, name <br /> changed or is temporarity unavailable.</p>
              <Link to="/">
               <button className='btn px-5 py-3' style={{background:"#F70000",color:"white",borderRadius:"12px"}}>Back to Home Page</button>
              </Link>

              </div>
          </div>
      </div>
  </section>
      <Footer/>
    </div>
  )
}

export default ErrorPage
