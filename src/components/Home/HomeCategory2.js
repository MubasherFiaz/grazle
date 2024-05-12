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
    </div>
  );
};

export default HomeCategory2;
