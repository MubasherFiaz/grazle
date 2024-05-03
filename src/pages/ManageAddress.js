import React from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import UserSiderBAr from '../shared/UserSiderBAr'
import ToggleSideBar from '../shared/ToggleSideBar'

const ManageAddress = () => {
  return (
    <div>
      <Navbar/>
      <section  className="our-dashbord dashbord p-0 mb-3">
      <div  className="container">
          <div  className="row">
    <div className="row d-flex justify-content-center align-items-center my-3" style={{width:"100%", backgroundColor:"#F8F8F8",color:"#909198",height:"40px"}}>Home - My Account</div>
    <div className="p-3">
    <ToggleSideBar/>
     
     </div>
              <div  className="col-lg-3 col-xl-3 d-none d-lg-block">
                  <UserSiderBAr/>
              </div>
              <div  className="col-lg-9 col-xl-9">
                  <div  className="row">
                      <div  className="col-12 mb-4">
                          <div  className="card shadow p-4">
                              <div  className="   card-list d-flex justify-content-between align-items-center">
                                  <div>
                                      <h3>Bessie Cooper</h3>
                                      <p>256 Royal Ln. Mesa, New Jersery 6777</p>
                                  </div>
                                  <div>

                                      <i  className="fa-solid fa-pen-to-square edit me-3 mb-2 mb-md-0"></i>
                                      <i  className="fa-solid fa-trash-can del"></i>
                                  </div>

                              </div>
                              <hr/>
                              <div  className="card-list d-flex justify-content-between align-items-center">
                                  <div>
                                      <h3>Bessie Cooper</h3>
                                      <p>256 Royal Ln. Mesa, New Jersery 6777</p>
                                  </div>
                                  <div>

                                      <i  className="fa-solid fa-pen-to-square edit me-3 mb-2 mb-md-0"></i>
                                      <i  className="fa-solid fa-trash-can del"></i>
                                  </div>

                              </div>
                          </div>

                      </div>
                      <div  className="col-12">
                          <div  className="card shadow p-4">
                              <div  className="account_details_page form_grid">
                                  <h2  className="title mb30">Add New Address</h2>

                                  <form  className="contact_form" name="contact_form" action="#" method="post"
                                      novalidate>
                                      <div  className="row"> 
                                          <div  className="col-md-6">
                                              <div  className="form-group mb-4">
                                                  <label  className="form-label">First Name</label>
                                                  <input  className="form-control" type="text"
                                                      placeholder="Your Name"/>
                                              </div>
                                          </div>
                                          <div  className="col-md-6">
                                              <div  className="form-group mb-4">
                                                  <label  className="form-label">Last Name</label>
                                                  <input  className="form-control" type="text"
                                                      placeholder="Your Name"/>
                                              </div>
                                          </div>


                                          
                                          <div  className="col-md-12">
                                              <div  className="form-group mb-4">
                                                  <label  className="form-label">Company Name (optional)</label>
                                                  <input  className="form-control" type="number"
                                                      placeholder="Company Name "/>
                                              </div>
                                          </div>

                                          
                                          <div  className="col-md-12">
                                              <div  className="form-group mb-4">
                                                  <label  className="form-label">Country</label>
                                                  <select  className="form-select "
                                                      aria-label="Default select example">
                                                      <option selected>Country</option>
                                                      <option value="1">1</option>
                                                      <option value="2">2</option>
                                                  </select>
                                              </div>
                                          </div>
                                          
                                          
                                          <div  className="col-md-12">
                                              <div  className="form-group mb-4">
                                                  <label  className="form-label">Street Address</label>
                                                  <input  className="form-control" type="number"
                                                      placeholder="Street Address "/>
                                              </div>
                                          </div>
                                          <div  className="col-md-12">
                                              <div  className="form-group mb-4">
                                                  <label  className="form-label">City *</label>
                                                  <select  className="form-select "
                                                      aria-label="Default select example">
                                                      <option selected>City </option>
                                                      <option value="1">1</option>
                                                      <option value="2">2</option>
                                                  </select>
                                              </div>
                                          </div>
                                          <div  className="col-md-12">
                                              <div  className="form-group mb-4">
                                                  <label  className="form-label">State</label>
                                                  <select  className="form-select "
                                                      aria-label="Default select example">
                                                      <option selected>State</option>
                                                      <option value="1">1</option>
                                                      <option value="2">2</option>
                                                  </select>
                                              </div>
                                          </div>

                                          
                                          <div  className="col-md-12">
                                              <div  className="form-group mb-4">
                                                  <label  className="form-label">Zip Code *</label>
                                                  <input  className="form-control" type="number"
                                                      placeholder="Zip Code  "/>
                                              </div>
                                          </div>



                                          <div  className="col-md-12">
                                              <div  className="form-group mb-4">
                                                  <label  className="form-label">Email</label>
                                                  <input  className="form-control email" type="email"
                                                      placeholder="Your Email"/>
                                              </div>
                                          </div>
                                          <div  className="col-md-12">
                                              <div  className="form-group mb-4">
                                                  <label  className="form-label">Phone Number</label>
                                                  <input  className="form-control" type="number"
                                                      placeholder="Phone Number"/>
                                              </div>
                                          </div>
                                          <div  className="col-md-12">
                                              <div  className="form-group mb-4">
                                                  <label  className="form-label">Gender</label>
                                                  <select  className="form-select "
                                                      aria-label="Default select example">
                                                      <option selected>Gender</option>
                                                      <option value="1">Male</option>
                                                      <option value="2">Female</option>
                                                  </select>
                                              </div>
                                          </div>
                                          <div  className="col-sm-12">
                                              <div  className="form-group d-flex mb0">
                                                  <button type="button"  className="btn btn-thm1111 me-3">Add Address</button>
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
  </section>
      <Footer/>
    </div>
  )
}

export default ManageAddress
