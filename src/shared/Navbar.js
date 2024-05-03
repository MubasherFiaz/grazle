import React, { useEffect, useState } from "react";
import logo from "../assets/img/Grazle-Logo.png";
import image1 from "../assets/images/team/ad-thumb.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import SideNavbar from "./SideNavbar";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      {windowWidth >= 1440 ? (
        <div className="header_middle home3_style pt20 pb20 dn-992">
          <div className="container ">
            <div className="row justify-content-around align-items-center ">
              <div className="col-lg-1 col-xl-1 col-xxl-1 ">
                <div className="header_top_logo_home3">
                  <div className="logo mt-0">
                    <img src={logo} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-xl-3 col-xxl-3 align-self-center text-dark">
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
                      <div className="d-block d-flex align-items-center">
                        <div className="details"><Link className="nav-link" to="/">
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
                      <div className="d-block d-flex align-items-center">
                        <div className="details"><Link className="nav-link" to="/product">
                          <h5 className="title">Offers</h5>
                        </Link>

                        </div>
                      </div>
                    </p>
                    <p className="header_iconbox_home3_style cart-filter-btn">
                      <div className="d-block d-flex align-items-center">
                        <div className="details ms-2">
                          <h5 className="title">Categories</h5>
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-xl-5 col-xxl-5">
                <div
                  className="header_middle_advnc_search home2_style"
                  style={{ width: "80%" }}
                >
                  <div className="search_form_wrapper">
                    <div className="row">
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
                                className="form_control bgc-gmart-gray"
                                type="text"
                                name="search"
                                placeholder="Search products…"
                              />
                            </div>
                          </form>
                        </div>
                      </div>

                      <div className="col-auto p-0">
                        <div className="advscrh_frm_btn home3_style ">
                          <button type="submit" className="btn search-btn">
                            <span>
                              {" "}
                              <FaSearch />{" "}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-xl-3 col-xxl-3 align-self-center">
                <div className="text-center text-lg-end">
                  <div className="wrapper d-flex align-items-center ">
                  <div className="mt-3 wrapper d-flex align-items-center">
                    <p className="header_iconbox_home3_style me-4">

                      <div className="d-block d-flex align-items-center">
                      <Link to="/cart" style={{color:"black"}}>

                        <div className="icon me-2">
                          <FaShoppingCart />{" "}
                        </div>
                      </Link>

                        <div className="details">
                          <h5 className="title">Cart</h5>
                        </div>

                      </div>

                    </p>
                    <p className="header_iconbox_home3_style me-4 signin-filter-btn">
                      <div className="d-block d-flex align-items-center">
                      <Link to="/favourite" style={{color:"black"}}>
                         
                        <div className="icon me-2">
                          <span>
                            {" "}
                            <FaHeart />{" "}
                          </span>
                        </div>
                        </Link>
                        

                        <div className="details">
                          <h5 className="title">Favorite</h5>
                        </div>
                      </div>
                    </p>
                  </div>

                    <Link style={{textDecoration:"none"}}  
                      to="/user"
                      className="header_iconbox_home3_style cart-filter-btn"
                    >
                      <div className="d-block d-flex align-items-center">
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
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div id="page" className="stylehome1 mb-3 ">
          <div className="mobile-menu">
            <div className="header stylehome1 home3_style">
              <div className="menu_and_widgets ">
                <div className="mobile_menu_bar float-start d-flex justify-content-center align-items-center">
                  <span style={{ width: "2rem" }} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    {" "}
                    <AiOutlineMenu />{" "}
                  </span>
                  <div className="col-4" style={{position:"absolute"}}>
                  </div>
                  <h5
                    style={{ marginTop: ".7rem", fontWeight: "bold" }}
                    className="mobile_logo"
                  >
                    Grazle<span className="text-thm"></span>
                  </h5>
                </div>
                <div className="mobile_menu_widget_icons">
                  <ul className="cart mt15">
                    <li className="list-inline-item">
                      <NavLink to="/user">
                        <span
                          style={{
                            border: "1px solid black",
                            padding: ".3rem",
                            borderRadius: "3px",
                            color: "black",
                          }}
                        >
                          {" "}
                          <MdAccountCircle />{" "}
                        </span>
                      </NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink to="/cart">
                        <span
                          style={{
                            border: "1px solid black",
                            padding: ".3rem",
                            borderRadius: "3px",
                            color: "black",
                          }}
                          className="icon"
                        >
                          {" "}
                          <FaShoppingCart />{" "}
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mobile_menu_search_widget">
                <div className="header_middle_advnc_search">
                  <div className="container search_form_wrapper">
                    <div className="row d-flex">
                      <div>
                        <div className="top-search text-start">
                          <form
                            action="#"
                            method="get"
                            className="form-search"
                            acceptCharset="utf-8"
                          >
                            <div className="box-search d-flex mt-4">
                              <input
                                className="form_control"
                                style={{border:"1px solid black",width:"100%"}}
                                type="text"
                                name="search"
                                placeholder="Search products…"
                              />
                              <div className="advscrh_frm_btn">
                                <button type="submit" className="btn search-btn">
                                  <span className="flaticon-search">
                                    <FaSearch />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
          
        </div>
      )}
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header ">
        <h5 className="offcanvas-title w-100" id="offcanvasExampleLabel">Menu</h5>
        <button type="button"  className="btn-close " data-bs-dismiss="offcanvas" aria-label="Close"> 
        
        </button>
      </div>
      <hr />
      <div className="offcanvas-body">
        {/* Icon to close the offcanvas menu */}
        
        <ul className="list-unstyled  flex-column">
          <li className="links">
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li className="links">
            <NavLink to="/product">
              Offer
            </NavLink>
          </li>
          <li className="links">
            <NavLink to="/error">
              Categories
            </NavLink>
          </li>
          <li className="links">
            <NavLink to="/favourite">
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
