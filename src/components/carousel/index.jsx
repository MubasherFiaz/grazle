import React from "react";
// @ import dependencies
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// @ import styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";

const Carousel = ({
  loop,
  children,
  navigation,
  pagination,
  spaceBetween,
  slidesPerView,
  isResponsive = false,
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation={navigation}
      pagination={pagination ? { clickable: true } : false}
      spaceBetween={spaceBetween || 10}
      slidesPerView={slidesPerView}
      loop={loop}
      grabCursor={true}
      breakpoints={
        isResponsive
          ? {
              // When window width is >= 320px
              320: {
                slidesPerView: 1,
              },
              // When window width is >= 768px
              600: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              // When window width is >= 1024px
              1200: {
                slidesPerView: 4,
              },
              1600: {
                slidesPerView: 5,
              },
            }
          : false
      }
      className="carouselWrapper"
    >
      {children}
    </Swiper>
  );
};

export default Carousel;
