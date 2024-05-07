import React, { useContext, useEffect, useState } from "react";
import UserSiderBAr from "../../shared/UserSiderBAr";
import ToggleSideBar from "../../shared/ToggleSideBar";
import earpod from "../../assets/image/Rectangle 1951.png";
import { CartContext } from "../../context/Context";
import Visa from "../../assets/svg/visa.svg";
import Master from "../../assets/svg/master.svg";
import Cash from "../../assets/svg/cash.svg";
import PaymentCard from "../paymentCard";
import "./index.css";
import { Formik } from "formik";
import Input from "../input/input";
import * as Yup from "yup";

const ShippingAddress = () => {
  var TotalValue = 0;
  useEffect(() => {
    setGrandTotal(TotalValue);
  }, [TotalValue]);

  const [grandTotal, setGrandTotal] = useState(0);
  const GlobelState = useContext(CartContext);
  const state = GlobelState.state;

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("Required")
      .min(3, "Enter Minimum 3 digits"),
    lastName: Yup.string()
      .required("Required")
      .min(3, "Enter Minimum 3 digits"),
    address: Yup.string().required("Required").min(5, "Enter Minimum 5 digits"),
    state: Yup.string().required("Required").min(3, "Enter Minimum 3 digits"),
    region: Yup.string().required("Required").min(3, "Enter Minimum 3 digits"),
    zipCode: Yup.string().required("Required").min(3, "Enter Minimum 3 digits"),
  });
  const handleLogin = (values) => {
    console.log("login", values);
  };
  return (
    <div id="shippingAddress">
      <section class="our-dashbord dashbord">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 mb-4 col-xl-9">
              <div class="card shadow p-4 mb-3 ">
                <div class="account_details_page form_grid">
                  <h2 class="title mb30">Shipping Address</h2>
                  <Formik
                    initialValues={{
                      firstName: "",
                      lastName: "",
                      address: "",
                      state: "",
                      region: "",
                      zipCode: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleLogin}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      /* and other goodies */
                    }) => (
                      <form
                        class="contact_form"
                        name="contact_form"
                        onSubmit={handleSubmit}
                      >
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group mb-4">
                              <label class="form-label">First Name</label>
                              <Input
                                type="text"
                                name="firstName"
                                class="form-control"
                                placeholder="First Name"
                                value={values.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isError={
                                  errors.firstName &&
                                  touched.firstName &&
                                  errors.firstName
                                }
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group mb-4">
                              <label class="form-label">Last Name</label>
                              <Input
                                type="text"
                                name="lastName"
                                class="form-control"
                                placeholder="Last Name"
                                value={values.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isError={
                                  errors.lastName &&
                                  touched.lastName &&
                                  errors.lastName
                                }
                              />
                            </div>
                          </div>

                          <div class="col-md-12">
                            <div class="form-group mb-4">
                              <label class="form-label">Street Address</label>
                              <Input
                                type="text"
                                name="address"
                                class="form-control"
                                placeholder="Street Address"
                                value={values.address}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isError={
                                  errors.address &&
                                  touched.address &&
                                  errors.address
                                }
                              />
                            </div>
                          </div>

                          <div class="col-md-4">
                            <div class="form-group mb-4">
                              <label class="form-label">State</label>
                              <Input
                                type="text"
                                name="state"
                                class="form-control"
                                placeholder="State"
                                value={values.state}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isError={
                                  errors.state && touched.state && errors.state
                                }
                              />
                            </div>
                          </div>

                          <div class="col-md-4">
                            <div class="form-group mb-4">
                              <label class="form-label">Region</label>
                              <Input
                                type="text"
                                name="region"
                                class="form-control"
                                placeholder="Region"
                                value={values.region}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isError={
                                  errors.region &&
                                  touched.region &&
                                  errors.region
                                }
                              />
                            </div>
                          </div>

                          <div class="col-md-4">
                            <div class="form-group mb-4">
                              <label class="form-label">Zip Code</label>
                              <Input
                                type="text"
                                name="zipCode"
                                class="form-control"
                                placeholder="Zip Code"
                                value={values.zipCode}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isError={
                                  errors.zipCode &&
                                  touched.zipCode &&
                                  errors.zipCode
                                }
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
                              <button type="submit" class="btn btn-thm2 me-3">
                                Use this Addresss
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
              <div class="card shadow p-4">
                <div class="account_details_page form_grid">
                  <h2 class="title mb30">All Payment Options</h2>

                  <div>
                    <PaymentCard isCreditCard={true} id="creditCard" />
                    <PaymentCard label="Visa" icon={Visa} id="Visa" />
                    <PaymentCard
                      label="Master Card"
                      icon={Master}
                      id="masterCard"
                    />
                    <PaymentCard
                      label="Cash on Delivery"
                      icon={Cash}
                      id="cash"
                    />
                  </div>

                  <div class="row">
                    <div class="col-12">
                      <div class="form-group mb-3">
                        <button
                          type="button"
                          class="btn btn-thm1111 me-3 w-100"
                        >
                          ${grandTotal}
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

            <div class="col-lg-4 col-xl-3">
              <div className="shadow rounded p-4 mb-3">
                <p className="text-dark">
                  We will contact you to confirm order
                </p>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Williams"
                />
              </div>
              <div className="shadow rounded p-4 mb-3">
                <p className="text-dark">Have a Coupen</p>
                <div className=" position-relative coupen-input">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add Coupen"
                  />
                  <button className="bg-themeColor text-white p-2 border-0 rounded position-absolute">
                    Apply
                  </button>
                </div>
              </div>
              <div
                class="order_sidebar_widget style2 shadow"
                style={{ border: "none", borderRadius: "15px" }}
              >
                <h6 class="title text-center">Order Summury</h6>
                {state?.map((item) => {
                  TotalValue = TotalValue + Number(item.price) * item.quantity;
                  return (
                    <div class="d-flex align-items-center">
                      <div class="me-2">
                        <img
                          src={item.image}
                          alt="product image"
                          style={{ width: "100px", height: "100px" }}
                        />
                      </div>
                      <div className="text-ellipsis">
                        <h5>{item.name}</h5>
                        <div className="d-flex justify-content-between">
                          <p>White</p>
                          <p>${item.price}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="cart-total">
                  <h4 class="title mt-4">Cart Total</h4>
                  <div className="d-flex justify-content-between align-items-start">
                    <label>Shipping</label>
                    <p>Free</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-start border-bottom">
                    <label>Discount</label>
                    <p>00</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-start">
                    <label>Cart Total</label>
                    <p>${TotalValue}</p>
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
