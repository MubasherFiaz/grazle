import React from "react";
// @ import components
import Input from "../../components/input/input";

const SellerForm = () => {
  return (
    <>
      <h1 className="fs-1 fw-bold">Become a Seller!</h1>

      <form className="form mt-3 ">
        <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
          <Input id="name" type="text" placeholder="Full NAME" />
        </div>
        <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
          <div className="row gx-3">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mx-auto">
              <Input id="email" type="email" placeholder="Email Address" />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mx-auto">
              <Input id="number" type="number" placeholder="Contact Number" />
            </div>
          </div>
        </div>
        <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
          <div className="row  gx-3">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mx-auto">
              <Input id="city" type="email" placeholder="Email Address" />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mx-auto">
              <Input id="email" type="text" placeholder="City" />
            </div>
          </div>
        </div>
        <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
          <Input id="state" type="text" placeholder="State" />
        </div>
        <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
          <Input id="address" type="text" placeholder="Address" />
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
    </>
  );
};

export default SellerForm;
