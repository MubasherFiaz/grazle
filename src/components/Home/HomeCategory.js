import React from "react";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import Carousel from "../carousel";

const HomeCategory = ({ data }) => {
  const colors = {
    0: "#BC5A3D",
    1: "#FE9800",
    2: "#6B6A56",
    3: "#4FAD2E",
  };
  const bgColors = {
    0: "#f3dfd9",
    1: "#fbeccc",
    2: "#e3e2dd",
    3: "#d2ecda",
  };
  const firstFour = data?.slice(0, 4);
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
                  pagination={true}
                  slidesPerView={5}
                >
                  {data?.map((item) => {
                    return (
                      <SwiperSlide key={item.id}>
                        <div className="item">
                          <Link style={{ textDecoration: "none" }} to="#">
                            <div className="iconbox home6_style">
                              <div className="icon lh-1 categoryCardHomePage">
                                <img
                                  src={item.image}
                                  alt="Category Image"
                                  className="w-100 h-100"
                                />
                              </div>
                              <div className="details">
                                <h5 className="title text-black fs-6">
                                  {item.name}
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
        <div className="container  p-4 bgc-white bdrs6 position-relative">
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
                    <Carousel
                      spaceBetween={20}
                      navigation={true}
                      pagination={false}
                      isResponsive={true}
                    >
                      {firstFour?.map((item, index) => {
                        return (
                          <SwiperSlide key={item.id}>
                            <div
                              className="banner_one home1_style color2 home4_style h450"
                              style={{ backgroundColor: bgColors[index] }}
                            >
                              <div className="thumb">
                                <img
                                  className="float-end"
                                  src={item.image}
                                  alt="smartwatch"
                                />
                              </div>
                              <div className="details">
                                <h3
                                  className="title"
                                  style={{ color: colors[index] }}
                                >
                                  {item.name}
                                </h3>

                                <Link
                                  to="#"
                                  className="shop_btn"
                                  style={{
                                    color: item.bcolor,
                                    textDecoration: "none",
                                  }}
                                >
                                  Shop Now
                                </Link>
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Carousel>
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
