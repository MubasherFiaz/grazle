import React, { useContext, useState } from "react";
import object from "../../assets/image/Rectangle 1951.png";
import { CartContext } from "../../context/Context";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const items = [
  {
    id: "1",
    name: "Wear Saka Store",
    price: "345.000",
    discount: "345.000",
    image: object,
  },
  {
    id: "2",
    name: "Wear Saka Store",
    price: "345.000",
    discount: "345.000",
    image: object,
  },
  {
    id: "3",
    name: "Wear Saka Store",
    price: "345.000",
    discount: "345.000",
    image: object,
  },
  {
    id: "4",
    name: "Wear Saka Store",
    price: "345.000",
    discount: "345.000",
    image: object,
  },
  {
    id: "5",
    name: "Wear Saka Store",
    price: "345.000",
    discount: "345.000",
    image: object,
  },
];

const CartComponent = () => {
  const navigate = useNavigate();
  const GlobelState = useContext(CartContext);
  const state = GlobelState.state;
  const dispatch = GlobelState.dispatch;
  let TotalValue = 0;
  let totalValuebeforeDisscount = 0;
  return (
    <div>
      <div className="body_content_wrapper position-relative mt-2">
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
          <div style={{ width: "180px" }}>
            <span
              style={{
                color: "#909198",
                fontSize: "14px",
                fontFamily: "Manrope",
                fontWeight: "400",
                textDecoration: "none",
                lineHeight: "24px",
                wordWrap: "break-word",
              }}
              className="home"
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
              className="shop"
            >
              - Shop - Add to Cart
            </span>
          </div>
        </div>
      </div>
      <section className="shop-cart pt30">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex align-items-center">
              <h3 className="fs-4 fw-bold me-5">Cart</h3>
              <p className="fs-4 fw-bold">
                ({GlobelState.state.length} Products)
              </p>
            </div>
          </div>
          <div className="row mt15">
            <div className="col-lg-8 col-xl-9 cart-items">
              <div>
                {state?.map((item) => {
                  TotalValue =
                    TotalValue +
                    Number(item?.min_max_price?.max_special_price) *
                      item.quantity;
                  totalValuebeforeDisscount =
                    totalValuebeforeDisscount +
                    Number(item?.min_max_price?.max_price) * item.quantity;
                  return (
                    <div
                      key={item.id}
                      className="card px-4 mb-4 py-3 shadow cart-card"
                    >
                      <div className="card-header d-flex ">
                        <h4 className="mb-0">{item.name}</h4>
                      </div>
                      <div className="card-body">
                        <div className=" mb-5 d-flex justify-content-between add-more-div">
                          <h6 className="mb-0 " style={{ color: "#777777" }}>
                            Add More Products
                          </h6>
                          <h6 className="mb-0">
                            <Link to={"/"} className="text-themeColor">
                              <i className="fa-solid fa-plus"></i> Add
                            </Link>
                          </h6>
                        </div>
                        <div className="d-flex justify-content-between customcolumn">
                          <div className="d-flex cart-check customcolumn">
                            <label className="custom_checkbox mt-4 d-none d-md-block">
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                            <img
                              src={item.image}
                              alt=""
                              className="me-md-4"
                              style={{ width: "100px", height: "100px" }}
                            />
                            <div className="customcart">
                              <div style={{ maxWidth: "70ch" }}>
                                <h4 className="text-ellipsis">{item.name}</h4>
                              </div>
                              <p>
                                <span
                                  className="badge badge-danger badge-soft me-2"
                                  style={{ color: "#F70000" }}
                                >
                                  {item?.min_max_price?.discount_in_percentage}%
                                </span>
                                <del>₹{item?.min_max_price?.max_price}</del>
                              </p>
                              <h5 style={{ fontSize: "18px" }}>
                                ₹ {item?.min_max_price?.max_special_price}
                              </h5>
                            </div>
                          </div>
                          <div className="customrow mt-2 mt-md-0">
                            <div className="cart_btn home_page_sidebar d-grid">
                              <div className="quantity-block home_page_sidebar border">
                                <button
                                  className="quantity-arrow-minus2 shop_single_page_sidebar"
                                  onClick={() => {
                                    if (item.quantity > 1) {
                                      dispatch({
                                        type: "DECREASE",
                                        payload: item,
                                      });
                                    } else {
                                      dispatch({
                                        type: "DELETE",
                                        payload: item,
                                      });
                                    }
                                  }}
                                >
                                  <i className="fa-solid fa-minus"></i>
                                </button>
                                <input
                                  className="quantity-num2 shop_single_page_sidebar"
                                  type="number"
                                  value={item.quantity}
                                />
                                <button
                                  className="quantity-arrow-plus2 shop_single_page_sidebar"
                                  onClick={() =>
                                    dispatch({
                                      type: "INCREASE",
                                      payload: item,
                                    })
                                  }
                                >
                                  <i className="fa-solid fa-plus"></i>
                                </button>
                              </div>
                            </div>
                            <div className="d-flex justify-content-evenly mt-5">
                              <i className="fa-solid fa-pen-to-square edit"></i>
                              <i
                                className="fa-solid fa-trash-can del cursor-pointer"
                                onClick={() => {
                                  dispatch({ type: "DELETE", payload: item });
                                }}
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* More card elements */}
            </div>
            <div className="col-lg-4 col-xl-3">
              <div
                className="order_sidebar_widget style2 shadow"
                style={{ border: "none", borderRadius: "15px" }}
              >
                <h4 className="title">Promo Code</h4>
                <div className="search">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type Here"
                  />
                  <button>Apply</button>
                </div>
                <hr />
                <div className="cart-total">
                  <h4 class="title mt-4">Cart Total</h4>
                  <div className="d-flex justify-content-between align-items-start">
                    <label></label>
                    <p>₹{totalValuebeforeDisscount}</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-start">
                    <label>Shipping</label>
                    <p>Free</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-start border-bottom">
                    <label>Discount</label>
                    <p>₹{totalValuebeforeDisscount - TotalValue}</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-start mt-2">
                    <label>Cart Total</label>
                    <p>₹{TotalValue}</p>
                  </div>
                </div>

                <div className="ui_kit_button payment_widget_btn">
                  <button
                    type="button"
                    className="btn btn-thm btn-block"
                    onClick={() => {
                      if (state.length > 0) {
                        navigate("/alladdress");
                      } else {
                        toast.error("First Add to Cart Product");
                      }
                    }}
                  >
                    Continue Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartComponent;
