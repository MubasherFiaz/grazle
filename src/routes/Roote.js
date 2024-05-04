import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import Login from "../AuthLayout/loginForm";
import SignUp from "../AuthLayout/signUpForm";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";

const Roote = () => {
  return (
    <BrowserRouter>
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
          <Route path="/shippingAddress" element={<ShippingAddress />} />
          <Route path="/trackorder" element={<TrackOrder />} />
          <Route path="/getintouch" element={<GetTouch />} />
          <Route path="/payment" element={<PaymentMethod />} />
          <Route path="/orderhistory" element={<OrderHistory />} />
          <Route path="/address1" element={<Address />} />
          <Route path="/order1" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/user" element={<User />} />
          <Route path="/password" element={<PasswordManager />} />
          <Route path="/address" element={<ManageAddress />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/order" element={<MyOrder />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Roote;
