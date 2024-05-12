import React from "react";
import LoaderImg from "../../assets/image/grazleLogo.png";
import "./index.css";

const Loader = ({ isLoader }) => {
  if (isLoader) {
    return (
      <div className="loaderWrapper">
        <div className="loader">
          <img src={LoaderImg} alt="Loading..." />
        </div>
      </div>
    );
  }
};

export default Loader;
