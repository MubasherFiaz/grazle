import React, { useContext, useEffect, useState } from "react";
// @ import styles
import "./styles.css";
import StarRating from "../../shared/StarRating";
import { useAuth } from "../../context/AuthProvider";
import { globalApi } from "../../apis/AuthApis";
import ProductsCard from "../productsCard";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { CartContext } from "../../context/Context";

const ProductInfo = () => {
  const { productName } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const { setIsLoading, isLogin } = useAuth();

  const GlobelState = useContext(CartContext);
  const dispatch = GlobelState.dispatch;

  const geProductDetailData = async () => {
    try {
      setIsLoading(true);
      const response = await globalApi(
        `https://aquaconcepts78.fr/grazleBackend/api/product_details/${productName}`
      );
      setProductDetail(response.data);
      console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await geProductDetailData();
    };
    fetchData();
    window.scrollTo(0, 0);
  }, [productName]);

  const handleAddtoCart = (item) => {
    if (isLogin) {
      dispatch({ type: "ADD", payload: item });
      toast.success("Product Added to Cart", {
        autoClose: 3000,
      });
    } else {
      toast.error("Login First to Add Product", {
        autoClose: 3000,
      });
    }
  };

  return (
    <section id="product-info">
      <div className="container">
        {/* <div className="main-product-image mb-5 d-flex justify-content-center align-items-center">
          <img src={productDetail?.product_image} alt="Product Image" />
        </div> */}
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
                          src={productDetail?.product_image}
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
                          src={productDetail?.product_image}
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
                          src={productDetail?.product_image}
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
                    <img src={productDetail?.product_image} alt="" />
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
                    <img src={productDetail?.product_image} alt="" />
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
                    <img src={productDetail?.product_image} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-xxl-5">
            <div className="shop_single_product_details ps-0 ps-xl-4 mt-4 mt-xl-0">
              <h3 className="fs-4 fw-bold mb-2">
                {productDetail?.title.toUpperCase()}
              </h3>
              <ul className="d-flex mediaul">
                <li className="me-3">
                  <div className="sspd_review">
                    <StarRating />
                  </div>
                </li>
                <li>3,014 reviews</li>
              </ul>
              <div className="sspd_price mb0 mt15 ctext14">
                ₹ {productDetail?.product?.min_max_price?.max_special_price}
              </div>
              <div className="sspd_price mb17 mt2 ctext14">
                <small>
                  <del className="mr10">
                    ₹{productDetail?.product?.min_max_price?.max_price}
                  </del>
                </small>
                <small className="text-success fw-bold">
                  {
                    productDetail?.product?.min_max_price
                      ?.discount_in_percentage
                  }
                  % off
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
                    <input
                      className="quantity-num2 shop_single_page_sidebar"
                      type="number"
                      value="3"
                    />
                    <button className="quantity-arrow-plus2 shop_single_page_sidebar">
                      {" "}
                      <i className="fa-solid fa-plus"></i>{" "}
                    </button>
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
        <div className="mb-xl-5 mb-3">
          <div
            className="tableStyle"
            dangerouslySetInnerHTML={{
              __html: productDetail?.product?.description,
            }}
          />
          <button
            className="cardButton btn btn-light-green"
            style={{ widows: "150px" }}
          >
            <span class="cart-text">Add to Cart</span>
            <span class="cart-icon">
              <i class="fas fa-shopping-cart"></i>
            </span>
          </button>
        </div>
        <div className="review-wrapper">
          <div className="review-head">
            <div className="review-heading">
              <h3>ratings & reviews</h3>
            </div>
            <div className="row align-items-start rating-area">
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 rating-border-right">
                <div className="rating-flex-wrapper">
                  <div className="rating-points d-flex align-items-center">
                    <p className="m-0">5.0</p>
                    <div className="ms-2 half-cut">very good</div>
                  </div>
                  <div className="rating-stars">
                    <StarRating />
                  </div>
                  <div className="rating-total-points">
                    <p>133 rating</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
                <div className="total-ratingwrapper">
                  <div className="d-flex align-items-center gap-3">
                    <div className="total-rating-stars flex-grow-0">
                      <StarRating />
                    </div>
                    <div className="total-rating-progress flex-grow-1">
                      <div className="progress">
                        <div
                          className="progress-bar w-75"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="total-rating-points flex-grow-1">75</div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className="total-rating-stars flex-grow-0">
                      <StarRating />
                    </div>
                    <div className="total-rating-progress flex-grow-1">
                      <div className="progress">
                        <div
                          className="progress-bar w-75"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="total-rating-points flex-grow-1">75</div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className="total-rating-stars flex-grow-0">
                      <StarRating />
                    </div>
                    <div className="total-rating-progress flex-grow-1">
                      <div className="progress">
                        <div
                          className="progress-bar w-75"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="total-rating-points flex-grow-1">75</div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className="total-rating-stars flex-grow-0">
                      <StarRating />
                    </div>
                    <div className="total-rating-progress flex-grow-1">
                      <div className="progress">
                        <div
                          className="progress-bar w-75"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="total-rating-points flex-grow-1">75</div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className="total-rating-stars flex-grow-0">
                      <StarRating />
                    </div>
                    <div className="total-rating-progress flex-grow-1">
                      <div className="progress">
                        <div
                          className="progress-bar w-75"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="total-rating-points flex-grow-1">75</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="review-body">
            <div className="rating-filters d-xl-flex justify-content-between">
              <div class="dropdown">
                <button
                  class="btn filter-btn  dropdown-toggle "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filter
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <div class="dropdown">
                <button
                  class="btn filter-btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Relevence
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="review-footer">
            <div className="user-review-box d-xl-flex justify-content-between">
              <div className="review-left-content">
                <div className="user-rating-info d-flex gap-2 align-items-center mb-2">
                  <span className="user-rating-stars">
                    {" "}
                    <StarRating />
                  </span>
                  <h4>Rooshan R.</h4>
                  <p>12 month ago</p>
                </div>
                <div className="user-output-wrapper">
                  <p className="user-comment">
                    it was a little bit loose and elongated at the same time i
                    want refund please
                  </p>
                  <div className="user-output-images d-flex flex-wrap gap-3">
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                  </div>
                  <div className="product-metas d-flex flex-xl-row flex-column gap-xl-3 gap-1">
                    <p>color family: gold</p>
                    <p>bracelet size : one size</p>
                  </div>
                </div>
              </div>
              <div className="review-right-content">
                <p>12 month ago</p>
              </div>
            </div>
            <div className="user-review-box d-xl-flex justify-content-between">
              <div className="review-left-content">
                <div className="user-rating-info d-flex gap-2 align-items-center mb-2">
                  <span className="user-rating-stars">stars</span>
                  <h4>Rooshan R.</h4>
                  <p>12 month ago</p>
                </div>
                <div className="user-output-wrapper">
                  <p className="user-comment">
                    it was a little bit loose and elongated at the same time i
                    want refund please
                  </p>
                  <div className="user-output-images d-flex flex-wrap gap-3">
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                  </div>
                  <div className="product-metas d-flex flex-xl-row flex-column gap-xl-3 gap-1">
                    <p>color family: gold</p>
                    <p>bracelet size : one size</p>
                  </div>
                </div>
              </div>
              <div className="review-right-content">
                <p>12 month ago</p>
              </div>
            </div>
            <div className="user-review-box d-xl-flex justify-content-between">
              <div className="review-left-content">
                <div className="user-rating-info d-flex gap-2 align-items-center mb-2">
                  <span className="user-rating-stars">
                    {" "}
                    <StarRating />
                  </span>
                  <h4>Rooshan R.</h4>
                  <p>12 month ago</p>
                </div>
                <div className="user-output-wrapper">
                  <p className="user-comment">
                    it was a little bit loose and elongated at the same time i
                    want refund please
                  </p>
                  <div className="user-output-images d-flex flex-wrap gap-3">
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                  </div>
                  <div className="product-metas d-flex flex-xl-row flex-column gap-xl-3 gap-1">
                    <p>color family: gold</p>
                    <p>bracelet size : one size</p>
                  </div>
                </div>
              </div>
              <div className="review-right-content">
                <p>12 month ago</p>
              </div>
            </div>
            <div className="user-review-box d-xl-flex justify-content-between">
              <div className="review-left-content">
                <div className="user-rating-info d-flex gap-2 align-items-center mb-2">
                  <span className="user-rating-stars">
                    {" "}
                    <StarRating />
                  </span>
                  <h4>Rooshan R.</h4>
                  <p>12 month ago</p>
                </div>
                <div className="user-output-wrapper">
                  <p className="user-comment">
                    it was a little bit loose and elongated at the same time i
                    want refund please
                  </p>
                  <div className="user-output-images d-flex flex-wrap gap-3">
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                  </div>
                  <div className="product-metas d-flex flex-xl-row flex-column gap-xl-3 gap-1">
                    <p>color family: gold</p>
                    <p>bracelet size : one size</p>
                  </div>
                </div>
              </div>
              <div className="review-right-content">
                <p>12 month ago</p>
              </div>
            </div>
            <div className="user-review-box d-xl-flex justify-content-between">
              <div className="review-left-content">
                <div className="user-rating-info d-flex gap-2 align-items-center mb-2">
                  <span className="user-rating-stars">
                    {" "}
                    <StarRating />
                  </span>
                  <h4>Rooshan R.</h4>
                  <p>12 month ago</p>
                </div>
                <div className="user-output-wrapper">
                  <p className="user-comment">
                    it was a little bit loose and elongated at the same time i
                    want refund please
                  </p>
                  <div className="user-output-images d-flex flex-wrap gap-3">
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                  </div>
                  <div className="product-metas d-flex flex-xl-row flex-column gap-xl-3 gap-1">
                    <p>color family: gold</p>
                    <p>bracelet size : one size</p>
                  </div>
                </div>
              </div>
              <div className="review-right-content">
                <p>12 month ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3>More from frequently Our Store</h3>
          <div className="row">
            {productDetail?.related_products?.product.map((item) => (
              <div
                className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 mb-3"
                key={item.id}
              >
                <ProductsCard
                  item={item}
                  onClick={() => {
                    handleAddtoCart(item);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
