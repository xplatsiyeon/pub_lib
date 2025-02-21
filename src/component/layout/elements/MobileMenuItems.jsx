import classes from "./MobileMenuItems.module.scss";
import { useState } from "react";
import Image from "next/image";

import arrowDown from "/public/icons/arrow_down.svg";

const MobileMenuItems = ({ menus }) => {
  const [openSubMenu, setOpenSubMenu] = useState("");

  const toggleSubMenu = (menuName) => {
    setOpenSubMenu((prev) => (prev === menuName ? "" : menuName));
  };

  return (
    <ul className={classes.navList}>
      {menus.map((menu) => (
        <li className={classes.navItem} key={menu.name}>
          <a className={classes.menuItem} href={menu.link}>
            {menu.name}
          </a>
          {menu.subMenus && (
            <>
              <button
                className={`${classes.arrow} ${
                  openSubMenu === menu.name ? classes.open : ""
                }`}
                onClick={() => toggleSubMenu(menu.name)}
              >
                <Image src={arrowDown} alt="메뉴 열기" />
              </button>
              <ul
                className={`${classes.subMenu} ${
                  openSubMenu === menu.name ? classes.subMenuOpen : ""
                }`}
              >
                {menu.subMenus.map((sub) => (
                  <li key={sub.name}>
                    <a href={sub.link}>{sub.name}</a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MobileMenuItems;
