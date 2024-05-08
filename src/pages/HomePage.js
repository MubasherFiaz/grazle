import React, { useEffect, useState } from "react";
import HomeTop from "../components/Home/HomeTop";
import HomeCategory from "../components/Home/HomeCategory";
import HomeProduct from "../components/Home/HomeProduct";
import HomeCategory2 from "../components/Home/HomeCategory2";

import { globalApi } from "../apis/AuthApis";
import { useAuth } from "../context/AuthProvider";

const HomePage = () => {
  const [homeData, setHomeData] = useState(null);
  const { setIsLoading } = useAuth();

  const getHomeData = async () => {
    try {
      setIsLoading(true);
      const data = await globalApi(
        "https://aquaconcepts78.fr/grazleBackend/api/home"
      );
      setHomeData(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getHomeData();
    };
    fetchData();
  }, []);
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
