import React from "react";
// @ import dependencies
import { Link } from "react-router-dom";
// @ import components
import Input from "../../components/input/input";
// @ import media
import Email from "../../assets/svg/email.svg";
import Password from "../../assets/svg/password.svg";

const Login = () => {
  return (
    <>
      <h1 className="fs-1 fw-bold">Welcome Back</h1>
      <p className="fs-6 fw-normal">Please log in into your account</p>
      <form className="form mt-3">
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
            placeholder="Enter Password"
            className="position-relative"
            isbeforeImg={Password}
          />
        </div>
        <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
          <div className="d-flex justify-content-between mb-3">
            <div className="remember">
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                className="me-2 styled-checkbox"
              />
              <label for="remember-me" className="checkbox-label">
                Remember Me
              </label>
            </div>
            <div className="forgetPassword">
              <a href="#" className="btnred">
                Forget Password?
              </a>
            </div>
          </div>
        </div>
        <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
          <button type="submit" class="primaryBtn">
            Submit
          </button>
        </div>
      </form>
      <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
        <div class="line-text">
          <span>or</span>
        </div>
      </div>
      <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <button className="loginWith apple">Log in with Apple</button>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <button className="loginWith google">Log in with Google</button>
          </div>
        </div>
      </div>
      <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto mt-4">
        <p>
          Don't have an account?
          <Link to="/signup" className="btnred">
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
