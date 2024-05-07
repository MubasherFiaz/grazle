import React from "react";
import { Link } from "react-router-dom";
import SavedAddress from "../savedAddress";

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
            <SavedAddress
              palce="Home"
              address="House # H11 Sector 45/A, Road Newyork"
              location="New, York"
            />
            <SavedAddress
              palce="Appartment"
              address="House # H11 Sector 45/A, Road Newyork"
              location="New, York"
            />
            <SavedAddress
              palce="Office"
              address="House # H11 Sector 45/A, Road Newyork"
              location="New, York"
            />
            <div className="d-flex my-4 customtbtn">
              <h3>
                <Link to={"/shippingaddress"}>
                  <i className="fa-regular fa-square-plus ms-3 me-2"></i>
                  Add New Delivery Address
                </Link>
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
