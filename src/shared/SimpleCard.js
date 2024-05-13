import React from "react";
import { Link, useNavigate } from "react-router-dom";
import StarRating from "./StarRating";

const SimpleCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="best-productCard">
      <div className="best-productCard-Header">
        <div className="cardImage">
          <img
            src={item?.image}
            alt="Best"
            style={{ width: "240px", height: "210px" }}
          />
        </div>
      </div>
      <div className="best-productCard-Body cardBody">
        <div className="productName title">
          <h3
            onClick={() => {
              navigate(`/product-info/${item?.slug}`);
            }}
            className="cursor-pointer"
          >
            {item?.name}
          </h3>
        </div>
        <div className="desc">
          <StarRating noOfRating={item?.no_of_ratings} />
        </div>
      </div>
    </div>
  );
};

export default SimpleCard;
