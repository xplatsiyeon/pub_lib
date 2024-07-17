import classes from "./TextLoop.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const contentArr = [
  {
    content: `<span>XPLAT</span>의 실적과 데이터가 증명합니다.`,
  },
  {
    content: `<span>XPLAT</span>의 실적과 데이터가 증명합니다.`,
  },
  {
    content: `<span>XPLAT</span>의 실적과 데이터가 증명합니다.`,
  },
  {
    content: `<span>XPLAT</span>의 실적과 데이터가 증명합니다.`,
  },
];

const contentArrMiddle = [
  {
    content: `XPLAT의 <span>실적과 데이터</span>가 증명합니다.`,
  },
  {
    content: `XPLAT의 <span>실적과 데이터</span>가 증명합니다.`,
  },
  {
    content: `XPLAT의 <span>실적과 데이터</span>가 증명합니다.`,
  },
  {
    content: `XPLAT의 <span>실적과 데이터</span>가 증명합니다.`,
  },
];

export default function ImageLoop() {
  return (
    <>
      <Swiper
        className={classes.textLoop}
        modules={[Autoplay]}
        slidesPerView={"auto"}
        spaceBetween={10}
        loop={true}
        speed={9000}
        autoplay={{ delay: 0, disableOnInteraction: true }}
        preventInteractionOnTransition={true}
        loopAdditionalSlides={1}
        freeMode={true}
      >
        {contentArr.map((item, index) => {
          return (
            <SwiperSlide className={classes.swiperItem} key={index}>
              <p dangerouslySetInnerHTML={{ __html: item.content }} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        className={`${classes.textLoop} ${classes.rtl}`}
        modules={[Autoplay]}
        slidesPerView={"auto"}
        spaceBetween={10}
        loop={true}
        speed={9000}
        autoplay={{ delay: 0, disableOnInteraction: true }}
        preventInteractionOnTransition={true}
        loopAdditionalSlides={1}
        freeMode={true}
        dir="rtl"
      >
        {contentArrMiddle.map((item, index) => {
          return (
            <SwiperSlide className={classes.swiperItem} key={index}>
              <p dangerouslySetInnerHTML={{ __html: item.content }} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
