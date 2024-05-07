import React, { useEffect } from "react";
import HomeTop from "../components/Home/HomeTop";
import HomeCategory from "../components/Home/HomeCategory";
import HomeProduct from "../components/Home/HomeProduct";
import HomeCategory2 from "../components/Home/HomeCategory2";
import { globalApi } from "../apis/AuthApis";

const HomePage = () => {
  const getHomeData = async ()=>{
    return await globalApi('https://aquaconcepts78.fr/grazleBackend/api/home');
  }
  useEffect(()=>{
    let data = getHomeData();
    console.log('home data',data);
  },[]);
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
