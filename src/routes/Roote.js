import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Protected from "./Protected";
import LoginRedirect from "./LoginRedirect";
import HomePage from "../pages/HomePage";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import ErrorPage from "../pages/ErrorPage";
import User from "../pages/User";
import PasswordManager from "../pages/PasswordManager";
import ManageAddress from "../pages/ManageAddress";
import Favourite from "../pages/Favourite";
import MyOrder from "../pages/MyOrder";
import Address from "../components/address/Address";
import Logout from "../components/logout/Logout";
import TrackOrder from "../components/TrackOrder/TrackOrder";
import PaymentMethod from "../components/payment method/PaymentMethod";
import ShippingAddress from "../components/shipping address/ShippingAddress";
import OrderHistory from "../components/order history/OrderHistory";
import SideNavbar from "../shared/SideNavbar";
import ProductDetail from "../components/product detail/ProductDetail";
import ProductFilter from "../components/product/ProductFilter";
import GetTouch from "../components/get in touch/GetTouch";
import Wishlist from "../components/wishlist/Wishlist";
import FaqComponent from "../components/faqComponent/FaqComponent";
import Review from "../components/review/Review";
import Confirm from "../components/confirm order/Confirm";
import ConfirmOrder from "../components/confirm order/ConfirmOrder";
import CompleteOrder from "../components/complete order/CompleteOrder";
import Order from "../components/order/Order";
import AllProduct from "../components/product/AllProduct";
import Plans from "../components/plans";
import Credit from "../components/credit";
import Login from "../AuthForms/loginForm";
import SignUp from "../AuthForms/signUpForm";
import SellerForm from "../AuthForms/SellerForm";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";

const Roote = () => {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  // const navigate = useNavigate();
  const login_info = localStorage.getItem("login_token");
  function set_login_status() {
    if (login_info) {
      setisLoggedIn(true);
    } else {
      setisLoggedIn(false);
    }
  }

  useEffect(() => {
    set_login_status();
  }, []);
  // const logIn = () => {
  //   navigate("/index");
  // };
  // const logOut = () => {
  //   setisLoggedIn(false);
  //   localStorage.removeItem("login_token");
  //   navigate("/");
  // };
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/faq" element={<FaqComponent />} />
        <Route path="/review" element={<Review />} />
        <Route path="/success" element={<ConfirmOrder />} />
        <Route path="/orderconfirm" element={<Confirm />} />
        <Route path="/ordercompleted" element={<CompleteOrder />} />
        <Route path="/shippingaddress" element={<ShippingAddress />} />
        <Route path="/trackorder" element={<TrackOrder />} />
        <Route path="/getintouch" element={<GetTouch />} />
        <Route path="/payment" element={<PaymentMethod />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="/alladdress" element={<Address />} />
        <Route path="/order1" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route
          <Route path="/plans" element={<Plans />} />
          <Route path="/credit" element={<Credit />} />
          <Route
            exact
            path="/user"
            element={
              <Protected isLoggedIn={login_info}>
                <User />
              </Protected>
            }
          /> */}
        <Route path="/user" element={<User />} />
        <Route path="/password" element={<PasswordManager />} />
        <Route path="/address" element={<ManageAddress />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/order" element={<MyOrder />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route
          exact
          path="/login"
          element={
            // <LoginRedirect isLoggedIn={login_info}>
            <Login />
            // </LoginRedirect>
          }
        />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/sellerform" element={<SellerForm />} />
      </Route>
    </Routes>
  );
};

export default Roote;
