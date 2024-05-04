import React from "react";
// @ import media
import boy from "../assets/image/boy.png";
import LogoImage from "../assets/image/grazleLogo.png";
// @ import styles
import "./index.css";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="authlayoutWrapper">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="side-textbox">
              <p>Discover endless possibilities</p>
              <h3>Explore, buy, and sell with our vibrant marketplace!"</h3>
              <img src={boy} alt="boy" />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="text-center">
              <img src={LogoImage} alt="LogoImage" />
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
