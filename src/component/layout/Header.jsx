import Image from "next/image";
import classes from "./Header.module.scss";

import logo from "/public/XPLAT_logo.svg";

export default function Header() {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <a href="/">
          <Image src={logo} alt="로고" />
        </a>
        <ul className={classes.navList}>
          <li className={classes.navItem}>
            <a href="/pages">페이지</a>
          </li>
          <li className={classes.navItem}>
            <a href="/layout">레이아웃</a>
          </li>
          <li className={classes.navItem}>
            <a href="/components">컴포넌트</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
