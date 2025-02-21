import Image from "next/image";
import classes from "./ShopHeader.module.scss";

import logo from "/public/XPLAT_logo.svg";
import cart from "/public/icons/cart.png";
import search from "/public/icons/search.png";
import myshop from "/public/icons/myshop.svg";
import Link from "next/link";
import MenuItems from "./elements/MenuItems";

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
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <a className={classes.logo} href="/">
          <Image src={logo} alt="로고" />
        </a>
        {/* <ul className={classes.navList}>
          <li className={classes.navItem}>
            <a className={classes.menuItem} href="/pages">
              Shop
            </a>
            <ul className={classes.subMenu}>
              <li>
                <a href="#">menu1</a>
              </li>
              <li>
                <a href="#">menu2</a>
              </li>
              <li>
                <a href="#">menu3</a>
              </li>
            </ul>
          </li>
          <li className={classes.navItem}>
            <a className={classes.menuItem} href="/components">
              About
            </a>
          </li>
          <li className={classes.navItem}>
            <a className={classes.menuItem} href="/components">
              Community
            </a>
            <ul className={classes.subMenu}>
              <li>
                <a href="#">Notice</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Q&A</a>
              </li>
            </ul>
          </li>
        </ul> */}
        <MenuItems menus={MENU_ITEMS} />
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
