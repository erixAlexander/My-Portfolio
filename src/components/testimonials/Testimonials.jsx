import React from "react";
import "./testimonials.css";
import { testimonialsArray } from "./testimonialsArray";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
      spaceBetween={40}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="container testimonials__container mySwiper"
      >
        {testimonialsArray.map(({ avatar, name, review }, i) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="client" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
