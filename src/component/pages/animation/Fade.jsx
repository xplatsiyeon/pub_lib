"use client";

import classes from "./Fade.module.scss";
import { useState, useRef } from "react";

export default function Fade() {
  const slideRef = useRef(null);
  const [resetKey, setResetKey] = useState(0); // 리셋 키 상태

  const resetAnimations = () => {
    setResetKey((prev) => prev + 1); // 리셋 키 값을 증가시켜 리렌더링
  };
  return (
    <div>
      <div className={classes.fade} ref={slideRef} key={resetKey}>
        <button className={classes.resetBtn} onClick={resetAnimations}>
          재실행
        </button>
        <div className={`${classes.Box} ${classes.In}`}>
          <h3>Fade In</h3>
          <p>WE CREATE GROWTH</p>
        </div>
        <div className={`${classes.Box} ${classes.Out}`}>
          <h3>Fade Out</h3>
          <p>WE CREATE GROWTH</p>
        </div>
      </div>
    </div>
  );
}
