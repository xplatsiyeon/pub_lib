"use client";

import classes from "./Animation.module.scss";
import Slide from "@/component/pages/animation/Slide";
import Fade from "@/component/pages/animation/Fade";
import Rotate from "@/component/pages/animation/Rotate";

export default function Animation() {
  const handleReload = () => {};
  return (
    <div className={classes.aniWrapper}>
      <article id="slide">
        <h2>슬라이드 애니메이션</h2>
        <Slide />
      </article>
      <article id="fade">
        <h2>페이드 애니메이션</h2>
        <Fade />
      </article>
      <article id="rotate">
        <h2>회전 애니메이션</h2>
        <Rotate />
      </article>
    </div>
  );
}
