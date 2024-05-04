import React from "react";

const Address = () => {
  return (
    <>
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

          <div className="container mb-5">
            <div className="row my-3 customaddreschange">
              <h1>
                Shipping Address{" "}
                <span style={{ fontSize: "24px", color: "#777777" }}>
                  {" "}
                  (3 Addresses)
                </span>
              </h1>
            </div>
            <div className="card shadow rounded-4 mb-3 p-4">
              <div className="d-flex justify-content-between mx-1 customaddressh0me">
                <h3>Home</h3>
                <input
                  type="radio"
                  name="check"
                  id="check"
                  className="bg-danger customradio"
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              <div className="d-flex my-2 customaddresshomeicon">
                <i
                  className="fa-light fa-house me-3"
                  style={{ fontSize: "60px", color: "#777777" }}
                ></i>
                <div className="customset">
                  <h4>
                    Shipping Address{" "}
                    <span style={{ fontSize: "18px", color: "#777777" }}>
                      {" "}
                      (3 Addresses)
                    </span>
                  </h4>
                  <p style={{ fontSize: "16px", color: "#777777" }}>
                    {" "}
                    House # H11 Sector 45/A, Road Newyork
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex customaddressi mt-2 mt-md-0">
                  <i
                    className="fa-light fa-location-dot me-2 pt-1"
                    style={{ fontSize: "16px", color: "#777777" }}
                  ></i>
                  <p style={{ fontSize: "16px", color: "#777777" }}>
                    New, York
                  </p>
                </div>
                <div className="d-flex customaddressicon">
                  <i
                    className="fa-regular fa-pen-to-square text-success p-md-2 p-1 rounded-3 mx-2 align-content-center"
                    style={{ fontSize: "20px", backgroundColor: "#5EF7000A" }}
                  ></i>
                  <i
                    className="fa-solid fa-trash-can text-danger mx-2 p-md-2 p-1 rounded-3 align-content-center"
                    style={{ fontSize: "20px", backgroundColor: "#F700000A" }}
                  ></i>
                </div>
              </div>
            </div>
            <div className="card shadow rounded-4 mb-3 p-4">
              <div className="d-flex justify-content-between mx-1 customaddressh0me">
                <h3>Appartment</h3>
                <input
                  type="radio"
                  name="check"
                  id="check"
                  className="bg-danger customradio"
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              <div className="d-flex my-2 customaddresshomeicon">
                <i
                  className="fa-light fa-city me-3"
                  style={{ fontSize: "60px", color: "#777777" }}
                ></i>
                <div className="customset">
                  <h4>
                    Shipping Address{" "}
                    <span style={{ fontSize: "18px", color: "#777777" }}>
                      {" "}
                      (3 Addresses)
                    </span>
                  </h4>
                  <p style={{ fontSize: "16px", color: "#777777" }}>
                    {" "}
                    House # H11 Sector 45/A, Road Newyork
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center ">
                <div className="d-flex customaddressi">
                  <i
                    className="fa-light fa-location-dot me-2 pt-1"
                    style={{ fontSize: "16px", color: "#777777" }}
                  ></i>
                  <p style={{ fontSize: "16px", color: "#777777" }}>
                    New, York
                  </p>
                </div>
                <div className="d-flex customaddressicon">
                  <i
                    className="fa-regular fa-pen-to-square text-success p-md-2 p-1 rounded-3 mx-2 align-content-center"
                    style={{ fontSize: "20px", backgroundColor: "#5EF7000A" }}
                  ></i>
                  <i
                    className="fa-regular fa-trash text-danger mx-2 p-md-2 p-1 rounded-3 align-content-center"
                    style={{ fontSize: "20px", backgroundColor: "#F700000A" }}
                  ></i>
                </div>
              </div>
            </div>
            <div className="card shadow rounded-4 mb-3 p-4">
              <div className="d-flex justify-content-between mx-1 customaddressh0me">
                <h3>Office</h3>
                <input
                  type="radio"
                  name="check"
                  id="check"
                  className="bg-danger customradio"
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              <div className="d-flex my-2 customaddresshomeicon">
                <i
                  className="fa-light fa-hotel me-3"
                  style={{ fontSize: "60px", color: "#777777" }}
                ></i>
                <div className="customset">
                  <h4>
                    Shipping Address{" "}
                    <span style={{ fontSize: "18px", color: "#777777" }}>
                      {" "}
                      (3 Addresses)
                    </span>
                  </h4>
                  <p style={{ fontSize: "16px", color: "#777777" }}>
                    {" "}
                    House # H11 Sector 45/A, Road Newyork
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex customaddressi">
                  <i
                    className="fa-light fa-location-dot me-2 pt-1"
                    style={{ fontSize: "16px", color: "#777777" }}
                  ></i>
                  <p style={{ fontSize: "16px", color: "#777777" }}>
                    New, York
                  </p>
                </div>
                <div className="d-flex customaddressicon">
                  <i
                    className="fa-regular fa-pen-to-square text-success p-md-2 p-1 rounded-3 mx-2 align-content-center"
                    style={{ fontSize: "20px", backgroundColor: "#5EF7000A" }}
                  ></i>
                  <i
                    className="fa-regular fa-trash text-danger mx-2 p-md-2 p-1 rounded-3 align-content-center"
                    style={{ fontSize: "20px", backgroundColor: "#F700000A" }}
                  ></i>
                </div>
              </div>
            </div>
            <div className="d-flex my-4 customtbtn">
              <h3>
                <i className="fa-regular fa-square-plus ms-3 me-2"></i>
                Add New Delivery Address
              </h3>
            </div>
            <button
              type="button"
              className=" text-white w-100 rounded-2 py-1 btn-thm1111"
              style={{
                backgroundColor: "red",
                border: "none",
                fontSize: "22px",
              }}
            >
              {" "}
              Procedd to Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
