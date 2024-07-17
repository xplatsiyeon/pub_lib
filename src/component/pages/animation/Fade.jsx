"use client";

import classes from "./Fade.module.scss";

export default function Fade() {
  return (
    <div>
      <div className={classes.fade}>
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
