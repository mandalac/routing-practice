import React from "react";
import { Router } from "@reach/router";
import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
import Output from "./components/Output";
import Home from "./components/Home";
import Colored from "./components/Colored";

import "./App.css";

function App() {
  return (
    <div className="Container">
      <NavBar />
      <Router>
        <Home exact path="/" component={Home} />
        <Welcome exact path="/home" component={Welcome} />
        <Output exact path="/:input" component={Output} />
        <Colored exact path="/:word/:color/:bg" component={Colored} />
      </Router>
    </div>
  );
}

export default App;
