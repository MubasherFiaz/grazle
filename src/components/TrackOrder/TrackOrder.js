import React from "react";
import { Link } from "react-router-dom";

const TrackOrder = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-8 m-auto track">
              <div className="card shadow p-4">
                <h4 className="heading">
                  To track your order please enter your order ID in the box
                  below and press the “Track Order’ button. This was given to
                  you on your recipt and in the confirmation email you should
                  have recived.
                </h4>
                <div className="row mt-3">
                  <div className="col-12 mb-3 tracko">
                    <h5 className="input-heading">Order ID *</h5>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Order ID"
                    />
                  </div>
                  <div className="col-12 mb-3 tracko">
                    <h5>Billing Email *</h5>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Order ID"
                    />
                  </div>

                  <div className="col-12 mb-3">
                    <Link to="" className="btn banner-btn btn-thm1111">
                      Track Order
                    </Link>
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

export default TrackOrder;
