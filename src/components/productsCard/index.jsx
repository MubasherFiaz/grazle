import React from "react";
// @import components
import StarRating from "../../shared/StarRating";
// @ import media
import Heart from "../../assets/svg/heart.svg";
// @ import css
import "./index.css";

const ProductsCard = ({ items, onClick }) => {
  const item = items;
  return (
    <div className="cardWrapper">
      <div className="cardHeader">
        <div className="productImage">
          <img src={item.image} />
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
          <h3>{item.name}</h3>
        </div>
        <div className="productRating">
          <StarRating />
        </div>
        <div className="productPrice">
          <h3>₹{item.price}</h3>
          <small>
            <del>₹{item.discount}</del>
          </small>
          <small>
            <span className="text-success">{item.discountPercentage}% off</span>
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
