import React from 'react'
import Navbar from '../../shared/Navbar'
import Footer from '../../shared/Footer'
import UserSiderBAr from '../../shared/UserSiderBAr'
import ToggleSideBar from '../../shared/ToggleSideBar'
import paypal from "../../assets/img/pngwing 6.png"
import visa from "../../assets/img/pngwing 7.png"
import google from "../../assets/img/image 4.png"
import { Link } from 'react-router-dom'

const PaymentMethod = () => {
  return (
    <div>
    <Navbar/>
    <section class="our-dashbord dashbord" style={{padding:"0"}}>
    <div class="container py-3">
    <div className="row d-flex justify-content-center align-items-center my-3" style={{width:"100%", backgroundColor:"#F8F8F8",color:"#909198",height:"40px"}}>Home - My Account</div>
        <div class="row">
            <div class="col-lg-3 d-none d-lg-block" >
                <UserSiderBAr/>
            </div>
            <div class="col-lg-9">
              
                <div class="row">
                    <div class="col-xl-12">
                          <ToggleSideBar/>
                          <div class="col-lg-9 col-xl-9">
                            <div class="row">
                                <div class="col-12 mb-4">
                                    <div class="card mb-3 shadow p-4">
                                        <div class="   card-list d-flex justify-content-between align-items-center">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <img src={paypal} alt="" class="me-3"/>
                                                <h3>Paypal</h3>
                                            </div>
                                            <div>
                                                <Link to="#" class="text-decoration-none text-black">Link Account</Link>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="card mb-3 shadow p-4">
                                        <div class="   card-list d-flex justify-content-between align-items-center">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <img src={visa} alt="" class="me-3"/>
                                                <h3>**** **** **** 9087</h3>
                                            </div>
                                            <div>
                                                <Link to="#" class="text-decoration-none text-black">Delete</Link>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="card mb-3 shadow p-4">
                                        <div class="   card-list d-flex justify-content-between align-items-center">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <img src={google} alt="" class="me-3"/>
                                                <h3>Google Pay</h3>
                                            </div>
                                            <div>
                                                <Link to="#" class="text-decoration-none text-black">Link Account</Link>
                                            </div>

                                        </div>
                                    </div>




                                    <div class="card shadow p-4">
                                        <div class="account_details_page form_grid">

                                            <form class="contact_form" name="contact_form" action="#" method="post"
                                                novalidate>
                                                <div class="row">

                                                    <div class="col-12">
                                                        <div class="form-check">
                                                            <input class="form-check-input me-4 mt-1" type="radio"
                                                                name="flexRadioDefault" id="flexRadioDefault1"/>
                                                            <label class="form-label" for="flexRadioDefault1"
                                                                style={{color: "#777777"}}>
                                                                <i class="fa-solid fa-credit-card"></i> Add New
                                                                Credit/Debit Card
                                                            </label>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group mb-4">
                                                            <label class="form-label">Card Holder Name*</label>
                                                            <input class="form-control" type="number"
                                                                placeholder="John Doe "/>
                                                        </div>
                                                    </div>




                                                    <div class="col-md-12">
                                                        <div class="form-group mb-4">
                                                            <label class="form-label">Card Number*</label>
                                                            <input class="form-control" type="number"
                                                                placeholder="5656 6556 87888 9898"/>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-6">
                                                        <div class="form-group mb-4">
                                                            <label class="form-label">Expiry Date *</label>
                                                            <input class="form-control" type="date"
                                                                placeholder="MM/DD/YY"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group mb-4">
                                                            <label class="form-label">CVC *</label>
                                                            <input class="form-control" type="text" placeholder="666"/>
                                                        </div>
                                                    </div>

                                                    <div class="col-12">
                                                        <div class="form-check">
                                                            <input class="form-check-input me-4 mt-2" type="checkbox"
                                                                value="" id="flexCheckDefault"/>
 
                                                            <label class="form-label" for="flexCheckDefault"
                                                                style={{color: "#777777"}}>
                                                                Save card for future payment
                                                            </label>
                                                        </div>

                                                    </div>
                                                    <div class="col-sm-12">
                                                        <div class="form-group d-flex mb0">
                                                            <button type="button" class="btn btn-thm1111 me-3">Add
                                                                Address</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                       
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
    <Footer/>
      
    </div>
  )
}

export default PaymentMethod
