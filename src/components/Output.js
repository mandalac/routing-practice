import React from "react";

export default function Number({ input }) {
  let number = true;
  if (isNaN(input)) {
    number = false;
  }
  return (
    <div>
      {number ? <h1>The number is: {input}</h1> : <h1>The word is: {input}</h1>}
    </div>
  );
}
