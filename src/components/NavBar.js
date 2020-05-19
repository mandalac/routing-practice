import React from "react";
import { Link } from "@reach/router";

export default function NavBar() {
  return (
    <nav>
      <h1>React Routing: </h1>
      <ul>
        <ul>
          <Link to="/">Main Page</Link>
        </ul>
        <ul>
          <Link to="/home">Home Page</Link>
        </ul>
      </ul>
    </nav>
  );
}
