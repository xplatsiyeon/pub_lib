"use client";

import classes from "./MultipleSwiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

const items = [
  { color: "tomato" },
  { color: "darkslateblue" },
  { color: "green" },
  { color: "purple" },
  { color: "pink" },
  { color: "skyblue" },
  { color: "black" },
  { color: "chocolate" },
];

export default function MultipleSwiper() {
  return (
    <Swiper
      className={classes.multipleSwiper}
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      navigation={true}
      slidesPerView={3}
      loop
      spaceBetween={20}
    >
      {items.map((item, index) => {
        return (
          <SwiperSlide
            className={classes.swiperItem}
            key={index}
            style={{ backgroundColor: item.color }}
          >
            {index + 1}번째 아이템
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
