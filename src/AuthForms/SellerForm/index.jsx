import React from "react";
// @ import components
import Input from "../../components/input/input";
import { Formik } from "formik";
import * as Yup from "yup";

const SellerForm = () => {
  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required("Required")
      .min(3, "Enter Minimum 3 digits"),
    email: Yup.string().email("Invalid email address").required("Required"),
    contactNumber: Yup.string().required("Required"),
    city: Yup.string().required("Required").min(3, "Enter Minimum 3 digits"),
    state: Yup.string().required("Required").min(3, "Enter Minimum 3 digits"),
    address: Yup.string().required("Required").min(5, "Enter Minimum 5 digits"),
  });
  const handleLogin = (values) => {
    console.log("login", values);
  };
  return (
    <>
      <h1 className="fs-1 fw-bold">Become a Seller!</h1>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          contactNumber: "",
          city: "",
          state: "",
          address: "",
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
          <form className="form mt-3 " onSubmit={handleSubmit}>
            <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
              <Input
                id="name"
                type="text"
                name="fullName"
                placeholder="Full NAME"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
                isError={errors.fullName && touched.fullName && errors.fullName}
              />
            </div>
            <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
              <div className="row gx-3">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mx-auto">
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    isError={errors.email && touched.email && errors.email}
                  />
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mx-auto">
                  <Input
                    id="contactNumber"
                    type="text"
                    name="contactNumber"
                    placeholder="Contact Number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.contactNumber}
                    isError={
                      errors.contactNumber &&
                      touched.contactNumber &&
                      errors.contactNumber
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
              <div className="row  gx-3">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mx-auto">
                  <Input
                    id="city"
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}
                    isError={errors.city && touched.city && errors.city}
                  />
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mx-auto">
                  <Input
                    id="state"
                    type="text"
                    name="state"
                    placeholder="State"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.state}
                    isError={errors.state && touched.state && errors.state}
                  />
                </div>
              </div>
            </div>
            <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
              <Input
                id="address"
                type="text"
                name="address"
                placeholder="Address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
                isError={errors.address && touched.address && errors.address}
              />
            </div>
            <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
              <Input id="about" type="text" placeholder="About" />
            </div>

            <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto text-start mb-4">
              <input
                type="checkbox"
                id="remember-me"
                className="me-2 styled-checkbox"
              />
              <label for="remember-me" className="checkbox-label">
                By Clicking i agree all terms of services and Privacy & Policy.
              </label>
            </div>
            <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
              <button type="submit" class="primaryBtn">
                Register
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default SellerForm;
