import React from "react";
import img from "../../assets/img/Product Image.png";
import minus from "../../assets/images/icons/minus.svg";
import review from "../../assets/images/resource/review-img.png";
import { Link } from "react-router-dom";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import RelatedProduct from "./RelatedProduct";

const ProductDetail = () => {
  return (
    <div>
      <Navbar />
      <div className="body_content_wrapper position-relative">
        <section className="shop-single-content pb80 pt70 ovh">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-xxl-7">
                <div className="shop_single_natabmenu">
                  <div className="d-block">
                    <div className="tab-content" id="v-pills-tabContent">
                      <div
                        className="tab-pane fade"
                        id="v-pills-home"
                        role="tabpanel"
                        aria-labelledby="v-pills-home-tab"
                      >
                        <div className="shop_single_navmenu_content mb-3 text-center">
                          <Link
                            className="product_popup popup-img"
                            to="#"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            <span className="flaticon-full-screen"></span>
                          </Link>
                          <div className="zoomimg_wrapper">
                            <img
                              className="zoom-img"
                              id="zoom_01"
                              src={img}
                              data-zoom-image="img/Product Image.png"
                              width="550"
                              alt="Shop Single Image"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-profile"
                        role="tabpanel"
                        aria-labelledby="v-pills-profile-tab"
                      >
                        <div className="shop_single_navmenu_content mb-3 text-center">
                          <Link
                            className="product_popup popup-img"
                            to="#"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            <span className="flaticon-full-screen"></span>
                          </Link>
                          <div className="zoomimg_wrapper">
                            <img
                              className="zoom-img"
                              id="zoom_02"
                              src={img}
                              data-zoom-image="img/Product Image.png"
                              width="550"
                              alt="Shop Single Image"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade show active"
                        id="v-pills-messages"
                        role="tabpanel"
                        aria-labelledby="v-pills-messages-tab"
                      >
                        <div className="shop_single_navmenu_content mb-3 text-center">
                          <Link
                            className="product_popup popup-img"
                            to="#"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            <span className="flaticon-full-screen"></span>
                          </Link>
                          <div className="zoomimg_wrapper">
                            <img
                              className="zoom-img"
                              id="zoom_03"
                              src={img}
                              data-zoom-image="img/Product Image.png"
                              width="550"
                              alt="Shop Single Image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="nav d-flex nav-pills me-3 mb-3"
                      id="v-pills-tab2"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <button
                        className="nav-link mb-0 me-3"
                        id="v-pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-home"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-home"
                        aria-selected="true"
                      >
                        <img src={img} alt="" />
                      </button>
                      <button
                        className="nav-link mb-0 me-3"
                        id="v-pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-profile"
                        aria-selected="false"
                      >
                        <img src={img} alt="" />
                      </button>
                      <button
                        className="nav-link mb-0 active"
                        id="v-pills-messages-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-messages"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-messages"
                        aria-selected="false"
                      >
                        <img src={img} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-xxl-5">
                <div className="shop_single_product_details ps-0 ps-xl-4 mt-4 mt-xl-0">
                  <h4 className="title mb15 ctext14">
                    capttain pure by kapil dev xtra pure 18{" "}
                  </h4>
                  <ul className="d-flex mediaul">
                    <li className="me-3">
                      <div className="sspd_review">
                        <ul className="mb0 changeulmedia ctext12">
                          <li className=" list-inline-item">
                            <Link to="#">
                              <i className="fas fa-star" style={{color:"orange"}}></i>
                            </Link>
                          </li>
                          
                          <li className=" list-inline-item">
                            <Link to="#">
                              <i className="fas fa-star" style={{color:"orange"}}></i>
                            </Link>
                          </li>
                          
                          <li className=" list-inline-item">
                            <Link to="#">
                              <i className="fas fa-star" style={{color:"orange"}}></i>
                            </Link>
                          </li>
                          
                          <li className=" list-inline-item">
                            <Link to="#">
                              <i className="fas fa-star" style={{color:"orange"}}></i>
                            </Link>
                          </li>
                          
                          <li className=" list-inline-item">
                            <Link to="#">
                              <i className="fas fa-star" style={{color:"orange"}}></i>
                            </Link>
                          </li>
                          
                        </ul>
                      </div>
                    </li>
                    <li>3,014 reviews</li>
                  </ul>
                  <div className="sspd_price mb0 mt15 ctext14">$3.399 </div>
                  <div className="sspd_price mb17 mt2 ctext14">
                    $3.399{" "}
                    <small>
                      <del className="mr10">$1,419.92</del>
                    </small>
                  </div>
                  <hr />

                  <div className="shop_single_table style3 table-responsive">
                    <div className="shop_single_description ">
                      <h4 className="ctext14">Variants</h4>
                    </div>
                  </div>
                  <div className="mb-4 d-flex justify-content-between align-items-center mt-3">
                    <ul className="cart_btn_widget shop_single2_style align-items-center mb-0 mediaul  ">
                      <li className="list-inline-item me-2  ">
                        <Link
                          to="#"
                          className="small-medium-text"
                          style={{
                            border: "2px solid #F70000",
                            backgroundColor: "#fcf2f2",
                            color: "#F70000",
                            textDecoration: "none",
                          }}
                        >
                          Small
                        </Link>
                      </li>
                      <li className="list-inline-item me-2  ">
                        <Link
                          to="#"
                          className="small-medium-text"
                          style={{
                            background: "none",
                            color: "#909198",
                            textDecoration: "none",
                          }}
                        >
                          Medium
                        </Link>
                      </li>
                      <li className="list-inline-item me-2  ">
                        <Link
                          to="#"
                          className="small-medium-text"
                          style={{
                            backgroundColor: "#F8F8F8",
                            color: "#000000",
                            textDecoration: "none",
                          }}
                        >
                          Large
                        </Link>
                      </li>
                    </ul>
                    <div className="cart_btn home_page_sidebar d-grid">
                        <div className="quantity-block home_page_sidebar border">
                          <button className="quantity-arrow-minus2 shop_single_page_sidebar">
                          <i className="fa-solid fa-minus"></i>
                          </button>
                          <input className="quantity-num2 shop_single_page_sidebar" type="number" value="3" />
                          <button className="quantity-arrow-plus2 shop_single_page_sidebar"> <i className="fa-solid fa-plus"></i> </button>
                        </div>
                      </div>
                  </div>

                  <div className="mb-4 d-flex justify-content-between align-items-center">
                    <Link
                      to="#"
                      className="btn   bdrs60  add-cart-btn btnwhite"
                      style={{ backgroundColor: "#F70000", color: "#fff" }}
                    >
                      Add to cart
                    </Link>
                    <Link
                      to="#"
                      className="btn   bdrs60 add-cart-btn btnred"
                      style={{ backgroundColor: "#fcf2f2", color: "#F70000" }}
                    >
                      Get Started
                    </Link>
                    <Link
                      to="#"
                      className="btnchange"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "#F8F8F8",
                        borderRadius: "50%",
                        padding: "13px",
                        color: "#F70000",
                        textDecoration: "none",
                      }}
                    >
                      <span
                        className="flaticon-heart fz16 heading-color"
                        style={{ color: "#F70000", fontSize: "24px" }}
                      ></span>
                    </Link>
                  </div>

                  <hr className="mt-0 mb20" />
                </div>
              </div>
            </div>
            <div className="row mt50">
              <div className="col-lg-12">
                <div className="shop_single3_style ui_kit_tab style2">
                  <ul
                    className="nav nav-tabs mb15 d-flex justify-content-center"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link mt-3 mt-xl-0 mb-0 me-3 me-xl-5 active"
                        id="description-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#description"
                        type="button"
                        role="tab"
                        aria-controls="description"
                        aria-selected="true"
                      >
                        Description
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link mt-3 mt-xl-0 mb-0 me-3 me-xl-5"
                        id="details-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#details"
                        type="button"
                        role="tab"
                        aria-controls="details"
                        aria-selected="false"
                      >
                        Details & Specs
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link mt-3 mt-xl-0 mb-0 me-3 me-xl-5"
                        id="qna-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#qna"
                        type="button"
                        role="tab"
                        aria-controls="qna"
                        aria-selected="false"
                      >
                        Questions and Answers
                      </button>
                    </li>
                  </ul>

                  <div className="tab-content pt20 row" id="myTabContent">
                    <div
                      className="tab-pane fade show active col-lg-12"
                      id="description"
                      role="tabpanel"
                      aria-labelledby="description-tab"
                    >
                      <div className="shop_single_description">
                        <p className="para ctext12">
                          The first notebook of its kind, this Apple MacBook Pro
                          is a beast. With the blazing-fast M1 Pro chip — the
                          first Apple silicon designed for pros — you get
                          groundbreaking performance and amazing battery life.
                          Add to that a stunning Liquid Retina XDR display, the
                          best camera and audio ever in a Mac notebook, and all
                          the ports you need.
                        </p>
                        <h5 className="mt20  ctext14">Powerful performance</h5>
                        <div className="shop_item_list_features shop_single_style mb30">
                          <ul className="mb0 order_list list-style-type-bullet">
                            <li>
                              <Link className="changelinkfont ctext12" to="#">
                                English-language MacBook Pro
                              </Link>
                            </li>
                            <li>
                              <Link className="changelinkfont ctext12" to="#">
                                10-core Apple M1 Pro chip for a giant leap in
                                CPU, GPU, and machine learning performance
                              </Link>
                            </li>
                            <li>
                              <Link className="changelinkfont ctext12" to="#">
                                16GB of RAM so everything you do is fast and
                                fluid
                              </Link>
                            </li>
                            <li>
                              <Link className="changelinkfont ctext12" to="#">
                                16-core Neural Engine for advanced machine
                                learning
                              </Link>
                            </li>
                            <li>
                              <Link className="changelinkfont ctext12" to="#">
                                16-core GPU
                              </Link>
                            </li>
                            <li>
                              <Link className="changelinkfont ctext12" to="#">
                                Ultrafast 1TB solid state drive (SSD) is blazing
                                fast, so you can take all your photos and videos
                                with you no matter.
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <h5 className=" ctext14">Display and audio</h5>
                        <div className="shop_item_list_features shop_single_style">
                          <ul className="mb0 order_list list-style-type-bullet">
                            <li>
                              <Link className="changelinkfont ctext12" to="#">
                                16.2-inch liquid retina XDR display delivers a
                                responsive and natural viewing experience
                              </Link>
                            </li>
                            <li>
                              <Link className="changelinkfont ctext12" to="#">
                                3456 x 2234 native resolution with support for
                                millions of colours
                              </Link>
                            </li>
                            <li>
                              <Link className="changelinkfont ctext12" to="#">
                                ProMotion technology for adaptive refresh rates
                                up to 120Hz
                              </Link>
                            </li>
                            <li>
                              <Link className="changelinkfont ctext12" to="#">
                                Studio-quality three-mic array with high
                                signal-to-noise ratio and directional
                                beamforming
                              </Link>
                            </li>
                            <li>
                              <Link className="changelinkfont ctext12" to="#">
                                High fidelity six speaker sound system with
                                forece-cancelling woofers
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade col-xl-12"
                      id="details"
                      role="tabpanel"
                      aria-labelledby="details-tab"
                    >
                      <div className="shop_single_table table-responsive">
                        <table className="table table-striped table-borderless">
                          <thead>
                            <tr>
                              <th className="ctext12 cp5 cm-0" scope="col">
                                Brand
                              </th>
                              <th className="ps-2 ctext12 cp5 cm-0" scope="col">
                                Apple
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th className="ctext12 cp5 cm-0" scope="row">
                                Model Name
                              </th>
                              <td className="changelinkfont ctext10 cp5 cm0 ">MacBook-Pro</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <th className="ctext12 cp5 cm-0" scope="row">
                                Screen Size
                              </th>
                              <td className="changelinkfont ctext10 cp5 cm0">16.2 Inches</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <th className="ctext12 cp5 cm-0" scope="row">
                                Color Space
                              </th>
                              <td className="changelinkfont ctext10 cp5 cm0">Space Gray</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <th className="ctext12 cp5 cm-0" scope="row">
                                Hard Disk Size
                              </th>
                              <td className="changelinkfont ctext10 cp5 cm0">1 TB</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <th className="ctext12 cp5 cm-0" scope="row">
                                CPU Model
                              </th>
                              <td className="changelinkfont ctext10 cp5 cm0">Apple M1</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <th className="ctext12 cp5 cm-0" scope="row">
                                Ram Memory Installed Size
                              </th>
                              <td className="changelinkfont ctext10 cp5 cm0">16 GB</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <th className="ctext12 cp5 cm-0" scope="row">
                                Operating System
                              </th>
                              <td className="changelinkfont ctext10 cp5 cm0">Mac OS</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <th className="ctext12 cp5 cm-0" scope="row">
                                Graphics Card Description
                              </th>
                              <td className="changelinkfont ctext10 cp5 cm0">Integrated</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <th className="ctext12 cp5 cm-0" scope="row">
                                Graphics Coprocessor
                              </th>
                              <td className="changelinkfont ctext10 cp5 cm0">M1 Pro</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade col-xl-12"
                      id="qna"
                      role="tabpanel"
                      aria-labelledby="qna-tab"
                    >
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="shop_single_qna">
                            <div className="search_field mt-3">
                              <div className="blog_search_widget">
                                <div className="input-group">
                                  <input
                                    type="text"
                                    className="form-control ctext12"
                                    placeholder="Have a question? Search for answer"
                                    aria-label="Recipient's username"
                                  />
                                  <button className="btn btn-thm" type="button">
                                    <span className="fa fa-search"></span>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="question_with_poster mt-3 ">
                              <h5 className="title ctext12 cp0 cm0 ">
                                Q: Can dvds be played on apple computers?
                              </h5>
                              <p className="author changelinkfont ctext10 ">
                                Asked by Ali Tufan - May 14, 2022 on zenmart.com
                              </p>
                            </div>
                            <div className="question_with_answer mt-3 ms-3">
                              <h5 className="title ctext12 cp0 cm0">
                                A: If you buy a separate CD/DVD drive.
                              </h5>
                              <p className="author changelinkfont ctext10 mb-0">
                                Answered by TFN-Store - May 24, 2022
                              </p>
                            </div>
                            <div className="question_with_poster mt-3">
                              <h5 className="title ctext12 cp0 cm0">
                                Q: Can dvds be played on apple computers?
                              </h5>
                              <p className="author changelinkfont ctext10">
                                Asked by Ali Tufan - May 14, 2022 on zenmart.com
                              </p>
                            </div>
                            <div className="question_with_answer mt-3 ms-3">
                              <h5 className="title ctext12 cp0 cm0">
                                A: If you buy a separate CD/DVD drive.
                              </h5>
                              <p className="author changelinkfont ctext10 mb-0">
                                Answered by TFN-Store - May 24, 2022
                              </p>
                            </div>
                            <div className="more_btn mt30 text-center">
                              <Link
                                to="#"
                                className="btn btn-lg btn-white bdr_thm ctext12  mb20 ctext12 "
                              >
                                Explore all questions
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt50">
              <div className="col-lg-12">
                <div className="    col-xl-12">
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <h5 className="card-header ctext14">Ratings & Reviews</h5>
                        <div className="card-body">
                          <div className="row">
                            <div
                              className="col-md-12 col-lg-4 borderchange ctext10 "
                              style={{ borderRight: "2px solid #D9D9D9" }}
                            >
                              <h4 className="ctext14">
                                5.0{" "}
                                <span
                                  className="clip-path-name ctext10"
                                  style={{
                                    background: "orange",
                                    color: "white",
                                    padding: "2px 20px 2px 10px",
                                    fontSize: "14px",
                                  }}
                                >
                                  <i
                                    className="fas fa-star "
                                    style={{ color: "white" }}
                                  ></i>{" "}
                                  Very Good
                                </span>
                              </h4>
                              <p>
                                <i
                                  className="fas fa-star"
                                  style={{ color: "orange" }}
                                ></i>
                                <i
                                  className="fas fa-star"
                                  style={{ color: "orange" }}
                                ></i>
                                <i
                                  className="fas fa-star"
                                  style={{ color: "orange" }}
                                ></i>
                                <i
                                  className="fas fa-star"
                                  style={{ color: "orange" }}
                                ></i>
                                <i
                                  className="fas fa-star"
                                  style={{ color: "orange" }}
                                ></i>
                              </p>
                              <p>133 Rating</p>
                            </div>
                            <div className="col-md-12 col-lg-6 ">
                              <div className="d-flex  align-items-center single_line_review pr30 pr0-lg mb10 ">
                                <i
                                  className="fas fa-star ctext10"
                                  style={{ color: "orange" }}
                                ></i>
                                <i
                                  className="fas fa-star ctext10"
                                  style={{ color: "orange" }}
                                ></i>
                                <i
                                  className="fas fa-star ctext10"
                                  style={{ color: "orange" }}
                                ></i>
                                <i
                                  className="fas fa-star ctext10"
                                  style={{ color: "orange" }}
                                ></i>
                                <i
                                  className="fas fa-star ctext10"
                                  style={{ color: "orange" }}
                                ></i>
                                <div className="progress-bar mx-3">
                                  <div className="progress-bar__bg"></div>
                                  <div
                                    className="progress-bar__bar"
                                    style={{ width: "300px" }}
                                  ></div>
                                </div>
                                <div className="heading-color">55</div>
                              </div>

                              <div className="d-flex  align-items-center single_line_review pr30 pr0-lg mb10">
                                <i
                                  className="fas fa-star ctext10"
                                  style={{ color: "orange" }}
                                ></i>
                                <i
                                  className="fas fa-star ctext10"
                                  style={{ color: "orange" }}
                                ></i>
                                <i
                                  className="fas fa-star ctext10"
                                  style={{ color: "orange" }}
                                ></i>
                                <i
                                  className="fas fa-star ctext10"
                                  style={{ color: "orange" }}
                                ></i>
                                <i className="fas fa-star ctext10" style={{ color: "gray" }}></i>
                                <div className="progress-bar mx-3">
                                  <div className="progress-bar__bg"></div>
                                  <div
                                    className="progress-bar__bar"
                                    style={{ width: "250px" }}
                                  ></div>
                                </div>
                                <div className="heading-color">44</div>
                              </div>

                              <div className="d-flex  align-items-center single_line_review pr30 pr0-lg mb10">
                                <i
                                  className="fas fa-star ctext10"
                                  style={{ color: "orange" }}
                                ></i>
                                <i
                                  className="fas fa-star ctext10"
                                  style={{ color: "orange" }}
                                ></i>
                                <i
                                  className="fas fa-star ctext10"
                                  style={{ color: "orange" }}
                                ></i>
                                <i className="fas fa-star ctext10" style={{ color: "gray" }}></i>
                                <i className="fas fa-star ctext10" style={{ color: "gray" }}></i>
                                <div className="progress-bar mx-3">
                                  <div className="progress-bar__bg"></div>
                                  <div
                                    className="progress-bar__bar"
                                    style={{ width: "200px" }}
                                  ></div>
                                </div>
                                <div className="heading-color">22</div>
                              </div>

                              <div className="d-flex  align-items-center single_line_review pr30 pr0-lg mb10">
                                <i
                                  className="fas fa-star ctext10"
                                  style={{ color: "orange" }}
                                ></i>
                                <i
                                  className="fas fa-star ctext10"
                                  style={{ color: "orange" }}
                                ></i>
                                <i className="fas fa-star ctext10" style={{ color: "gray" }}></i>
                                <i className="fas fa-star ctext10" style={{ color: "gray" }}></i>
                                <i className="fas fa-star ctext10" style={{ color: "gray" }}></i>
                                <div className="progress-bar mx-3">
                                  <div className="progress-bar__bg"></div>
                                  <div
                                    className="progress-bar__bar"
                                    style={{ width: "150px" }}
                                  ></div>
                                </div>
                                <div className="heading-color">12</div>
                              </div>

                              <div className="d-flex  align-items-center single_line_review pr30 pr0-lg mb10">
                                <i
                                  className="fas fa-star ctext10"
                                  style={{ color: "orange" }}
                                ></i>
                                <i className="fas fa-star ctext10" style={{ color: "gray" }}></i>
                                <i className="fas fa-star ctext10" style={{ color: "gray" }}></i>
                                <i className="fas fa-star ctext10" style={{ color: "gray" }}></i>
                                <i className="fas fa-star ctext10" style={{ color: "gray" }}></i>
                                <div className="progress-bar mx-3">
                                  <div className="progress-bar__bg"></div>
                                  <div
                                    className="progress-bar__bar"
                                    style={{ width: "100px" }}
                                  ></div>
                                </div>
                                <div className="heading-color">02</div>
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-xl-12">
                              <div className="product_single_content mb30">
                                <div className="mbp_pagination_comments">
                                  <div className="mbp_first d-flex align-items-center mb0">
                                    <div className="flex-shrink-0"> </div>
                                    <div className="flex-grow-1 ms-md-4 m-0 ">
                                      <div className="d-block d-md-flex">
                                        <div className="sspd_postdate me-2 mb10-sm">
                                          <div className="sspd_review">
                                            <ul className="mb0 cp0">
                                              <li className=" list-inline-item">
                                                <Link to="#">
                                                  <i className="fas fa-star ctext10 list-inline-item1 " style={{ color: "orange" }}></i>
                                                </Link>
                                              </li>
                                              <li className=" list-inline-item">
                                                <Link to="#">
                                                  <i className="fas fa-star ctext10 list-inline-item1 " style={{ color: "orange" }}></i>
                                                </Link>
                                              </li>
                                              <li className=" list-inline-item">
                                                <Link to="#">
                                                  <i className="fas fa-star ctext10 list-inline-item1 " style={{ color: "orange" }}></i>
                                                </Link>
                                              </li>
                                              <li className=" list-inline-item">
                                                <Link to="#">
                                                  <i className="fas fa-star ctext10 list-inline-item1 " style={{ color: "orange" }}></i>
                                                </Link>
                                              </li>
                                              <li className=" list-inline-item">
                                                <Link to="#">
                                                  <i className="fas fa-star ctext10 list-inline-item1 " style={{ color: "orange" }}></i>
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <h5 className="sub_title ctext12">
                                          A high performance Mac with a long
                                          lasting battery
                                        </h5>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="review_content_para mb30">
                                    <p className="mt0 mb30 changelinkfont">
                                      This is an unusually large advance over
                                      previous models, especially in raw
                                      computing power, but also in fun things
                                      like screen and headphone support.
                                    </p>
                                  </div>
                                  <ul className="mb20">
                                    <li className="list-inline-item mb5-414">
                                      <img
                                        src={review}
                                        alt="review-img"
                                        style={{
                                          width: "60px",
                                          height: "60px",
                                        }}
                                      />
                                    </li>
                                    <li className="list-inline-item mb5-414">
                                      <img
                                        src={review}
                                        alt="review-img"
                                        style={{
                                          width: "60px",
                                          height: "60px",
                                        }}
                                      />
                                    </li>
                                    <li className="list-inline-item mb5-414">
                                      <img
                                        src={review}
                                        alt="review-img"
                                        style={{
                                          width: "60px",
                                          height: "60px",
                                        }}
                                      />
                                    </li>
                                  </ul>
                                  <div className="review_cansel_btns d-flex mb30">
                                    <div
                                      className="review_post_meta ctext12"
                                      style={{ color: "gray" }}
                                    >
                                      Color Family:Gold, Bracelet Size:One Size
                                    </div>
                                  </div>
                                  <div className="mbp_first d-flex align-items-center mb20">
                                    <div className="flex-shrink-0"> </div>
                                    <div className="flex-grow-1 ms-md-4 ms-0">
                                      <div className="d-block d-md-flex">
                                        <div className="sspd_postdate me-2 mb10-sm">
                                          <div className="sspd_review">
                                            <ul className="mb0 cp0">
                                              <li className=" list-inline-item">
                                                <Link to="#">
                                                  <i className="fas fa-star ctext10 list-inline-item1 " style={{ color: "orange" }}></i>
                                                </Link>
                                              </li>
                                              <li className=" list-inline-item">
                                                <Link to="#">
                                                  <i className="fas fa-star ctext10 list-inline-item1 " style={{ color: "orange" }}></i>
                                                </Link>
                                              </li>
                                              <li className=" list-inline-item">
                                                <Link to="#">
                                                  <i className="fas fa-star ctext10 list-inline-item1 " style={{ color: "orange" }}></i>
                                                </Link>
                                              </li>
                                              <li className=" list-inline-item">
                                                <Link to="#">
                                                  <i className="fas fa-star ctext10 list-inline-item1 " style={{ color: "orange" }}></i>
                                                </Link>
                                              </li>
                                              <li className=" list-inline-item">
                                                <Link to="#">
                                                  <i className="fas fa-star ctext10 list-inline-item1 " style={{ color: "orange" }}></i>
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <h5 className="sub_title ctext12">
                                          A high performance Mac with a long
                                          lasting battery
                                        </h5>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="review_content_para mb30">
                                    <p className="mt15 mb30 changelinkfont">
                                      This is an unusually large advance over
                                      previous models, especially in raw
                                      computing power, but also in fun things
                                      like screen and headphone support.
                                    </p>
                                  </div>
                                  <ul className="mb20">
                                    <li className="list-inline-item mb5-414">
                                      <img
                                        src={review}
                                        alt="review-img"
                                        style={{
                                          width: "60px",
                                          height: "60px",
                                        }}
                                      />
                                    </li>
                                    <li className="list-inline-item mb5-414">
                                      <img
                                        src={review}
                                        alt="review-img"
                                        style={{
                                          width: "60px",
                                          height: "60px",
                                        }}
                                      />
                                    </li>
                                    <li className="list-inline-item mb5-414">
                                      <img
                                        src={review}
                                        alt="review-img"
                                        style={{
                                          width: "60px",
                                          height: "60px",
                                        }}
                                      />
                                    </li>
                                  </ul>
                                  <div className="review_cansel_btns d-flex mb30 bb1 pb30">
                                    <Link to="#" className="btn me-2">
                                      Helpful
                                    </Link>
                                    <Link to="#" className="btn">
                                      Report abuse
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mt-3">
              <RelatedProduct />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
