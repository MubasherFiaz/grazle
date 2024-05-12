import React from "react";
import Modal from "react-bootstrap/Modal";
import "./styles.css";

function CustomModal(props) {
  const { show, onHide, body, isSize } = props;

  return (
    <Modal
      show={show}
      onHide={onHide}
      size={isSize}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>{body}</Modal.Body>
    </Modal>
  );
}

export default CustomModal;
