import classes from "./ImageLoop.module.scss";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const imageArr = [
  { src: "/images/loop/cat1.jpeg" },
  { src: "/images/loop/cat2.jpeg" },
  { src: "/images/loop/cat3.jpeg" },
  { src: "/images/loop/cat4.jpeg" },
  { src: "/images/loop/cat5.jpeg" },
  { src: "/images/loop/cat6.jpeg" },
  { src: "/images/loop/cat7.jpeg" },
  { src: "/images/loop/cat8.jpeg" },
];

export default function ImageLoop() {
  return (
    <Swiper
      className={classes.imageLoop}
      modules={[Autoplay]}
      slidesPerView={4}
      spaceBetween={"5%"}
      loop={true}
      speed={6000}
      autoplay={{ delay: 0, disableOnInteraction: true }}
      preventInteractionOnTransition={true}
      loopAdditionalSlides={1}
      freeMode={true}
    >
      {imageArr.map((item, index) => {
        return (
          <SwiperSlide
            className={classes.swiperItem}
            key={index}
            style={{ backgroundColor: item.color }}
          >
            <Image src={item.src} alt="고양이" width={500} height={200} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
