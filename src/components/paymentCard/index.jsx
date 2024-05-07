import React from "react";

const PaymentCard = ({ label, icon, id, isCreditCard }) => {
  return (
    <>
      {isCreditCard ? (
        <div
          class="p-4 mb-4"
          style={{
            border: "2px solid #F70000",
            background: "#fdf5f5",
            borderRadius: "11px",
          }}
        >
          <form
            class="contact_form"
            name="contact_form"
            action="#"
            method="post"
            novalidate
          >
            <div class="row">
              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input me-4 mt-1"
                    type="radio"
                    name="flexRadioDefault"
                    id={id}
                  />
                  <label class="form-label" for={id} style={{ color: "black" }}>
                    Credit Card
                  </label>
                </div>
              </div>

              <p style={{ color: "black" }}>
                Pay securely using your visa, maestro, Discover , or American
                express card.
              </p>

              <div class="col-md-12">
                <div class="form-group mb-4">
                  <label class="form-label">Card Number</label>
                  <input
                    class="form-control"
                    type="number"
                    placeholder="3455 7898 5667"
                  />
                </div>
              </div>

              <div class="col-md-4">
                <div class="form-group mb-4">
                  <label class="form-label">Name of card</label>
                  <input
                    class="form-control"
                    type="number"
                    placeholder="Name of card"
                  />
                </div>
              </div>

              <div class="col-md-4">
                <div class="form-group mb-4">
                  <label class="form-label">Expiry Date</label>
                  <input class="form-control" type="date" placeholder=" " />
                </div>
              </div>

              <div class="col-md-4">
                <div class="form-group mb-4">
                  <label class="form-label">CVC Number</label>
                  <input class="form-control" type="number" placeholder="566" />
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div class="card mb-3 border p-4" style={{ border: "1px solid #777" }}>
          <div class="col-12">
            <div class="form-check d-flex justify-content-between align-items-center">
              <div>
                <input
                  class="form-check-input me-4 mt-1"
                  type="radio"
                  name="flexRadioDefault"
                  id={id}
                />
                <label
                  class="form-label"
                  for={id}
                  style={{ color: "black", fontSize: "18px" }}
                >
                  {label}
                </label>
              </div>
              <div>
                <img src={icon} alt="visa" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentCard;
