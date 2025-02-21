"use client";

import classes from "./ShopHeader.module.scss";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Link from "next/link";
import MenuItems from "./elements/MenuItems";
import MobileMenu from "./elements/MobileMenu";

import logo from "/public/XPLAT_logo.svg";
import cart from "/public/icons/cart.png";
import search from "/public/icons/search.png";
import myshop from "/public/icons/myshop.png";

const MENU_ITEMS = [
  {
    name: "Menu1",
    link: "#",
    subMenus: [
      { name: "SubMenu1", link: "#" },
      { name: "SubMenu2", link: "#" },
      { name: "SubMenu3", link: "#" },
    ],
  },
  {
    name: "Menu2",
    link: "#",
    subMenus: [
      { name: "SubMenu4", link: "#" },
      { name: "SubMenu5", link: "#" },
      { name: "SubMenu6", link: "#" },
    ],
  },
  { name: "About", link: "#" },
  {
    name: "Community",
    link: "#",
    subMenus: [
      { name: "Notice", link: "#" },
      { name: "FAQ", link: "#" },
      { name: "Q&A", link: "#" },
    ],
  },
];

export default function Header() {
  const mobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        {isMobile ? <MobileMenu /> : <MenuItems menus={MENU_ITEMS} />}
        <a className={classes.logo} href="/">
          <Image src={logo} alt="로고" />
        </a>
        <div className={classes.member}>
          <Link href="#" className={classes.search}>
            <Image src={search} alt="검색 아이콘" />
          </Link>
          <Link href="#" className={classes.search}>
            <Image src={cart} alt="장바구니 아이콘" />
          </Link>
          <Link href="#" className={classes.search}>
            <Image src={myshop} alt="마이페이지 아이콘" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
