import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { useAuth } from "../context/AuthProvider";
import Loader from "../components/Loader";

const MainLayout = () => {
  const { isLoading } = useAuth();
  return (
    <>
      <Navbar />
      <Loader isLoader={isLoading} />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
