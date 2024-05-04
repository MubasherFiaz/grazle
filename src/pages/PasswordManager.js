import React from "react";
import UserSiderBAr from "../shared/UserSiderBAr";
import ToggleSideBar from "../shared/ToggleSideBar";

const PasswordManager = () => {
  return (
    <div>
      <section class="our-dashbord dashbord p-0">
        <div class="container">
          <div class="row">
            <div
              className="row d-flex justify-content-center align-items-center my-3"
              style={{
                width: "100%",
                backgroundColor: "#F8F8F8",
                color: "#909198",
                height: "40px",
              }}
            >
              Home - My Account
            </div>
            <div className="p-3">
              <ToggleSideBar />
            </div>
            <div class="col-lg-3 col-xl-3 d-none d-lg-block">
              <UserSiderBAr />
            </div>
            <div class="col-lg-9 col-xl-9">
              <div class="row">
                <div class="col-xl-12">
                  <div class="account_user_deails  ">
                    <div class="ui_kit_tab style2">
                      <div class="tab-content   row" id="myTabContent">
                        <div
                          class="tab-pane fade show active col-xl-12"
                          id="baby"
                          role="tabpanel"
                          aria-labelledby="baby-tab"
                        >
                          <div class="account_details_page form_grid">
                            <div class="card shadow p-4">
                              <form
                                class="contact_form"
                                name="contact_form"
                                action="#"
                                method="post"
                                novalidate
                              >
                                <div class="row">
                                  <div class="col-md-12">
                                    <div class="form-group mb-4">
                                      <label class="form-label">
                                        Password*
                                      </label>
                                      <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Enter Password"
                                      />
                                    </div>
                                  </div>
                                  <div class="col-md-12">
                                    <div class="form-group mb-4">
                                      <label class="form-label">
                                        New password
                                      </label>
                                      <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Enter Password "
                                      />
                                    </div>
                                  </div>
                                  <div class="col-md-12">
                                    <div class="form-group mb-4">
                                      <label class="form-label">
                                        Confirm New Password
                                      </label>
                                      <input
                                        class="form-control "
                                        type="text"
                                        placeholder="Enter Password/"
                                      />
                                    </div>
                                  </div>
                                  <div class="col-sm-12">
                                    <div class="form-group d-flex mb0">
                                      <button
                                        type="button"
                                        class="btn btn-thm1111 me-3"
                                      >
                                        Update Password
                                      </button>
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
        </div>
      </section>
    </div>
  );
};

export default PasswordManager;
