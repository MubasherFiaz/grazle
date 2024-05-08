import React from "react";
import LoaderImg from "../../assets/svg/loader.gif";

const Loader = ({ isLoader }) => {
  if (isLoader) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img src={LoaderImg} alt="Loading..." />
      </div>
    );
  }
};

export default Loader;
