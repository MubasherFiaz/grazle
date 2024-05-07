import React, { Fragment, useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import pimg from "../../assets/images/shop-items/shop-item57.png";
import pimg1 from "../../assets/images/shop-items/shop-item58.png";
import pimg2 from "../../assets/images/shop-items/shop-item59.png";
import pimg3 from "../../assets/images/shop-items/shop-item60.png";
import pimg4 from "../../assets/images/shop-items/shop-item61.png";
import Carousel from "../carousel";
import { SwiperSlide } from "swiper/react";
import ProductsCard from "../productsCard";
import { CartContext } from "../../context/Context";

const items = [
  {
    id: "1",
    product: "FRUITS & VEGS",
    name: "Great Value Ultra Strong Paper Towels, Splits Sheets",
    price: "32.5",
    discount: "45",
    image: pimg,
  },
  {
    id: "2",
    product: "FRUITS & VEGS",
    name: "Great Value Ultra Strong Paper Towels, Splits Sheets",
    price: "32.5",
    discount: "45",
    image: pimg1,
  },
  {
    id: "3",
    product: "FRUITS & VEGS",
    name: "Great Value Ultra Strong Paper Towels, Splits Sheets",
    price: "32.5",
    discount: "45",
    image: pimg2,
  },
  {
    id: "4",
    product: "FRUITS & VEGS",
    name: "Great Value Ultra Strong Paper Towels, Splits Sheets",
    price: "32.5",
    discount: "45",
    image: pimg3,
  },
  {
    id: "5",
    product: "FRUITS & VEGS",
    name: "Great Value Ultra Strong Paper Towels, Splits Sheets",
    price: "32.5",
    discount: "45",
    image: pimg4,
  },
];
const RelatedProduct = () => {
  const GlobelState = useContext(CartContext);
  const dispatch = GlobelState.dispatch;
  return (
    <div>
      <section className="trending-product pt0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div class="main-title d-flex justify-content-between">
                <h2 className="title title111 mb-0">
                  More from frequently Our Store
                </h2>
              </div>

              <div className="position-relative">
                <Carousel
                  spaceBetween={20}
                  navigation={true}
                  pagination={false}
                  isResponsive={true}
                >
                  {items?.map((item) => {
                    return (
                      (item.quantity = 1),
                      (
                        <SwiperSlide key={item.id}>
                          <ProductsCard items={item} />
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
    </div>
  );
};

export default RelatedProduct;
