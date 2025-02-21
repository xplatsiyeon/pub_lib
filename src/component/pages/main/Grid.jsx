import classes from "./Grid.module.scss";

export default function Grid() {
  return (
    <div className={classes.gridWrapper}>
      <GridBox color="red" />
      <GridBox color="orange" />
      <GridBox color="hotpink" row={"span 3"} />
      <GridBox color="yellowgreen" column={"span 2"} row={"span 2"} />
      <GridBox color="skyblue" />
      <GridBox color="blue" row={"1 / span 2"} />
      <GridBox color="navy" column={"span 2"} />
      <GridBox color="black" />
      <GridBox color="grey" />
    </div>
  );
}

function GridBox({ color, column, row }) {
  return (
    <div
      className={classes.gridBox}
      style={{
        backgroundColor: color,
        gridColumn: column,
        gridRow: row,
      }}
    >
      <p className={classes.front}>마우스를 올리면 뒤집힙니다.</p>
      <p className={classes.back}>마우스가 벗어나면 다시 뒤집힙니다.</p>
    </div>
  );
}
