"use client";

import classes from "./Slide.module.scss";

export default function Slide() {
  return (
    <div className={classes.slide}>
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
  );
}
