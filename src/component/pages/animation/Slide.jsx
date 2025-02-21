"use client";

import classes from "./Slide.module.scss";
import { useState, useRef } from "react";

export default function Slide() {
  const slideRef = useRef(null);
  const [resetKey, setResetKey] = useState(0); // 리셋 키 상태

  const resetAnimations = () => {
    setResetKey((prev) => prev + 1); // 리셋 키 값을 증가시켜 리렌더링
  };

  return (
    <div>
      <div className={classes.slide} ref={slideRef} key={resetKey}>
        <button className={classes.resetBtn} onClick={resetAnimations}>
          재실행
        </button>
        <div className={`${classes.Box} ${classes.Down}`}>
          <h3>Slide Down</h3>
          <p>WE CREATE GROWTH</p>
        </div>
        <div className={`${classes.Box} ${classes.Up}`}>
          <h3>Slide Up</h3>
          <p>WE CREATE GROWTH</p>
        </div>
        <div className={`${classes.Box} ${classes.Left}`}>
          <h3>Slide To Left</h3>
          <p>WE CREATE GROWTH</p>
        </div>
        <div className={`${classes.Box} ${classes.Right}`}>
          <h3>Slide To Right</h3>
          <p>WE CREATE GROWTH</p>
        </div>
      </div>
    </div>
  );
}
