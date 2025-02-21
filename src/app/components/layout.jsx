"use client";

import classes from "./layout.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useSelectedLayoutSegment } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import { useRef, useCallback, useEffect, useState } from "react";

import arrow from "/public/icons/next_arrow.svg";

const menus = [
  { title: "버튼", href: "/components" },
  { title: "폼", href: "/components/" },
  { title: "테이블", href: "/components/" },
  { title: "무한 루프 배너", href: "/components/" },
];

export default function Layout({ children }) {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const segment = useSelectedLayoutSegment();
  const [menuUrl, setMenuUrl] = useState(
    segment || menus[0].href.replace("/pages/", "")
  );

  useEffect(() => {
    setMenuUrl(segment || menus[0].href.replace("/pages/", ""));
  }, [segment]);

  // 스와이퍼 초기화 함수
  const setSwiperInstance = useCallback(
    (swiper) => {
      if (swiperRef) swiperRef.current = swiper;
    },
    [swiperRef]
  );

  // 스와이퍼 navigation 이벤트 핸들러
  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  // 스와이퍼 navigation 이벤트 핸들러
  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  // 메뉴 클릭 시 해당 메뉴의 index설정 이벤트 핸들러
  const handleMenuClick = (e, idx) => {
    setMenuUrl(menus[idx].href.replace("/pages/", ""));
  };
  return (
    <main className={classes.componentsWrapper}>
      <h1 className={classes.componentsTitle}>컴포넌트</h1>
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
            {menus.map((items, idx) => {
              return (
                <SwiperSlide
                  className={
                    menuUrl === items.href.replace("/pages/", "")
                      ? `${classes.menuItem} ${classes.active}`
                      : `${classes.menuItem}`
                  }
                  key={items.title}
                  onClick={(e) => handleMenuClick(e, idx)}
                >
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
