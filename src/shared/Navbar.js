import React, { useContext, useEffect, useState } from "react";
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
//@ import context
import { CartContext } from "../context/Context";
import DropDownMenu from "../components/dropdownMenu";
import { useAuth } from "../context/AuthProvider";
const Navbar = () => {
  const { isLogin } = useAuth();
  console.log(isLogin, "isLogin");
  const GlobelState = useContext(CartContext);
  const badge = GlobelState.state.length;
  return (
    <div>
      <div className="header_middle home3_style pt20 pb20 dn-992">
        <div className="container ">
          <div className="row justify-content-around align-items-start ">
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

                          <div className="details">
                            <h5 className="title">Cart</h5>
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

                        <div className="details">
                          <h5 className="title">Favorite</h5>
                        </div>
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
                        <DropDownMenu label="Favourites" />
                        <DropDownMenu label="Manage Addresses" />
                        <DropDownMenu label="Credit Limit" />
                        <DropDownMenu label="Grazzle Membership" />
                        <DropDownMenu label="Notification Settings" />
                        <p className="m-0 p-2">Grazle</p>
                        <DropDownMenu label="FAQs" />
                        <DropDownMenu label="Terms of Use" />
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
      {/* Offcanvas menu */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
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
          ></button>
        </div>
        <hr />
        <div className="offcanvas-body">
          {/* Icon to close the offcanvas menu */}

          <ul className="list-unstyled  flex-column">
            <li className="links">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="links">
              <NavLink to="/product">Offer</NavLink>
            </li>
            <li className="links">
              <NavLink to="/error">Categories</NavLink>
            </li>
            <li className="links">
              <NavLink to="/favourite">Favourite</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
