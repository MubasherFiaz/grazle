import React from 'react'
import userimg from "../../assets/image/Ellipse 3037.png";
import UserSiderBAr from '../../shared/UserSiderBAr';
import ToggleSideBar from '../../shared/ToggleSideBar';

const UserDetail = () => {
   
  return (
    <div>
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
                        <div class="account_user_deails pl40 pl0-md">
                            <div class="d-flex customer_info">
                                <div class="flex-shrink-0 posr">
                                    <img src={userimg} alt="customer1.png" class="profile-img"/>
                                    <span class="active_status active"></span>
                                </div>
                            </div>
                            <div class="ui_kit_tab style2">  
                                <div class="tab-content pt20 row" id="myTabContent">
                                    <div class="tab-pane fade show active col-lg-12" id="t20"
                                        role="tabpanel" aria-labelledby="t20-tab">
                                        <div class="account_details_page form_grid">
                                            <form class="contact_form" name="contact_form" action="#"
                                                method="post" novalidate>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group mb-md-4 mb-2 trackoo">
                                                            <label class="form-label">First Name</label>
                                                            <input class="form-control" type="text"
                                                                placeholder="Your Name"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group mb-md-4 mb-2 trackoo">
                                                            <label class="form-label">Last Name</label>
                                                            <input class="form-control" type="text"
                                                                placeholder="Your Name"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group mb-md-4 mb-2 trackoo">
                                                            <label class="form-label">Email</label>
                                                            <input class="form-control email" type="email"
                                                                placeholder="Your Email"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group mb-md-4 mb-2 trackoo">
                                                            <label class="form-label">Phone Number</label>
                                                            <input class="form-control" type="number"
                                                                placeholder="Phone Number"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group mb-md-4 mb-2 trackoo">
                                                            <label class="form-label">Gender</label>
                                                            <select class="form-select " aria-label="Default select example">
                                                                <option selected>Gender</option>
                                                                <option value="1">Male</option>
                                                                <option value="2">Female</option> 
                                                              </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12">
                                                        <div class="form-group d-flex mb0">
                                                            <button type="button"
                                                                class="btn btn-thm1111 me-3">Update Change</button> 
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
    </div>
  )
}

export default UserDetail
