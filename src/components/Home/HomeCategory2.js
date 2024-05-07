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

const slicedItems = [
  {
    id: "1",
    product: "FRUITS & VEGS",
    name: "Great Value Ultra Strong Paper Towels, Splits Sheets",
    price: "32.5",
    discount: "45",
    image: cardimg,
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
    image: cardimg,
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
    image: cardimg,
  },
];

const HomeCategory2 = () => {
  const GlobelState = useContext(CartContext);
  const dispatch = GlobelState.dispatch;

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
                  {slicedItems?.map((item) => {
                    return (
                      <SwiperSlide key={item.id}>
                        <SimpleCard items={item} />
                      </SwiperSlide>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="top-category  ">
        <div className="container">
          <div className="row  ">
            <div className="col-lg-4 col-sm-12 ">
              <div
                className="banner_one home1_style athome7 color4 mb30"
                style={{ backgroundColor: "#EBFFF1 " }}
              >
                <div className="thumb">
                  <img className="float-end" src={lastimg} alt="pineapple" />
                </div>
                <div className="details">
                  <h3 className="title" style={{ color: "#4FAD2E" }}>
                    Small Appliances
                  </h3>
                  <p
                    className="para heading-color"
                    style={{ color: "#4FAD2E !important" }}
                  >
                    Upto 40% Off Kitchen Products.
                  </p>

                  <Link
                    to="#"
                    className="shop_btn"
                    style={{ color: "#4FAD2E", textDecoration: "none" }}
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 ">
              <div
                className="banner_one home1_style athome7 color4 mb30"
                style={{ backgroundColor: "#EBF4FF " }}
              >
                <div className="thumb">
                  <img className="float-end" src={lastimg1} alt="pineapple" />
                </div>
                <div className="details">
                  <h3 className="title" style={{ color: "#4FAD2E" }}>
                    Small Appliances
                  </h3>
                  <p
                    className="para heading-color"
                    style={{ color: "#4FAD2E !important" }}
                  >
                    Upto 40% Off Kitchen Products.
                  </p>

                  <Link
                    to="#"
                    className="shop_btn"
                    style={{ color: "#4FAD2E", textDecoration: "none" }}
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 ">
              <div
                className="banner_one home1_style athome7 color5 mb30"
                style={{ backgroundColor: "#FFF5EE " }}
              >
                <div className="thumb">
                  <img
                    className="float-end"
                    src={lastimg2}
                    alt="smartdevice.png"
                  />
                </div>
                <div className="details">
                  <h3 className="title" style={{ color: "#4FAD2E" }}>
                    Small Appliances
                  </h3>
                  <p
                    className="para heading-color"
                    style={{ color: "#4FAD2E !important" }}
                  >
                    Upto 40% Off Kitchen Products.
                  </p>

                  <Link
                    to="#"
                    className="shop_btn"
                    style={{ color: "#4FAD2E", textDecoration: "none" }}
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCategory2;
