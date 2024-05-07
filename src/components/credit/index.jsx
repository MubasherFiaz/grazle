import React from "react";
// @ import components
import Input from "../../components/input/input";
// @ import styles
import "./styles.css";
// @ import media
import card from "../../assets/image/card.png";
import Email from "../../assets/svg/email.svg";
import Password from "../../assets/svg/password.svg";
import { Formik } from "formik";
import * as Yup from "yup";

const Credit = () => {
  const validationSchema = Yup.object({
    shopName: Yup.string().required("Required"),
    phoneNumber: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    shopAddress: Yup.string().required("Required"),
    adharCard: Yup.string().required("Required"),
    creditCard: Yup.string().required("Required"),
  });
  const handleLogin = (values) => {
    console.log("login", values);
  };
  return (
    <section id="credit">
      <div className="container">
        <div className="row g-3 align-items-start">
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
            <div className="credit-form">
              <Formik
                initialValues={{ email: "", password: "" }}
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
                }) => (
                  <form className="form p-4" onSubmit={handleSubmit}>
                    <div className="col-12">
                      <label className="form-labels">shop name</label>
                      <Input
                        isInputBg={true}
                        id="shopName"
                        type="text"
                        name="shopName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.shopName}
                        placeholder="Shop Name"
                        isError={
                          errors.shopName && touched.shopName && errors.shopName
                        }
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-labels">phone number</label>
                      <Input
                        isInputBg={true}
                        id="phoneNumber"
                        type="number"
                        name="phoneNumber"
                        value={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Phone Number"
                        className="position-relative"
                        isError={
                          errors.phoneNumber &&
                          touched.phoneNumber &&
                          errors.phoneNumber
                        }
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-labels">email address</label>
                      <Input
                        isInputBg={true}
                        id="email"
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Email"
                        className="position-relative"
                        isError={errors.email && touched.email && errors.email}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-labels">shop address</label>
                      <Input
                        isInputBg={true}
                        id="shopAddress"
                        type="text"
                        name="shopAddress"
                        value={values.shopAddress}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Shop Address"
                        className="position-relative"
                        isError={
                          errors.shopAddress &&
                          touched.shopAddress &&
                          errors.shopAddress
                        }
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-labels">
                        adhar card (optinal)
                      </label>
                      <Input
                        isInputBg={true}
                        id="adharCard"
                        type="text"
                        name="adharCard"
                        value={values.adharCard}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Adhar Card Number"
                        className="position-relative"
                        isError={
                          errors.adharCard &&
                          touched.adharCard &&
                          errors.adharCard
                        }
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-labels">credit card number</label>
                      <Input
                        isInputBg={true}
                        id="creditCard"
                        type="number"
                        name="creditCard"
                        value={values.creditCard}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Credit Card Number"
                        className="position-relative"
                        isError={
                          errors.creditCard &&
                          touched.creditCard &&
                          errors.creditCard
                        }
                      />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="primaryBtn">
                        Submit
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
            <div className="credit-card">
              <div className="limit-title d-flex align-items-center">
                <span className="card-holder">
                  <img src={card} />
                </span>
                <h3>credit limit</h3>
              </div>
              <div className="get-credit d-flex align-items-center">
                <h3>get credit upto</h3>
                <h1>66 lac</h1>
              </div>
              <div className="retailers d-flex justify-content-end">
                <p>Only for Retailers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credit;
