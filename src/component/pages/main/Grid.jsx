import classes from "./Grid.module.scss";

export default function Grid() {
  return (
    <div className={classes.gridWrapper}>
      <GridBox color="red" />
      <GridBox color="orange" />
      <GridBox color="hotpink" />
      <GridBox color="yellowgreen" />
      <GridBox color="skyblue" />
      <GridBox color="blue" />
      <GridBox color="navy" />
      <GridBox color="black" />
      <GridBox color="grey" />
    </div>
  );
}

function GridBox({ color }) {
  return (
    <div className={classes.gridBox} style={{ backgroundColor: color }}>
      <p className={classes.front}>마우스를 올리면 뒤집힙니다.</p>
      <p className={classes.back}>마우스가 벗어나면 다시 뒤집힙니다.</p>
    </div>
  );
}
