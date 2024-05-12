import React from "react";
import Modal from "../genericModal";
import "./styles.css";

const LogoutModal = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      isSize={"md"}
      body={
        <>
          <div className="modal-wrapper">
            <h3>logout</h3>
            <p>Are you sure you want to log out?</p>
            <button onClick={onHide} className="btn px-3">
              yes,logout
            </button>
          </div>
        </>
      }
    />
  );
};

export default LogoutModal;
