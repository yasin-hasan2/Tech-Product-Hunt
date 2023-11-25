// import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/img/product/banner1.webp";
import slide2 from "../../../assets/img/product/banner2.webp";
import slide3 from "../../../assets/img/product/banner3.png";
import slide4 from "../../../assets/img/product/banner7.jpg";
import slide5 from "../../../assets/img/product/banner5.webp";
// import slide6 from "../../../assets/img/product/banner9.png";
import slide7 from "../../../assets/img/product/banner6.jpg";
import slide8 from "../../../assets/img/product/banner8.webp";

const Category = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-96 h-96" src={slide2} alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-96" src={slide3} alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-96" src={slide4} alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-96" src={slide5} alt="" />{" "}
        </SwiperSlide>

        <SwiperSlide>
          <img className="w-96" src={slide7} alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-96 h-96" src={slide8} alt="" />{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
