import React from "react";
import Modal from "../genericModal";
import "./styles.css";

const CancelorderModal = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      isSize={"md"}
      body={
        <>
          <div className="modal-wrapper">
            <h3>cancel order</h3>
            <p>are you sure you want to cancel the ordere</p>
            <div className="d-flex flex-row gap-3">
              <button onClick={onHide} className="btn px-3">
                cancel
              </button>
              <button onClick={onHide} className="btn px-3 warning-btn">
                yes
              </button>
            </div>
          </div>
        </>
      }
    />
  );
};

export default CancelorderModal;
