import React from "react";

import classes from "./Pages.module.scss";

import Header from "@/component/layout/Header";
import ShopHeader from "@/component/layout/ShopHeader";
import Footer from "@/component/layout/Footer";
import Grid from "@/component/pages/main/Grid";

export default function Pages() {
  return (
    <div className={classes.pagesWrapper}>
      <article className={classes.header}>
        <h2 className={classes.heading}>헤더</h2>
      </article>
      <Header />
      <article>
        <h2 className={classes.heading}>E-commerce 헤더(반응형)</h2>
        <ShopHeader />
      </article>
      <article>
        <h2 className={classes.heading}>푸터</h2>
        <Footer />
      </article>
      <article>
        <h2 className={classes.heading}>그리드</h2>
        <Grid />
      </article>
    </div>
  );
}
