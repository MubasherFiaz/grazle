import React from "react";
// @ import AuthLayout
import AuthLayout from "../index";
// @ import dependencies
import { Link } from "react-router-dom";
// @ import components
import Input from "../../components/input/input";
// @ import media
import Email from "../../assets/svg/email.svg";
import Password from "../../assets/svg/password.svg";

const Login = () => {
  return (
    <AuthLayout>
      <h1 className="fs-1 fw-bold">Welcome Back</h1>
      <p className="fs-6 fw-normal">Please log in into your account</p>
      <form className="form mt-3">
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <Input
            id="email"
            type="email"
            isbeforeImg={Email}
            placeholder="Email Address"
          />
        </div>
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <Input
            id="password"
            type="password"
            placeholder="Enter Password"
            className="position-relative"
            isbeforeImg={Password}
          />
        </div>

        <div className="d-flex justify-content-between mb-3 col-12">
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
        <div className="col-12">
          <button type="submit" class="primaryBtn">
            Submit
          </button>
        </div>
      </form>
      <div class="line-text">
        <span>or</span>
      </div>
      <div className="row">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <button className="loginWith apple">Log in with Apple</button>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <button className="loginWith google">Log in with Google</button>
        </div>
      </div>

      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-4">
        <p>
          Don't have an account?
          <Link to="/signUp" className="btnred">
            Sign up
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
