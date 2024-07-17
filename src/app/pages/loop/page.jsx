"use client";

import classes from "./Loop.module.scss";
import ImageLoop from "@/component/pages/loop/ImageLoop";
import TextLoop from "@/component/pages/loop/TextLoop";

export default function Loop() {
  return (
    <div className={classes.loopWrapper}>
      <article className="imageLoop">
        <h2>이미지 무한 루프</h2>
        <ImageLoop />
      </article>
      <article className="textLoop">
        <h2>텍스트 무한 루프(우-&gt;좌, 좌-&gt;우)</h2>
        <TextLoop />
      </article>
    </div>
  );
}
