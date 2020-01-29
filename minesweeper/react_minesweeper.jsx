import React from "react";
import ReactDOM from "react-dom";
import Minesweeper from "./minesweeper";
import Game from "./components/game";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Game/>, document.getElementById("root"));
});