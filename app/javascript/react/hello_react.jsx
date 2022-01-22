import React from "react";
import { render } from "react-dom";
import { App } from "./components/App/index.jsx";

document.addEventListener("DOMContentLoaded", () => {
    render(<App />, document.getElementById('react-components'));
  });
