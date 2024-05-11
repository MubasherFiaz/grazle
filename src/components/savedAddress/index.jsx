import React from "react";

const SavedAddress = ({
  palce,
  address,
  location,
  name,
  number,
  onSelectAddress,
  handleDelete,
  handleEdit,
}) => {
  return (
    <div className="card shadow rounded-4 mb-3 p-4">
      <div className="d-flex justify-content-between mx-1 customaddressh0me">
        <h3>{palce.toUpperCase()}</h3>
        <input
          type="radio"
          name="check"
          id="check"
          className="bg-danger customradio"
          style={{ width: "30px", height: "30px" }}
          onClick={onSelectAddress}
        />
      </div>
      <div className="d-flex my-2 customaddresshomeicon">
        {palce.toLowerCase() === "home" ? (
          <i
            className="fa-light fa-house me-3"
            style={{ fontSize: "60px", color: "#777777" }}
          ></i>
        ) : palce.toLowerCase() === "appartment" ? (
          <i
            className="fa-light fa-city me-3"
            style={{ fontSize: "60px", color: "#777777" }}
          ></i>
        ) : (
          <i
            className="fa-light fa-hotel me-3"
            style={{ fontSize: "60px", color: "#777777" }}
          ></i>
        )}

        <div className="customset">
          <h4>
            {name} ({number})
          </h4>
          <p style={{ fontSize: "16px", color: "#777777" }}>{address}</p>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex customaddressi mt-2 mt-md-0">
          <i
            className="fa-light fa-location-dot me-2 pt-1"
            style={{ fontSize: "16px", color: "#777777" }}
          ></i>
          <p style={{ fontSize: "16px", color: "#777777" }}>{location}</p>
        </div>
        <div className="d-flex customaddressicon">
          <i
            className="fa-regular fa-pen-to-square text-success p-md-2 p-1 rounded-3 mx-2 align-content-center cursor-pointer"
            style={{ fontSize: "20px", backgroundColor: "#5EF7000A" }}
            onClick={handleEdit}
          ></i>
          <i
            className="fa-solid fa-trash-can text-danger mx-2 p-md-2 p-1 rounded-3 align-content-center cursor-pointer"
            style={{ fontSize: "20px", backgroundColor: "#F700000A" }}
            onClick={handleDelete}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default SavedAddress;
