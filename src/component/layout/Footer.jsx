import Image from "next/image";
import Link from "next/link";

import classes from "./Footer.module.scss";

import logo from "/public/XPLAT_logo_main.svg";
import location from "/public/icons/location_main.svg";
import phone from "/public/icons/phone_main.svg";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <ul className={classes.footerList}>
        <li className={`${classes.footerItem} ${classes.firstItem}`}>
          <Image src={logo} alt="x-plat" />
          <div className={classes.rightBox}>
            <p className={`${classes.ceo}`}>
              대표
              <span className={classes.pc}>&nbsp;</span>
              <span
                className={`${classes.dividingLine} ${classes.mobile}`}
              ></span>
              김지우
            </p>
            <span className={`${classes.dividingLine} ${classes.pc}`}></span>
            <p className={classes.businessNum}>사업자등록번호 583-87-02936</p>
          </div>
        </li>
        <li className={classes.footerItem}>
          <p className={classes.location}>
            <Image src={location} alt="위치" />
            서울 특별시 강서구 양천로 357 려산빌딩 7층
          </p>
        </li>
        {/* mobile에서는 해당 footerItem이 두개로 나뉘어져 pc와 mobile 클래스 각각 추가 */}
        <li className={`${classes.footerItem} ${classes.itemPc}`}>
          <a className={classes.tel} href="tel:070-4539-2782">
            <Image src={phone} alt="전화번호" />
            070-4539-2782
          </a>
          <span className={classes.dividingLine}></span>
          {/* todo: 서비스이용약관 페이지로 이동 or 서비스이용약관 볼 수 있도록 하기 */}
          <Link href="/" className={classes.service}>
            서비스이용약관
          </Link>
          <span className={classes.dividingLine}></span>
          {/* todo: 개인정보처리방침 페이지로 이동 or 개인정보처리방침 볼 수 있도록 하기 */}
          <Link href="/" className={classes.personalInfo}>
            개인정보처리방침
          </Link>
        </li>
        <li className={`${classes.footerItem} ${classes.itemMob}`}>
          <a className={classes.tel} href="tel:070-4539-2782">
            <Image src={phone} alt="전화번호" />
            070-4539-2782
          </a>
        </li>
        <li className={`${classes.footerItem} ${classes.itemMob}`}>
          {/* todo: 서비스이용약관 페이지로 이동 or 서비스이용약관 볼 수 있도록 하기 */}
          <Link href="/" className={classes.service}>
            서비스이용약관
          </Link>
          <span className={classes.dividingLine}></span>
          {/* todo: 개인정보처리방침 페이지로 이동 or 개인정보처리방침 볼 수 있도록 하기 */}
          <Link href="/" className={classes.personalInfo}>
            개인정보처리방침
          </Link>
        </li>
        <li className={classes.footerItem}>
          <p className={classes.copyright}>
            Copyright by XPLAT. All rights reserved.
          </p>
        </li>
      </ul>
    </footer>
  );
}
