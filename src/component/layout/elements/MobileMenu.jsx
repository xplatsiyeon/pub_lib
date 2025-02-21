"use client";

import classes from "./MobileMenu.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenuItems from "./MobileMenuItems";

import menu from "/public/icons/menu.png";
import close from "/public/icons/close.svg";

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

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const onClickCloseMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.querySelector("body").style.overflowY = "hidden";
      document.querySelector("body").style.width = "100%";
      document.querySelector("body").style.height = "100%";
    } else {
      document.querySelector("body").style.overflowY = "auto";
    }
  }, [isMenuOpen]);

  return (
    <div className={classes.wrapper}>
      {isMenuOpen && (
        <div
          className={classes.dimmedBackground}
          onClick={onClickCloseMenu}
        ></div>
      )}
      <button className={classes.menuBtn} onClick={onClickOpenMenu}>
        <Image src={menu} alt="메뉴 열기" />
      </button>
      <div
        className={`${classes.sideMenu} ${
          isMenuOpen ? classes.sideMenuOpen : ""
        }`}
      >
        <button className={classes.closeBtn} onClick={onClickCloseMenu}>
          <Image src={close} alt="메뉴 닫기"></Image>
        </button>
        <div className={classes.menus}>
          <MobileMenuItems menus={MENU_ITEMS} />
        </div>
        <ul className={classes.info}>
          <li className={classes.infoItem}>
            <Link href="#">로그인/회원가입</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
