import React, { useContext } from "react";
import Carousel from "../carousel";
import { SwiperSlide } from "swiper/react";
import ProductsCard from "../productsCard";
import { CartContext } from "../../context/Context";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthProvider";

const HomeProduct = ({ data }) => {
  const GlobelState = useContext(CartContext);
  const dispatch = GlobelState.dispatch;
  const { islogin } = useAuth();
  const handleAddtoCart = (item) => {
    if (islogin) {
      dispatch({ type: "ADD", payload: item });
    } else {
      toast.error("Login First to Add Product", {
        autoClose: 3000,
      });
    }
  };
  return (
    <div>
      {data?.map((items) => (
        <section className="trending-product pt0" key={items.id}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="main-title d-flex justify-content-between">
                  <h2 className="title section-title">{items.front_title}</h2>
                </div>
                <div className="position-relative">
                  <Carousel
                    spaceBetween={20}
                    navigation={true}
                    pagination={false}
                    isResponsive={true}
                  >
                    {items?.product_details?.map((item) => {
                      return (
                        (item.quantity = 1),
                        (
                          <SwiperSlide key={item.id}>
                            <ProductsCard
                              item={item}
                              onClick={() => {
                                handleAddtoCart(item);
                              }}
                            />
                          </SwiperSlide>
                        )
                      );
                    })}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default HomeProduct;
