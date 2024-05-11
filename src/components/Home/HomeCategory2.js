import React, { useContext } from "react";
import homeimg from "../../assets/img/2 copy.png";
import cardimg from "../../assets/images/shop-items/shop-item57.png";
import SimpleCard from "../../shared/SimpleCard";
import pimg1 from "../../assets/images/shop-items/shop-item58.png";
import pimg3 from "../../assets/images/shop-items/shop-item60.png";
import lastimg from "../../assets/img/rasm.png";
import lastimg1 from "../../assets/img/rasm (1).png";
import lastimg2 from "../../assets/img/rasm (2).png";
import { Link } from "react-router-dom";
import Carousel from "../carousel";
import { SwiperSlide } from "swiper/react";
import ProductsCard from "../productsCard";
// @ import Context
import { CartContext } from "../../context/Context";

const HomeCategory2 = ({ data }) => {
  const GlobelState = useContext(CartContext);
  const dispatch = GlobelState.dispatch;
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
  const firstThree = data?.slice(0, 3);
  const firstFive = data?.slice(0, 5);

  return (
    <div>
      <section className="top-category pb30 pt0">
        <div className="container">
          <div className="row  ">
            <div className="col-lg-12 p-0">
              <div
                className="banner_one home1_style before_none color1 home3_large_banner "
                style={{ borderRadius: "0px" }}
              >
                <img src={homeimg} alt="" />
              </div>
            </div>
          </div>

          <div className="row pink-row pb-3">
            <div className="col-lg-12">
              <div className="main-title d-flex justify-content-between mt-3">
                <h2 className="title section-title">Best For All</h2>
              </div>
              <div className="position-relative">
                <Carousel
                  spaceBetween={20}
                  navigation={true}
                  pagination={false}
                  isResponsive={true}
                >
                  {firstFive?.map((item) => {
                    return (
                      <SwiperSlide key={item.id}>
                        <SimpleCard item={item} />
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
            {firstThree?.map((item, index) => (
              <div className="col-lg-4 col-sm-12 mb-3" key={index}>
                <div
                  className="banner_one home1_style color2 home4_style h450"
                  style={{ backgroundColor: bgColors[index] }}
                >
                  <div className="thumb">
                    <img
                      className="float-end"
                      src={item.image}
                      alt="smartwatch"
                      style={{ mixBlendMode: "darken" }}
                    />
                  </div>
                  <div className="details">
                    <h3 className="title" style={{ color: colors[index] }}>
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCategory2;
