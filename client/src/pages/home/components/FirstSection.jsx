import React from "react";
import { Link } from "react-router-dom";
import img from "../../../images/Snapinsta.app_448116302_7576420729111064_2506789993271330359_n_1024.jpg";
import img1 from "../../../images/Snapinsta.app_447767950_25643712418609308_4327164228410308211_n_1024.jpg";
import img2 from "../../../images/Snapinsta.app_446100709_1256735475295272_3575094005448019352_n_1024.jpg";
import { SiAkamai } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const FirstSection = () => {
  return (
    <div className="min">
      <div className="container  mx-auto items-center text-white flex flex-col-reverse xl:flex-row justify-between min-home w-full">
        <div className="content flex flex-col gap-[40px] mt-[60px]">
          <h1 className="text-[60px]  font-bold">
            Goûtez l'authentique <br /> cuisine algérienne
          </h1>
          <p className="text-lg">
            Parmi les meilleurs chefs algériens au monde, <br /> vous servant
            quelque chose au-delà de la saveur.
          </p>
          <Link
            className="p-[10px] bg-yellow-500 font-bold text-black text-lg text-center max-w-[200px] rounded-lg"
            to="/menu"
          >
            Notre Menu
          </Link>
          <div className=" relative w-[70px] p-[5px] h-[70px] border-[2px] pimpim_border rounded-full flex items-center justify-center">
            <SiAkamai className=" absolute text-[90px] rotate-180 top-0 left-0 pimpim" />
            <div className=" border-[2px] w-[50px] h-[50px] flex items-center justify-center text-lg font-bold pimpim_border rounded-full">
              P
            </div>
          </div>
        </div>
        <div className="image relative bg-slate-500">
          <Swiper
            style={{
              "--swiper-pagination-color": "#FFBA08",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "16px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            }}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src={img}
                alt="home_image"
                className="h-[434px] w-[563px] border-[1px] border-yellow-500"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img1}
                alt="home_image"
                className="h-[434px] w-[563px] border-[1px] border-yellow-500"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img2}
                alt="home_image"
                className="h-[434px] w-[563px] border-[1px] border-yellow-500"
              />
            </SwiperSlide>
          </Swiper>
          {/* <img
            src={img}
            alt="home_image"
            className="h-[434px] w-[563px] border-[1px] border-yellow-500"
          /> */}
          <SiAkamai className=" absolute top-[-49px] pimpim left-[-68px] text-[120px]" />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
