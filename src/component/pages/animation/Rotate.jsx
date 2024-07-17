"use client";

import classes from "./Rotate.module.scss";
import Image from "next/image";
import roundText from "/public/round_text.svg";

export default function Rotate() {
  return (
    <div className={classes.rotate}>
      <div className={`${classes.Box} ${classes.Infinite}`}>
        <h3>무한 회전</h3>
        <Image src={roundText} alt="We create growth with data" />
      </div>
    </div>
  );
}
