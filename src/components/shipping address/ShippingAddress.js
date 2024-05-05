import React, { useContext } from "react";
import UserSiderBAr from "../../shared/UserSiderBAr";
import ToggleSideBar from "../../shared/ToggleSideBar";
import earpod from "../../assets/image/Rectangle 1951.png";
import { CartContext } from "../../context/Context";
const ShippingAddress = () => {
  const GlobelState = useContext(CartContext);
  const state = GlobelState.state;
  return (
    <div>
      <section class="our-dashbord dashbord">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 mb-4 col-xl-9">
              <div class="card shadow p-4">
                <div class="account_details_page form_grid">
                  <h2 class="title mb30">Shipping Address</h2>

                  <form
                    class="contact_form"
                    name="contact_form"
                    action="#"
                    method="post"
                    novalidate
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group mb-4">
                          <label class="form-label">First Name</label>
                          <input
                            class="form-control"
                            type="text"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group mb-4">
                          <label class="form-label">Last Name</label>
                          <input
                            class="form-control"
                            type="text"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>

                      <div class="col-md-12">
                        <div class="form-group mb-4">
                          <label class="form-label">Street Address</label>
                          <input
                            class="form-control"
                            type="number"
                            placeholder="Street 34, United States"
                          />
                        </div>
                      </div>

                      <div class="col-md-4">
                        <div class="form-group mb-4">
                          <label class="form-label">State</label>
                          <input
                            class="form-control"
                            type="number"
                            placeholder="State"
                          />
                        </div>
                      </div>

                      <div class="col-md-4">
                        <div class="form-group mb-4">
                          <label class="form-label">Region</label>
                          <input
                            class="form-control"
                            type="number"
                            placeholder="Region"
                          />
                        </div>
                      </div>

                      <div class="col-md-4">
                        <div class="form-group mb-4">
                          <label class="form-label">Zip Code</label>
                          <input
                            class="form-control"
                            type="number"
                            placeholder="Zip Code"
                          />
                        </div>
                      </div>

                      <div class="col-sm-12">
                        <div class="form-group d-flex mb0">
                          <button
                            type="button"
                            class="btn  btn-secondary me-3"
                            style={{ color: "white" }}
                          >
                            Cancel
                          </button>
                          <button type="button" class="btn btn-thm2 me-3">
                            Use this Addresss
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-xl-3">
              <div
                class="order_sidebar_widget style2 shadow"
                style={{ border: "none", borderRadius: "15px" }}
              >
                <h4 class="title">Your Card</h4>
                {state?.map((item) => {
                  return (
                    <div class="d-flex align-items-center">
                      <div class="me-2">
                        <img src={item.image} alt="" />
                      </div>
                      <div>
                        <h5>{item.name}</h5>
                        <p>White</p>
                      </div>
                    </div>
                  );
                })}

                <h4 class="title mt-4">Cart Total </h4>

                <ul>
                  <li class="subtitle">
                    <p>
                      Shipping <span class="float-end">Free</span>
                    </p>
                  </li>
                  <li class="subtitle">
                    <p>
                      Discount <span class="float-end">$66.00</span>
                    </p>
                  </li>
                  <li class="subtitle">
                    <p>
                      Cart Total <span class="float-end">$66.00</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-9 col-xl-9">
              <div class="card shadow p-4">
                <div class="account_details_page form_grid">
                  <h2 class="title mb30">All Payment Options</h2>

                  <div
                    class="p-4 mb-4"
                    style={{
                      border: "2px solid #F70000",
                      background: "#fdf5f5",
                      borderRadius: "11px",
                    }}
                  >
                    <form
                      class="contact_form"
                      name="contact_form"
                      action="#"
                      method="post"
                      novalidate
                    >
                      <div class="row">
                        <div class="col-12">
                          <div class="form-check">
                            <input
                              class="form-check-input me-4 mt-1"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label
                              class="form-label"
                              for="flexRadioDefault1"
                              style={{ color: "black" }}
                            >
                              Credit Card
                            </label>
                          </div>
                        </div>

                        <p style={{ color: "black" }}>
                          Pay securely using your visa, maestro, Discover , or
                          American express card.
                        </p>

                        <div class="col-md-12">
                          <div class="form-group mb-4">
                            <label class="form-label">Card Number</label>
                            <input
                              class="form-control"
                              type="number"
                              placeholder="3455 7898 5667"
                            />
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group mb-4">
                            <label class="form-label">Name of card</label>
                            <input
                              class="form-control"
                              type="number"
                              placeholder="Name of card"
                            />
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group mb-4">
                            <label class="form-label">Expiry Date</label>
                            <input
                              class="form-control"
                              type="date"
                              placeholder=" "
                            />
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group mb-4">
                            <label class="form-label">CVC Number</label>
                            <input
                              class="form-control"
                              type="number"
                              placeholder="566"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div>
                    <div
                      class="card mb-3 border p-4"
                      style={{ border: "1px solid #777" }}
                    >
                      <div class="col-12">
                        <div class="form-check">
                          <input
                            class="form-check-input me-4 mt-1"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-label"
                            for="flexRadioDefault1"
                            style={{ color: "black", fontSize: "18px" }}
                          >
                            Visa
                          </label>
                        </div>
                      </div>
                    </div>

                    <div
                      class="card mb-3 border p-4"
                      style={{ border: "1px solid #777" }}
                    >
                      <div class="col-12">
                        <div class="form-check">
                          <input
                            class="form-check-input me-4 mt-1"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-label"
                            for="flexRadioDefault1"
                            style={{ color: "black", fontSize: "18px" }}
                          >
                            Master Card
                          </label>
                        </div>
                      </div>
                    </div>

                    <div
                      class="card mb-3 border p-4"
                      style={{ border: "1px solid #777" }}
                    >
                      <div class="col-12">
                        <div class="form-check">
                          <input
                            class="form-check-input me-4 mt-1"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-label"
                            for="flexRadioDefault1"
                            style={{ color: "black", fontSize: "18px" }}
                          >
                            Cash on Delivery
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-12">
                      <div class="form-group mb-3">
                        <button
                          type="button"
                          class="btn btn-thm1111 me-3 w-100"
                        >
                          Pay $567.00
                        </button>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input me-4 "
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />

                        <label
                          class="form-label"
                          for="flexCheckDefault"
                          style={{ color: "#777777" }}
                        >
                          By Clicking this, I agree all Terms & Conditions and
                          Privacy & Ploicy
                        </label>
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

export default ShippingAddress;
