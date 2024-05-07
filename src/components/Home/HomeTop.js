import React from "react";
import backimg from "../../assets/images/home/3.jpg";
import backimg2 from "../../assets/images/home/5.jpg";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const HomeTop = ({ data }) => {
  return (
    <div className="body_content_wrapper position-relative">
      <section className="home-one mt0 zi0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-banner-wrapper home1_style athome3 bdrs6 ovh">
                <div className="banner-style-one dots_none owl-theme owl-carousel">
                  <MDBCarousel showControls interval={30000}>
                    {data?.map((item) => (
                      <MDBCarouselItem itemId={1} key={item?.id}>
                        <div
                          className="slide slide-one"
                          style={{
                            backgroundImage: `url(https://grazle.co.in/${item?.image})`,
                            height: "80vh",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            width: "100%",
                          }}
                        >
                          <div className="container">
                            <div className="row home-content">
                              <div className="col-lg-6 offset-lg-1 col-xl-5 offset-xl-6 col-xxl-5 offset-xxl-5">
                                <div className="ps-xl-5">
                                  <span className="tag">Limited Edition</span>
                                  <h3 className="banner-title">
                                    Modern
                                    <br className="d-none d-xl-block" />
                                    Dinning Chair
                                  </h3>
                                  <p>
                                    Discover our new items. Up to
                                    <span className="fw500">25% Off !</span>
                                  </p>
                                  <Link
                                    style={{ textDecoration: "none" }}
                                    to="#"
                                    className="btn banner-btn btn-thm"
                                  >
                                    Shop Now
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </MDBCarouselItem>
                    ))}
                    {/* 
                    <MDBCarouselItem itemId={2}>
                      <div
                        className="slide slide-one b"
                        style={{
                          backgroundImage: `url(${backimg2})`,
                          height: "80vh",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          width: "100%",
                        }}
                      >
                        <div className="container">
                          <div className="row home-content">
                            <div className="col-lg-6 offset-lg-1 ">
                              <div className="ps-xl-5">
                                <span className="tag">New Arrivals</span>
                                <h3 className="banner-title">
                                  Wall clock
                                  <br className="d-none d-xl-block" />
                                  renaissance
                                </h3>
                                <p>
                                  Discover our new items. Up to
                                  <span className="fw500">25% Off !</span>
                                </p>
                                <Link
                                  style={{ textDecoration: "none" }}
                                  to="#"
                                  className="btn banner-btn btn-thm"
                                >
                                  Shop Now
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </MDBCarouselItem> */}
                  </MDBCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeTop;
