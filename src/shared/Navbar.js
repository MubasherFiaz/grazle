/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useRef, useState } from "react";
import logo from "../assets/img/Grazle-Logo.png";
import image1 from "../assets/images/team/ad-thumb.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import SideNavbar from "./SideNavbar";
// @ import media
import Search from "../assets/svg/search.svg";
import Heart from "../assets/svg/heart.svg";
import Cart from "../assets/svg/Cart.svg";
import Menu from "../assets/image/hamburger.png";
//@ import context
import { CartContext } from "../context/Context";
import DropDownMenu from "../components/dropdownMenu";
import { useAuth } from "../context/AuthProvider";
import Modal from "../components/modals/genericModal";
import LogoutModal from "../components/modals/logoutModal";
import OrderplaceModal from "../components/modals/orderPlaceModal";
import CancelorderModal from "../components/modals/cancelOrderModal";
const Navbar = () => {
  const { isLogin, setIsLogin, setUserData, userData } = useAuth();
  const offcanvasRef = useRef(null);
  const GlobelState = useContext(CartContext);
  const badge = GlobelState.state.length;

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("login_token"));
    setUserData(storedData?.data[0]);

    if (storedData?.data) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const closeOffcanvas = () => {
    if (offcanvasRef.current) {
      offcanvasRef.current.classList.remove("show");
    }
  };
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {/* <LogoutModal show={showModal} onHide={handleModalClose} /> */}
      {/* <OrderplaceModal show={showModal} onHide={handleModalClose} /> */}
      <CancelorderModal show={showModal} onHide={handleModalClose} />
      <div className="header_middle home3_style pt20 pb20 dn-992">
        <div className="container ">
          <div className="d-xl-none d-block">
            <div className="d-flex justify-content-between align-items-end">
              <div className="d-flex align-items-end">
                <span
                  className=""
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                  aria-controls="offcanvasExample"
                >
                  <img src={Menu} alt="menu" />
                </span>
                <img className="ms-2" src={logo} alt="" />
              </div>
              <div className="navigation d-flex flex-row gap-2 align-items-center">
                <Link to="/cart" style={{ color: "black" }}>
                  <div className="icon me-2  position-relative">
                    <img src={Cart} alt="cart" />
                    <span className="position-absolute mt-2 top-0 start-100 translate-middle badge rounded-pill bg-danger text-white">
                      {badge}
                    </span>
                  </div>
                </Link>
                <Link to="/favourite" style={{ color: "black" }}>
                  <img src={Heart} alt="Heart" />
                </Link>
                {isLogin ? (
                  <div className="d-flex align-items-center dropdown">
                    <a
                      style={{ textDecoration: "none" }}
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      className="header_iconbox_home3_style cart-filter-btn"
                    >
                      <img
                        src={image1}
                        alt=""
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          outline: "1px solid red",
                        }}
                      />
                    </a>
                    <ul
                      class="dropdown-menu dropdown-menu-end mt-3 border-0 shadow p-1"
                      aria-labelledby="dropdownMenuLink"
                      style={{ width: "250px", borderRadius: "10px" }}
                    >
                      <DropDownMenu label="Your Account" link="/user" />
                      <DropDownMenu label="Favourites" link="/favourite" />
                      <DropDownMenu label="Manage Addresses" link="/address" />
                      <DropDownMenu label="Credit Limit" link="/credit" />
                      <DropDownMenu label="Grazzle Membership" link="/plans" />
                      <DropDownMenu label="Notification Settings" />
                      <p className="m-0 p-2">Grazle</p>
                      <DropDownMenu label="FAQs" />
                      <DropDownMenu
                        label="Terms of Use"
                        link="/termscondition"
                      />
                      <DropDownMenu label="Privacy Policy" />
                    </ul>
                  </div>
                ) : (
                  <Link to={"/login"}>Login</Link>
                )}
              </div>
            </div>
          </div>
          <div className="d-xl-block d-none">
            <div className="row justify-content-around align-items-start">
              <div className="col-lg-1 col-xl-1 col-xxl-1 col-md-12 col-sm-12 col-12">
                <div className="header_top_logo_home3">
                  <div className="logo mt-0">
                    <img src={logo} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 text-dark">
                <div className="text-center text-lg-end">
                  <div className="wrapper d-flex mt-3">
                    <p
                      style={{
                        borderRight: "1px solid #D2D4DA",
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                      }}
                      className="header_iconbox_home3_style me-4"
                    >
                      <div className="d-flex align-items-center">
                        <div className="details">
                          <Link className="nav-link" to="/">
                            <h5 className="title">Home</h5>
                          </Link>
                        </div>
                      </div>
                    </p>
                    <p
                      className="header_iconbox_home3_style me-4 signin-filter-btn"
                      style={{
                        borderRight: "1px solid #D2D4DA",
                        paddingRight: "1rem",
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <div className="details">
                          <Link className="nav-link" to="/product">
                            <h5 className="title">Offers</h5>
                          </Link>
                        </div>
                      </div>
                    </p>
                    <p className="header_iconbox_home3_style cart-filter-btn">
                      <div className="d-flex align-items-center">
                        <div className="details ms-2">
                          <Link className="nav-link" to="/product">
                            <h5 className="title">Categories</h5>
                          </Link>
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-xl-5 col-xxl-5 col-md-6  col-sm-12 col-12">
                <div className="header_middle_advnc_search home2_style">
                  <div className="search_form_wrapper">
                    <div className="col-auto pe-0">
                      <div className="top-search home2_style athome3">
                        <form
                          action="#"
                          method="get"
                          className="form-search"
                          acceptCharset="utf-8"
                        >
                          <div className="box-search pre_line">
                            <input
                              className="form_control border w-100"
                              type="text"
                              name="search"
                              placeholder="Search products…"
                            />
                          </div>
                        </form>
                        <div className="search-icon">
                          <img src={Search} alt="Search" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-12 col-sm-12 col-12 align-items-center">
                <div className="text-center text-lg-end">
                  <div className="wrapper d-flex align-items-center ">
                    <div className="mt-3 wrapper d-flex align-items-center">
                      <p className="header_iconbox_home3_style me-4">
                        <Link to="/cart" style={{ color: "black" }}>
                          <div className="d-flex align-items-center">
                            <div className="icon me-2  position-relative">
                              <img src={Cart} alt="cart" />
                              <span className="position-absolute mt-2 top-0 start-100 translate-middle badge rounded-pill bg-danger text-white">
                                {badge}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </p>
                      <p className="header_iconbox_home3_style me-4 signin-filter-btn">
                        <div className="d-flex align-items-center">
                          <Link to="/favourite" style={{ color: "black" }}>
                            <div className="icon me-2">
                              <img src={Heart} alt="Heart" />
                            </div>
                          </Link>
                        </div>
                      </p>
                    </div>
                    {isLogin ? (
                      <div className="d-flex align-items-center dropdown">
                        <a
                          style={{ textDecoration: "none" }}
                          href="#"
                          role="button"
                          id="dropdownMenuLink"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          className="header_iconbox_home3_style cart-filter-btn"
                        >
                          <img
                            src={userData?.image}
                            alt=""
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              outline: "1px solid red",
                            }}
                          />
                        </a>
                        <ul
                          class="dropdown-menu dropdown-menu-end mt-3 border-0 shadow p-1"
                          aria-labelledby="dropdownMenuLink"
                          style={{ width: "250px", borderRadius: "10px" }}
                        >
                          <DropDownMenu label="Your Account" link="/user" />
                          <DropDownMenu label="Favourites" link="/favourite" />
                          <DropDownMenu
                            label="Manage Addresses"
                            link="/address"
                          />
                          <DropDownMenu label="Credit Limit" link="/credit" />
                          <DropDownMenu
                            label="Grazzle Membership"
                            link="/plans"
                          />
                          <DropDownMenu label="Notification Settings" />
                          <p className="m-0 p-2">Grazle</p>
                          <DropDownMenu label="FAQs" />
                          <DropDownMenu
                            label="Terms of Use"
                            link="/termscondition"
                          />
                          <DropDownMenu label="Privacy Policy" />
                        </ul>
                      </div>
                    ) : (
                      <Link to={"/login"}>Login</Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Offcanvas menu */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        aria-labelledby="offcanvasExampleLabel"
        ref={offcanvasRef}
      >
        <div className="offcanvas-header ">
          <h5 className="offcanvas-title w-100" id="offcanvasExampleLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close "
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={closeOffcanvas}
          ></button>
        </div>
        <hr />
        <div className="offcanvas-body">
          <ul className="list-unstyled  flex-column">
            <li className="links">
              <NavLink to="/" onClick={closeOffcanvas}>
                Home
              </NavLink>
            </li>
            <li className="links">
              <NavLink to="/product" onClick={closeOffcanvas}>
                Offer
              </NavLink>
            </li>
            <li className="links">
              <NavLink to="/error" onClick={closeOffcanvas}>
                Categories
              </NavLink>
            </li>
            <li className="links">
              <NavLink to="/favourite" onClick={closeOffcanvas}>
                Favourite
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
