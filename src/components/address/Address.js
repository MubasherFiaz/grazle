import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SavedAddress from "../savedAddress";
import { useAuth } from "../../context/AuthProvider";
import { globalApi } from "../../apis/AuthApis";
import { toast } from "react-toastify";
import { CartContext } from "../../context/Context";

const Address = () => {
  const [addressData, setAddressData] = useState(null);
  const [selectedData, setSelectedAddress] = useState(null);
  const { setIsLoading, userData } = useAuth();

  const GlobelState = useContext(CartContext);
  const state = GlobelState.state;

  const idsString = state.map((product) => product.id).join(",");
  const quantity = state.map((product) => product.quantity).join(",");

  const getAddressData = async () => {
    const formData = new FormData();
    formData.append("id", userData?.id);
    try {
      setIsLoading(true);
      const data = await globalApi(
        "https://aquaconcepts78.fr/grazleBackend/api/get_address",
        "POST",
        formData
      );
      setAddressData(data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getAddressData();
    };
    fetchData();
  }, []);

  const handleCheckOut = async () => {
    const formData = new FormData();
    formData.append("user_id", userData.id);
    formData.append("address_id", selectedData?.id);
    formData.append("mobile", selectedData?.mobile);
    formData.append("product_variant_id", idsString);
    formData.append("quantity", quantity);
    try {
      setIsLoading(true);
      const response = await globalApi(
        "https://aquaconcepts78.fr/grazleBackend/api/place-order",
        "POST",
        formData
      );
      setIsLoading(false);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      setIsLoading(false);
      toast.error(error);
      throw error;
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div
          className="row d-flex justify-content-center align-items-center my-3"
          style={{
            width: "100%",
            backgroundColor: "#F8F8F8",
            color: "#909198",
            height: "40px",
          }}
        >
          Home - Shop - Add to Cart
        </div>

        <div className="container mb-5">
          <div className="row my-3 customaddreschange">
            <h1>
              Shipping Address{" "}
              <span style={{ fontSize: "24px", color: "#777777" }}>
                {" "}
                ({addressData?.length} Addresses)
              </span>
            </h1>
          </div>
          {addressData?.map((item) => (
            <Fragment key={item.id}>
              <SavedAddress
                palce={item.type}
                address={item.address}
                location={item.city}
                name={item.name.toUpperCase()}
                number={item.mobile}
                onSelectAddress={() => {
                  setSelectedAddress(item);
                }}
              />
            </Fragment>
          ))}

          <div className="d-flex my-4 customtbtn">
            <h3>
              <Link to={"/shippingaddress"}>
                <i className="fa-regular fa-square-plus ms-3 me-2"></i>
                Add New Delivery Address
              </Link>
            </h3>
          </div>
          <button
            type="button"
            className=" text-white w-100 rounded-2 py-1 btn-thm1111"
            style={{
              backgroundColor: "red",
              border: "none",
              fontSize: "22px",
              cursor: !selectedData ? "not-allowed" : "pointer",
            }}
            disabled={!selectedData}
            onClick={() => {
              if (selectedData) {
                handleCheckOut();
              }
            }}
          >
            Procedd to Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Address;
