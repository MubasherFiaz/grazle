import React from "react";
// @ import dependencies
import { useNavigate } from "react-router-dom";
// @import components
import StarRating from "../../shared/StarRating";
// @ import media
import Heart from "../../assets/svg/heart.svg";
// @ import css
import "./index.css";
import { globalApi } from "../../apis/AuthApis";
import { useAuth } from "../../context/AuthProvider";
import { toast } from "react-toastify";

const ProductsCard = ({ item, onClick }) => {
  const navigate = useNavigate();
  const { userData, setIsLoading } = useAuth();

  const AddFav = async (id) => {
    const formData = new FormData();
    formData.append("user_id", userData?.id);
    formData.append("product_id", id);

    try {
      setIsLoading(true);
      const response = await globalApi(
        "https://aquaconcepts78.fr/grazleBackend/api/add_favorite",
        "POST",
        formData
      );
      setIsLoading(false);
      if (response?.error) {
        toast.error(response.message);
      } else {
        toast.success(response.message);
      }
      console.log(response, "Response");
      return response.data;
    } catch (error) {
      setIsLoading(false);
      toast.error(error);
      throw error;
    }
  };

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
          <div className="heartIcon cursor-pointer">
            <img
              src={Heart}
              alt="Heart"
              onClick={() => {
                AddFav(item.id);
                console.log(item.id);
              }}
            />
          </div>
        </div>
      </div>
      <div className="cardBody">
        <div className="productName">
          <h3
            onClick={() => {
              navigate(`/product-info/${item?.slug}`);
            }}
            className="cursor-pointer"
          >
            {item?.name}
          </h3>
        </div>
        <div className="productRating">
          <StarRating noOfRating={item?.no_of_ratings} />
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
