import React, { Fragment } from "react";

export default function Colored({ bg, color, word }) {
  const style = {
    backgroundColor: bg,
    color: color,
  };
  return (
    <Fragment>
      <h1 style={style}>The word is: {word}</h1>
    </Fragment>
  );
}
