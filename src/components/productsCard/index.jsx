import React from "react";
// @import components
import StarRating from "../../shared/StarRating";
// @ import media
import Heart from "../../assets/svg/heart.svg";
// @ import css
import "./index.css";
import { useNavigate } from "react-router-dom";

const ProductsCard = ({ item, onClick }) => {
  const navigate = useNavigate();
  return (
    <div className="cardWrapper">
      <div className="cardHeader">
        <div className="productImage">
          <img src={item?.image} alt="Product Image" />
        </div>
        <div className="features">
          <div className="sale">
            <button>flash sale</button>
          </div>
          <div className="heartIcon">
            <img src={Heart} alt="Heart" />
          </div>
        </div>
      </div>
      <div className="cardBody">
        <div className="productName">
          <h3
            onClick={() => {
              navigate(`/product-info/${item?.id}`);
            }}
            className="cursor-pointer"
          >
            {item?.name}
          </h3>
        </div>
        <div className="productRating">
          <StarRating />
        </div>
        <div className="productPrice">
          <h3>₹{item?.min_max_price?.max_special_price?.toFixed(2)}</h3>
          <small>
            <del>₹{item?.min_max_price?.max_price}</del>
          </small>
          <small>
            <span className="text-success">
              {item?.min_max_price?.discount_in_percentage}% off
            </span>
          </small>
        </div>
      </div>
      <div className="cardFooter">
        <button className="cardButton btn btn-light-green" onClick={onClick}>
          <span class="cart-text">Add to Cart</span>
          <span class="cart-icon">
            <i class="fas fa-shopping-cart"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
