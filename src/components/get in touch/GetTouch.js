import React from "react";
import { Link } from "react-router-dom";

const GetTouch = () => {
  return (
    <div>
      <section className="p-0">
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
              Home - Contact Us
            </div>

            <div className="col-md-8 col-12 mb-md-0 mb-4 track">
              <div className="card shadow p-4 customtouch">
                <h4 className="heading">Get in Touch</h4>
                <p>
                  Your email Address will not be published. Required fields are
                  marked*
                </p>

                <div className="row mt-3">
                  <div className="col-md-6 col-12 mb-3 tracko">
                    <h5 className="input-heading">Your Name *</h5>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-md-6 col-12 mb-3 tracko">
                    <h5>Email Address *</h5>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-12 mb-3 tracko">
                    <h5 className="input-heading">Subject *</h5>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-12 mb-3 tracko">
                    <h5 className="input-heading">Message *</h5>

                    <textarea
                      name=""
                      className="form-control"
                      id=""
                      cols="30"
                      rows="4"
                      placeholder="Name"
                    ></textarea>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 mb-3">
                    <Link
                      to=""
                      className="btn banner-btn btn-thm1111  px-lg-4 py-lg-2 px-sm-2 py-sm-1"
                    >
                      Send Message
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 ">
              <div
                className="card p-3"
                style={{ backgroundColor: "#5F0505", borderRadius: "22px" }}
              >
                <div className="text-white mb-md-4 mb-2 customaddressdiv">
                  <h2> Address</h2>
                  <p className="p-0 m-0">
                    8567 Preston Rd. Inglewood, Maine 9875
                  </p>
                </div>
                <div className="text-white mb-md-4 mb-2 customaddressdiv">
                  <h2> Contact</h2>
                  <p className="p-0 m-0">Phone: +0876-776-887</p>
                  <p className="p-0 m-0">Email: user888@gmail.com</p>
                </div>
                <div className="text-white mb-md-4 mb-2 customaddressdiv">
                  <h2>Open Time</h2>
                  <p className="p-0 m-0">Monday - Friday: 11:00 - 22:00</p>
                  <p className="p-0 m-0">Sonday - Friday: 11:00 - 22:00</p>
                </div>
                <div className="text-white mb-md-4 mb-2 customaddressdiv">
                  <h2>Stay Connected</h2>
                  <div className="d-flex justify-content-around mt-3 customicon">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-solid fa-camera"></i>
                    <i class="fa-brands fa-pinterest-p"></i>
                    <i class="fa-brands fa-youtube"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetTouch;
