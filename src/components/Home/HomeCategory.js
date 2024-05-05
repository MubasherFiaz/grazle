import React from "react";
import category from "../../assets/images/shop-items/ct11.png";
import category1 from "../../assets/images/shop-items/epb2.png";
import category2 from "../../assets/images/shop-items/ct9.png";
import category3 from "../../assets/images/shop-items/epb3.png";
import category4 from "../../assets/images/shop-items/epb1.png";
import category5 from "../../assets/images/shop-items/ct7.png";
import category6 from "../../assets/images/shop-items/ct10.png";
import rasm from "../../assets/img/rasm (3).png";
import rasm1 from "../../assets/img/rasm (4).png";
import rasm2 from "../../assets/img/rasm (5).png";
import rasm3 from "../../assets/img/rasm (6).png";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import Carousel from "../carousel";

const HomeCategory = () => {
  const items = [
    { id: "1", category: "categories", image: category },
    { id: "2", category: "categories", image: category1 },
    { id: "3", category: "categories", image: category2 },
    { id: "4", category: "categories", image: category3 },
    { id: "5", category: "categories", image: category4 },
    { id: "6", category: "categories", image: category5 },
    { id: "7", category: "categories", image: category6 },
  ];
  const card = [
    {
      id: "1",
      type: "Small appliances",
      discount: "Upto 40% of kitchen products",
      image: rasm,
      color: "#f3dfd9 ",
      bcolor: "#BC5A3D",
    },
    {
      id: "2",
      type: "Small appliances",
      discount: "Upto 40% of kitchen products",
      image: rasm1,
      color: "#fbeccc",
      bcolor: "#FE9800",
    },
    {
      id: "3",
      type: "Small appliances",
      discount: "Upto 40% of kitchen products",
      image: rasm2,
      color: "#e3e2dd",
      bcolor: "#6B6A56",
    },
    {
      id: "4",
      type: "Small appliances",
      discount: "Upto 40% of kitchen products",
      image: rasm3,
      color: "#d2ecda",
      bcolor: "#4FAD2E",
    },
  ];

  return (
    <div>
      <section className="top-category pb60 pt70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shop_item_7grid_slider nav_none dots_none d-flex justify-content-around">
                <Carousel
                  spaceBetween={20}
                  navigation={false}
                  pagination={false}
                  isResponsive={true}
                >
                  {items?.map((item) => {
                    return (
                      <SwiperSlide key={item.id}>
                        <div className="item">
                          <Link style={{ textDecoration: "none" }} to="#">
                            <div className="iconbox home6_style">
                              <div className="icon">
                                <img
                                  src={item.image}
                                  alt="Category Image"
                                  className="w-100 h-100"
                                />
                              </div>
                              <div className="details">
                                <h5 className="title text-black">
                                  {item.category}
                                </h5>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="clothing-product pt0">
        <div className="container  p-4 bgc-white bdrs6">
          <div className="row ">
            <div className="col-lg-12">
              <div className="popular_listing_sliders row ui_kit_tab style2">
                <div className="tab-content col-lg-12" id="nav-tabContent4">
                  <div
                    className="tab-pane fade show active"
                    id="nav-tabhair"
                    role="tabpanel"
                    aria-labelledby="nav-tabhair-tab"
                  >
                    <div className="row">
                      {card.map((items) => (
                        <div
                          className="col-sm-6 col-lg-6 pt-1 col-xl-3"
                          key={items.id}
                        >
                          <div
                            className="banner_one home1_style color2 home4_style h450"
                            style={{ backgroundColor: items.color }}
                          >
                            <div className="thumb">
                              <img
                                className="float-end"
                                src={items.image}
                                alt="smartwatch"
                              />
                            </div>
                            <div className="details">
                              <h3
                                className="title"
                                style={{ color: items.bcolor }}
                              >
                                {items.type}
                              </h3>
                              <p
                                className="para color-light-blue fw500"
                                style={{ color: items.bcolor }}
                              >
                                {items.discount}
                              </p>
                              <Link
                                to="#"
                                className="shop_btn"
                                style={{
                                  color: items.bcolor,
                                  textDecoration: "none",
                                }}
                              >
                                Shop Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCategory;
