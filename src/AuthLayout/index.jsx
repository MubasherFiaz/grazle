import React from "react";
// @ import media
import SideIamge from "../assets/image/loginSide.png";
import LogoImage from "../assets/image/grazleLogo.png";
// @ import styles
import "./index.css";

const AuthLayout = ({ children }) => {
  return (
    <div className="container-fluid mt-3 mb-3 authLayout">
      <div className="row justify-content-center align-items-center">
        <div className="col-6 d-flex justify-content-center align-items-center">
          <img src={SideIamge} alt="sideImage" className="sideImg" />
        </div>
        <div className="col-5 text-center pe-5">
          <div className="">
            <img src={LogoImage} alt="LogoImage" />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
