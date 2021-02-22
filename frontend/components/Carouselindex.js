import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual
} from "swiper/core";
import "swiper/swiper-bundle.css";


SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);
const CAROUSEL = gql`
  {
    carousels {
      id
      name
      description
      image {
        url
      }
    }
  }
`;
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://45.64.126.93:1337"

export default function Carousell() {
    const {loading, error, data} = useQuery(CAROUSEL);
  const slides = [];
  if (error) return "Error loading restaurants";
  if (loading) return null;

  data.carousels.map((item) => {
    slides.push(
            <SwiperSlide
                className="custom-tag"
                key={item.id}
                style={{ listStyle: "none" }}
            >
                <div className="slide">
                <img src={`${API_URL}${item.image[0].url}`} alt={item.name}/>
                </div>
            </SwiperSlide>
        );
    });
  // for (let i = 0; i < 12; i++) {
  //   slides.push(
  //     <SwiperSlide key={`slide-${i}`} style={{ listStyle: "none" }}>
  //       <div className="slide">
  //         <h3>{i}</h3>
  //       </div>
  //     </SwiperSlide>
  //   );
  // }

  return (
    <Swiper
      id="swiper"
      virtual
      slidesPerView={1}
      // slidesPerColumn={2}
      // slidesPerColumnFill="row"
      spaceBetween={0}
      // slidesPerGroup={2}
      // autoplay
      // loop
      onReachEnd={() => {
        const tmp = slides.unshift();
      }}
      navigation
      pagination
    >
      {slides}
    </Swiper>
  );
}