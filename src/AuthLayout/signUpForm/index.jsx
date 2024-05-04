import React from "react";
// @ import dependencies
import { Link } from "react-router-dom";
// @ import components
import Input from "../../components/input/input";
// @ import media
import Email from "../../assets/svg/email.svg";
import Password from "../../assets/svg/password.svg";
import Profile from "../../assets/svg/profile.svg";

const SignUp = () => {
  return (
    <>
      <h1 className="fs-1 fw-bold">Get Register!</h1>
      <p className="fs-6 fw-normal">Please Get yourself Register!</p>
      <form className="form mt-3">
        <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
          <Input
            id="name"
            type="text"
            isbeforeImg={Profile}
            placeholder="Full NAME"
          />
        </div>
        <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
          <Input
            id="email"
            type="email"
            isbeforeImg={Email}
            placeholder="Email Address"
          />
        </div>
        <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
          <Input
            id="password"
            type="password"
            placeholder="Create Password"
            className="position-relative"
            isbeforeImg={Password}
          />
        </div>
        <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
          <Input
            id="password"
            type="password"
            placeholder="Confirm Password"
            className="position-relative"
            isbeforeImg={Password}
          />
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

      <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto mt-5">
        <p>
          Already have anaccount?
          <Link to="/login" className="btnred">
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
