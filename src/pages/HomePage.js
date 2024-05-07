import React, { useEffect, useState } from "react";
import HomeTop from "../components/Home/HomeTop";
import HomeCategory from "../components/Home/HomeCategory";
import HomeProduct from "../components/Home/HomeProduct";
import HomeCategory2 from "../components/Home/HomeCategory2";
import Loader from "../assets/svg/loader.gif";
import { globalApi } from "../apis/AuthApis";

const HomePage = () => {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getHomeData = async () => {
    try {
      const data = await globalApi(
        "https://aquaconcepts78.fr/grazleBackend/api/home"
      );
      setHomeData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getHomeData();
    };
    fetchData();
  }, []);
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img src={Loader} alt="Loading..." />
      </div>
    );
  }
  console.log("home data", homeData);
  return (
    <>
      <HomeTop data={homeData?.sliders} />
      <HomeCategory data={homeData?.categories} />
      <HomeProduct data={homeData?.sections} />
      <HomeCategory2 />
    </>
  );
};

export default HomePage;
