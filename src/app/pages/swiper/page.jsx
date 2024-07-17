"use client";

import OneSwiper from "@/component/pages/swiper/OneSwiper";
import classes from "./Swiper.module.scss";
import MultipleSwiper from "@/component/pages/swiper/MultipleSwiper";

export default function Swiper() {
  return (
    <div className={classes.swiperWrapper}>
      <article className="oneSwiper">
        <h2>스와이퍼(컨텐츠 한개씩 보이기)</h2>
        <OneSwiper />
      </article>
      <article className="multipleSwiper">
        <h2>멀티플 스와이퍼(컨텐츠 여러개씩 보이기)</h2>
        <MultipleSwiper />
      </article>
    </div>
  );
}
