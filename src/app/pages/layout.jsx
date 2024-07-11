"use client";

import classes from "./layout.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

import arrow from "/public/icons/next_arrow.svg";
import { useRef, useCallback } from "react";

const menus = [
  { title: "메인", href: "/pages" },
  { title: "풀페이지", href: "/pages/fullpage" },
  { title: "스와이퍼", href: "/pages/swiper" },
  { title: "무한 루프 배너1", href: "/pages/loop" },
  { title: "무한 루프 배너2", href: "/pages/loop" },
  { title: "무한 루프 배너3", href: "/pages/loop" },
  { title: "무한 루프 배너4", href: "/pages/loop" },
  { title: "무한 루프 배너5", href: "/pages/loop" },
  { title: "무한 루프 배너6", href: "/pages/loop" },
  { title: "무한 루프 배너7", href: "/pages/loop" },
  { title: "무한 루프 배너11", href: "/pages/loop" },
];

export default function Layout({ children }) {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const setSwiperInstance = useCallback(
    (swiper) => {
      if (swiperRef) swiperRef.current = swiper;
    },
    [swiperRef]
  );

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <main className={classes.pagesWrapper}>
      <h1 className={classes.pagesTitle}>페이지</h1>
      <div className={classes.flexBox}>
        <nav className={classes.nav}>
          <Swiper
            className={classes.menuList}
            slidesPerView={8}
            spaceBetween={20}
            slidesOffsetAfter={50}
            slidesOffsetBefore={50}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            modules={[Navigation]}
            onSwiper={setSwiperInstance}
          >
            {menus.map((items) => {
              return (
                <SwiperSlide className={classes.menuItem} key={items.title}>
                  <Link href={items.href}>{items.title}</Link>
                </SwiperSlide>
              );
            })}
            <button
              className={classes.prevBtn}
              ref={prevRef}
              onClick={handlePrev}
            >
              <Image src={arrow} alt="이전 버튼" fill />
            </button>
            <button
              className={classes.nextBtn}
              ref={nextRef}
              onClick={handleNext}
            >
              <Image src={arrow} alt="다음 버튼" fill />
            </button>
          </Swiper>
        </nav>
        <div className={classes.contentWrapper}>{children}</div>
      </div>
    </main>
  );
}
