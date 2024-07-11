import classes from "./not-found.module.scss";

export default function NotFound() {
  return (
    <main className={classes.notFoundWrapper}>
      <p>죄송합니다.</p>
      <p>요청하신 페이지를 찾을 수 없습니다 😢</p>
      <p>다른 페이지로 이동해주세요.</p>
    </main>
  );
}
