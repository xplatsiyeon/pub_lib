import classes from "./page.module.scss";

export default function Home() {
  return (
    <main className={classes.mainWrapper}>
      <h1 className={classes.title}>엑스플랫 퍼블리싱 라이브러리</h1>
      <p className={classes.mainText}>
        엑스플랫 퍼블리싱 관련 라이브러리입니다.
        <br />
        상단의 메뉴를 누르면 다양한 라이브러리를 감상하실 수 있습니다.
      </p>
    </main>
  );
}
