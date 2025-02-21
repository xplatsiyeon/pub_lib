"use client";
import { useEffect, useRef, useState } from "react";
import classes from "./Fullpage.module.scss";

const pages = [
  { pageNum: 1, bgColor: "red" },
  { pageNum: 2, bgColor: "yellow" },
  { pageNum: 3, bgColor: "yellowgreen" },
  { pageNum: 4, bgColor: "pink" },
  { pageNum: 5, bgColor: "blue" },
  { pageNum: 6, bgColor: "violet" },
  { pageNum: 7, bgColor: "white" },
];

export default function Full() {
  const outerRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight } = outerRef.current;
      const newPage = Math.round(scrollTop / clientHeight);
      setCurrentPage(newPage);
    };

    const wheelHandler = (e) => {
      e.preventDefault();
      if (isScrolling) return; // 이미 스크롤 중이면 무시

      setIsScrolling(true); // 스크롤 중임을 표시
      const { deltaY } = e;
      const { scrollTop, clientHeight } = outerRef.current;

      const pageHeight = clientHeight;
      const newScrollTop =
        deltaY > 0
          ? Math.min(
              scrollTop + pageHeight,
              Math.floor(scrollTop / pageHeight) * pageHeight + pageHeight
            )
          : Math.max(
              scrollTop - pageHeight,
              Math.ceil(scrollTop / pageHeight) * pageHeight - pageHeight
            );

      outerRef.current.scrollTo({
        top: newScrollTop,
        left: 0,
        behavior: "smooth",
      });

      setTimeout(() => {
        setIsScrolling(false);
      }, 2000);
    };

    const outerRefCurrent = outerRef.current;
    outerRefCurrent.addEventListener("wheel", wheelHandler);
    outerRefCurrent.addEventListener("scroll", handleScroll);

    return () => {
      outerRefCurrent.removeEventListener("wheel", wheelHandler);
      outerRefCurrent.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling]);

  const handleNavigationClick = (pageIndex) => {
    const pageHeight = outerRef.current.clientHeight;
    const newScrollTop = pageIndex * pageHeight;
    outerRef.current.scrollTo({
      top: newScrollTop,
      left: 0,
      behavior: "smooth",
    });
    setCurrentPage(pageIndex);
  };

  return (
    <div className={classes.fullWrapper}>
      <span className={classes.curText}>현재 페이지: {currentPage + 1}</span>
      <span className={classes.mainText}>
        아래 원을 누르면 원하시는 페이지로 이동합니다.
      </span>
      <div className={classes.navigation}>
        {pages.map((item, index) => (
          <button
            key={index}
            onClick={() => handleNavigationClick(index)}
            className={currentPage === index ? classes.active : ""}
          ></button>
        ))}
      </div>
      <div className={classes.outer} ref={outerRef}>
        {pages.map((item, index) => (
          <div
            key={index}
            className={classes.inner}
            style={{ backgroundColor: item.bgColor }}
          >
            {item.pageNum}
          </div>
        ))}
      </div>
    </div>
  );
}
