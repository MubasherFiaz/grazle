import React from "react";
import tick from "../../assets/image/tick.png";
import ProgressBarWithTicks from "./ProgressBarWithTicks";

const Confirm = () => {
  const progressValue = 50;
  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className="row d-flex justify-content-center align-items-center my-3"
            style={{
              width: "100%",
              backgroundColor: "#F8F8F8",
              color: "#909198",
              height: "40px",
            }}
          >
            Home - Shop - Add to Cart
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-8 col-12 ">
                <div className="card shadow my-4">
                  <div className="text-center my-4 customconfim">
                    <img
                      src={tick}
                      alt=""
                      style={{ width: "15rem", height: "9rem" }}
                    />
                    <h5 style={{ color: "#434343", fontSize: "24px" }}>
                      Thank You
                    </h5>
                    <h5 style={{ color: "#434343", fontSize: "48px" }}>
                      Your Order is Confirmed
                    </h5>
                    <p
                      style={{ color: "#434343" }}
                      className="custompresponsive"
                    >
                      We will be sending you an email confirmation to
                      user888@email.com shortly
                    </p>
                  </div>
                  <div
                    className="card p-3 mx-2 my-3"
                    style={{ background: "#F8F8F8" }}
                  >
                    <div className="d-flex justify-content-center align-items-center custompresponsive">
                      <p style={{ color: "#434343" }}>
                        {" "}
                        Order #6767676 was placed on january 12, 2024 and is
                        currently in progress{" "}
                      </p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center my-4">
                      <div style={{ width: "80%" }}>
                        <ProgressBarWithTicks value={progressValue} />
                      </div>
                    </div>
                    <div className="d-flex mt-5 pt-2 ms-4">
                      <p
                        className="custompresponsive"
                        style={{ color: "#74767E" }}
                      >
                        Expected Delivery Date:{" "}
                        <span className="text-black"> 16 jan, 2024 </span>{" "}
                      </p>{" "}
                      <span className="ms-4 text-danger textdanger">
                        {" "}
                        Track Your Order{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-12 ">
                <div className="card shadow my-3">
                  <div className="card-header d-flex justify-content-between">
                    <div className="custompresponsive">
                      <p style={{ color: "#434343" }}>Order Detail</p>
                      <h5 className="custompresponsive">#4577567</h5>
                    </div>
                    <div className="custompresponsive">
                      {" "}
                      <p style={{ color: "#434343" }}>Pay with Paypal</p>
                      <button className="btn btn-outline-dark custompresponsive">
                        <i className="fa-light fa-download"></i> Download
                        Invoice
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex custompresponsive">
                      <i
                        className="fa-light fa-truck mt-md-1 me-1"
                        style={{ fontSize: "16px" }}
                      ></i>{" "}
                      <b> Delivery Address</b>{" "}
                      <p className="text-danger ms-3">Change Details</p>
                    </div>
                    <hr />
                    <p
                      className="custompresponsive"
                      style={{ color: "#434343" }}
                    >
                      Vvip Addresses, Raj Nagar Road abc Ghaziabad Road Street 3
                    </p>
                    <hr />

                    <div className="d-flex custompresponsive">
                      <i className="fa-regular fa-money-check-dollar mt-1 me-1"></i>{" "}
                      <b> Billing Address</b>
                    </div>
                    <hr />

                    <p
                      className="custompresponsive"
                      style={{ color: "#434343" }}
                    >
                      Vvip Addresses, Raj Nagar Road abc Ghaziabad Road Street 3
                    </p>
                    <hr />

                    <div className="d-flex custompresponsive">
                      <i className="fa-light fa-address-book mt-1 me-1"></i>
                      <b> Billing Address</b>
                    </div>
                    <hr />

                    <p
                      className="custompresponsive"
                      style={{ color: "#434343" }}
                    >
                      user453895@email.com <br />
                      +095665444 <br /> +095665444{" "}
                    </p>
                    <div className="card">
                      <div
                        className="card-header p-3"
                        style={{ borderRadius: "15px" }}
                      >
                        <h3
                          className="py-1 ps-1 custompresponsive"
                          style={{ background: "white" }}
                        >
                          Order Summry
                        </h3>
                        <div className="d-flex justify-content-between align-items-center">
                          <div
                            style={{ color: "#434343" }}
                            className="custompresponsive"
                          >
                            <p>Sub Total</p>
                            <p> Delivery</p>
                          </div>
                          <div
                            style={{ color: "#434343" }}
                            className="custompresponsive"
                          >
                            <p>$567.0</p>
                            <p> $567.0</p>
                          </div>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center custompresponsive">
                          <h6>Total</h6>
                          <h6>$567.0</h6>
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
  );
};

export default Confirm;
