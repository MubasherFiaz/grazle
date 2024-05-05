import React from "react";
import HomeTop from "../components/Home/HomeTop";
import HomeCategory from "../components/Home/HomeCategory";
import HomeProduct from "../components/Home/HomeProduct";
import HomeCategory2 from "../components/Home/HomeCategory2";

const HomePage = () => {
  return (
    <>
      <HomeTop />
      <HomeCategory />
      <HomeProduct />
      <HomeCategory2 />
    </>
  );
};

export default HomePage;
