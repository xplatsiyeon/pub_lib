"use client";

import classes from "./OneSwiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

const items = [
  { color: "green" },
  { color: "purple" },
  { color: "black" },
  { color: "pink" },
  { color: "skyblue" },
  { color: "tomato" },
  { color: "grey" },
];

export default function OneSwiper() {
  return (
    <Swiper
      className={classes.oneSwiper}
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      navigation={true}
    >
      {items.map((item, index) => {
        return (
          <SwiperSlide
            className={classes.swiperItem}
            key={index}
            style={{ color: item.color }}
          >
            {index + 1}번째 아이템
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
