import React, { useState } from "react";
import backimg1 from "../../assets/img/back11.png";
import img1 from "../../assets/img/brunette-holding-gift-bag-keeping-secret-removebg-preview (1) 1.png";
import Productcard from "./Productcard";
import { Dropdown } from "react-bootstrap";
import logo11 from "../../assets/image/Rectangle 1984.png";
import img111 from "../../assets/image/Rectangle 1989.png";
import bag from "../../assets/image/bag-shoes-beige-color-removebg-preview 1.svg";
import grid from "../../assets/image/menu (7) 1.png";
import ProductFilter from "./ProductFilter";
import { AiOutlineMenu } from "react-icons/ai";

const AllProduct = () => {
  const [showFilter, setShowFilter] = useState(false);
  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div>
      <div className="wrapper overflow-hidden mt-2">
        <div className="body_content_wrapper position-relative">
          <div
            style={{
              width: "100%",
              height: "100%",
              paddingTop: "8px",
              paddingBottom: "8px",
              background: "#F8F8F8",
              borderRadius: "5px",
              borderTop: "1px rgba(0, 0, 0, 0.10) solid",
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div style={{ width: "90px" }}>
              <span
                style={{
                  color: "#909198",
                  fontSize: "14px",
                  fontFamily: "Manrope",
                  fontWeight: "400",
                  textDecoration: "underline",
                  lineHeight: "24px",
                  wordWrap: "break-word",
                }}
                className="home1"
              >
                Home
              </span>
              <span
                style={{
                  color: "#909198",
                  fontSize: "14px",
                  fontFamily: "Manrope",
                  fontWeight: "400",
                  lineHeight: "24px",
                  wordWrap: "break-word",
                }}
                className="shop1"
              >
                 - Shop
              </span>
            </div>
          </div>
          <section className="home-two p0 mt-3 mb-3">
            <div className="container ">
              <div className="row">
                <div className=" col-xl-3 d-none d-xl-block">
                  <ProductFilter />
                </div>
                <div className="col-lg-12 col-xl-9">
                  <div
                    className="banner_one_large11 home2_banner_style bdrs6 px-4  px-lg-0 mb-4 mb-lg-0 customimg "
                    style={{
                      backgroundImage: `url(${backimg1})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "100%",
                      height: "400px", // Adjust height as needed
                    }}
                  >
                    <div className="row">
                      <div className="col-lg-6 d-flex justify-content-center col-xl-6 col-md-5">
                        <div className="apple_widget_home1 mb-4 mb-lg-0 mt-md-2 mt-lg-3 mt0-520 mt-0 ">
                          <span className="tag11 customspan">
                            Special Offer
                          </span>
                          <h3 className="title customspan1">
                            <span>Super Sale</span>
                          </h3>
                          <p className="text-end text-sm-center  customspan2">Up To 50% Off</p>
                          <a href="" className="btn banner-btn btn-thm11">
                            Shop Now
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6   col-xl-6 col-md-7">
                        <div className="  text-center text-xl-start">
                          <div className="d-none d-md-block">
                            <img src={img1} alt="Home 6 Product" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="container">
                      <div className="main-title d-lg-flex justify-content-between mt-4 mb-4 row col-12  ">
                        {showFilter && (
                          <div 
                            style={{
                              position: "absolute",
                              width: "20rem",
                              zIndex: "999",
                            }}
                          >
                            <ProductFilter items={handleShowFilter} />
                          </div>
                        )}

                        <div className="d-flex col-6">
                          <div className=" d-xl-none d-block me-2 mt-1 ">
                            <span onClick={handleShowFilter}>
                              <AiOutlineMenu
                                style={{ width: "45px", height: "29px" }}
                              />
                            </span>
                          </div>
                          <Dropdown>
                            <Dropdown.Toggle
                              id="dropdown-basic"
                              style={{
                                backgroundColor: "transparent",
                                color: "black",
                              }}
                            >
                              Filter
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                Action 1
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Action 2
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                Action 3
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          <img
                            src={grid}
                            alt=""
                            className="d-md-block d-none"
                            style={{
                              width: "2.4rem",
                              height: "2.4rem",
                              border: "1px solid gray",
                              padding: "5px",
                              marginLeft: "8px",
                            }}
                          />
                        </div>
                        <div className="d-flex col-6 justify-content-end">
                          <p className="pe-2 pt-1 d-none d-md-block">
                            Sort By Latest
                          </p>
                          <Dropdown>
                            <Dropdown.Toggle
                              id="dropdown-basic"
                              style={{
                                backgroundColor: "transparent",
                                color: "black",
                              }}
                            >
                              Featured
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                Action 1
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Action 2
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                Action 3
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-9 col-12">
                        <Productcard />
                      </div>
                      <div className="col-md-3 p-0 d-md-block d-none">
                        <div
                          className="card shadow"
                          style={{
                            border: "1px solid gray",
                            borderRadius: "1rem",
                            padding: "0",
                            overflow: "hidden",
                          }}
                        >
                          <div className="card-header  ">
                            <h3 className=" ">Facebook</h3>
                          </div>
                          <div className="card-body">
                            <div className="d-flex">
                              <div>
                                <img
                                  src={logo11}
                                  alt=""
                                  className="me-2"
                                  style={{ width: "4rem", height: "70%" }}
                                />
                              </div>
                              <div
                                style={{ lineHeight: "5px", fontSize: "12px" }}
                              >
                                <h5
                                  style={{
                                    fontWeight: "500",
                                    fontSize: "16px",
                                  }}
                                >
                                  ABC shop
                                </h5>
                                <p
                                  style={{
                                    fontWeight: "400",
                                    fontSize: "12px",
                                  }}
                                >
                                  Facebook
                                </p>

                                <div className="d-flex">
                                  <div
                                    className="d-flex  "
                                    style={{
                                      background: "#E5EEF3",
                                      padding: "5px",
                                      borderRadius: "3px",
                                    }}
                                  >
                                    <i
                                      class="fa-solid fa-thumbs-up me-1"
                                      style={{ color: "#0090ff" }}
                                    ></i>
                                    <p className="mt-1 mb-0">like</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <hr />
                            <p
                              style={{
                                fontWeight: "400",
                                fontSize: "14px",
                                color: "black",
                              }}
                            >
                              3890 people like ABC Store
                            </p>
                            <div className="row  ">
                              <div className="col-3 px-1">
                                <img src={img111} alt="" />
                                <p className="text-center" 
                                style={{
                                  fontWeight: "400",
                                  fontSize: "12px",
                                  color: "black",
                                }}>john</p>
                              </div>
                              <div className="col-3 px-1">
                                <img src={img111} alt="" />
                                <p className="text-center" 
                                style={{
                                  fontWeight: "400",
                                  fontSize: "12px",
                                  color: "black",
                                }}>john</p>
                              </div>
                              <div className="col-3 px-1">
                                <img src={img111} alt="" />
                                <p className="text-center" 
                                style={{
                                  fontWeight: "400",
                                  fontSize: "12px",
                                  color: "black",
                                }}>john</p>
                              </div>
                              <div className="col-3 px-1">
                                <img src={img111} alt="" />
                                <p className="text-center" 
                                style={{
                                  fontWeight: "400",
                                  fontSize: "12px",
                                  color: "black",
                                }}>john</p>
                              </div>
                              <div className="col-3 px-1">
                                <img src={img111} alt="" />
                                <p className="text-center" 
                                style={{
                                  fontWeight: "400",
                                  fontSize: "12px",
                                  color: "black",
                                }}>john</p>
                              </div>
                              <div className="col-3 px-1">
                                <img src={img111} alt="" />
                                <p className="text-center" 
                                style={{
                                  fontWeight: "400",
                                  fontSize: "12px",
                                  color: "black",
                                }}>john</p>
                              </div>
                              <div className="col-3 px-1">
                                <img src={img111} alt="" />
                                <p className="text-center" 
                                style={{
                                  fontWeight: "400",
                                  fontSize: "12px",
                                  color: "black",
                                }}>john</p>
                              </div>
                              <div className="col-3 px-1">
                                <img src={img111} alt="" />
                                <p className="text-center" 
                                style={{
                                  fontWeight: "400",
                                  fontSize: "12px",
                                  color: "black",
                                }}>john</p>
                              </div>
                              <div className="col-3 px-1">
                                <img src={img111} alt="" />
                                <p className="text-center" 
                                style={{
                                  fontWeight: "400",
                                  fontSize: "12px",
                                  color: "black",
                                }}>john</p>
                              </div>
                              <div className="col-3 px-1">
                                <img src={img111} alt="" />
                                <p className="text-center" 
                                style={{
                                  fontWeight: "400",
                                  fontSize: "12px",
                                  color: "black",
                                }}>john</p>
                              </div>
                              <div className="col-3 px-1">
                                <img src={img111} alt="" />
                                <p className="text-center" 
                                style={{
                                  fontWeight: "400",
                                  fontSize: "12px",
                                  color: "black",
                                }}>john</p>
                              </div>
                              <div className="col-3 px-1">
                                <img src={img111} alt="" />
                                <p className="text-center" 
                                style={{
                                  fontWeight: "400",
                                  fontSize: "12px",
                                  color: "black",
                                }}>john</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="row mt-3 p-3 pt-4"
                          style={{
                            borderRadius: "1rem",
                            height: "400px",
                            overflow: "hidden",
                            backgroundColor: "rgba(255, 138, 29, 0.08)",
                            color: "#FF8A1D",
                          }}
                        >
                          <div style={{ height: "40%", lineHeight: "10px" }}>
                            <h4>Latest Arrival </h4>
                            <h2>Women Bag </h2>
                            <h5>Up to 60% Off </h5>
                          </div>
                          <button
                            style={{
                              height: "36",
                              padding: "10px 40px",
                              border: "none",
                              borderRadius: "99px",
                              backgroundColor: "#f69b26",
                              color: "white",
                            }}
                          >
                            ShopNow
                          </button>
                          <img src={bag} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <a className="scrollToHome" href="#">
            <i className="fas fa-angle-up"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
