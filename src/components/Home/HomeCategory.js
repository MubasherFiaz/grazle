import React from "react";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import Carousel from "../carousel";

const HomeCategory = ({ data }) => {
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
    </div>
  );
};

export default HomeCategory;
