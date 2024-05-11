import React from "react";
import Input from "../input/input";
import * as Yup from "yup";
import { Formik } from "formik";

const AddressForm = ({ formType, handleClick, buttonText }) => {
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("Required")
      .min(3, "Enter Minimum 3 digits"),
    lastName: Yup.string()
      .required("Required")
      .min(3, "Enter Minimum 3 digits"),
    type: Yup.string().required("Required"),
    contactNumber: Yup.string().required("Required"),
    city: Yup.string().required("Required").min(3, "Enter Minimum 3 digits"),
    state: Yup.string().required("Required").min(3, "Enter Minimum 3 digits"),
    address: Yup.string().required("Required").min(5, "Enter Minimum 5 digits"),
    country: Yup.string().required("Required"),
    zipCode: Yup.number().required("Required"),
  });
  return (
    <div className="account_details_page form_grid">
      <h2 className="title mb30">{formType}</h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          type: "",
          contactNumber: "",
          city: "",
          state: "",
          address: "",
          country: "",
          zipCode: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          handleClick(values);
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form
            className="contact_form"
            name="contact_form"
            action="#"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="form-group mb-4">
                  <label className="form-label">First Name</label>
                  <Input
                    id="name"
                    type="text"
                    name="firstName"
                    placeholder="First NAME"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    isError={touched.firstName && errors.firstName}
                  />
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="form-group mb-4">
                  <label className="form-label">Last Name</label>
                  <Input
                    id="name"
                    type="text"
                    name="lastName"
                    placeholder="Last NAME"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    isError={touched.lastName && errors.lastName}
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group mb-4">
                  <label className="form-label">Address Type</label>
                  <select
                    id="selectField"
                    name="type"
                    className="form-select"
                    value={values.type}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Select an option</option>
                    <option value="home">Home</option>
                    <option value="appartment">Appartment</option>
                    <option value="office">Office</option>
                  </select>
                  {touched.type && errors.type ? (
                    <p className="text-danger text-start">{errors.type}</p>
                  ) : null}
                </div>
              </div>

              <div className="col-12">
                <div className="form-group mb-4">
                  <label className="form-label">Country</label>
                  <Input
                    id="address"
                    type="text"
                    name="country"
                    placeholder="country"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.country}
                    isError={touched.country && errors.country}
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group mb-4">
                  <label className="form-label">Street Address</label>
                  <Input
                    id="address"
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                    isError={touched.address && errors.address}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group mb-4">
                  <label className="form-label">City *</label>
                  <Input
                    id="city"
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}
                    isError={touched.city && errors.city}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group mb-4">
                  <label className="form-label">State</label>
                  <Input
                    id="state"
                    type="text"
                    name="state"
                    placeholder="State"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.state}
                    isError={touched.state && errors.state}
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <label className="form-label">Zip Code *</label>
                  <Input
                    id="zipCode"
                    type="text"
                    name="zipCode"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.zipCode}
                    placeholder="Zip Code"
                    isError={touched.zipCode && errors.zipCode}
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="form-group mb-4">
                <label className="form-label">Phone Number</label>
                <Input
                  id="contactNumber"
                  type="number"
                  name="contactNumber"
                  placeholder="Contact Number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.contactNumber}
                  isError={touched.contactNumber && errors.contactNumber}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group d-flex mb0">
                <button type="submit" className="btn btn-thm1111 me-3">
                  {buttonText}
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddressForm;
