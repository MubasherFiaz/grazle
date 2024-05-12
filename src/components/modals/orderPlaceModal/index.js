import React from "react";
import Modal from "../genericModal";
import "./styles.css";

const OrderplaceModal = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      isSize={"md"}
      body={
        <>
          <div className="modal-wrapper">
            <h3>Your order has been successfully placed</h3>
            <p>
              We will be sending you an email confirmation to user888@email.com
              shortly
            </p>
            <div className="d-flex flex-row gap-3">
              <button onClick={onHide} className="btn px-3">
                Leave a review
              </button>
              <button onClick={onHide} className="btn px-3 warning-btn">
                Leave a review
              </button>
            </div>
          </div>
        </>
      }
    />
  );
};

export default OrderplaceModal;
