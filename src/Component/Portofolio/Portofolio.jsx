import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Portofolio.css";
import Slide1 from "../../image/Screenshot (5).png";
import Slide2 from "../../image/Screenshot (6).png";
import Slide3 from "../../image/Screenshot (7).png";
import Slide4 from "../../image/Screenshot 2022-04-19 223413.png";
import Slide5 from "../../image/2022-03-05 (1).png";
import "swiper/css";

const Portofolio = () => {
  return (
    <div className="portofolio" id="Portofolio">
      {/* heading */}
      <span>Recent Project</span>
      <span>Portofolio</span>

      {/* Slides */}
      <Swiper
        spaceBetween={80}
        slidesPerView={3}
        grabCursor={true}
        className="portofolio-slider"
      >
        <SwiperSlide>
          <img src={Slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portofolio;
