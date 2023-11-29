// import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { FaArrowRight } from "react-icons/fa";

import slide1 from "../../../assets/img/product/banner1.png";
import slide2 from "../../../assets/img/product/banner2.jpg";
import slide3 from "../../../assets/img/product/banner3.jpg";
import slide4 from "../../../assets/img/product/banner7.jpg";
import slide5 from "../../../assets/img/product/banner5.webp";
// import slide6 from "../../../assets/img/product/banner9.png";
import slide7 from "../../../assets/img/product/banner6.jpg";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <div>
        <h1 className=" text-center my-10 text-6xl mx-auto py-10 border-b-2 text-white border-white lg:w-[40rem] ">
          {" "}
          Trending Products{" "}
        </h1>
      </div>
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
            <img className="w-96" src={slide1} alt="" />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-96 " src={slide2} alt="" />{" "}
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
        </Swiper>
      </div>
      <div className=" flex  text-center text-xl btn btn-link my-10">
        <Link to="/product" className="flex items-center">
          {" "}
          Check More <FaArrowRight className="ml-2"></FaArrowRight>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Category;
