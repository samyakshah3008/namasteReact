// Example of nested Html elements with use of ReactJS
import React from "react";
import ReactDOM from "react-dom/client";
const childDiv = React.createElement(
  "div",
  {
    id: "child",
  },
  "Child Div 1"
);
const childDiv2 = React.createElement(
  "div",
  {
    id: "child",
  },
  "Child Div 2"
);
const parentDiv = React.createElement(
  "div",
  {
    id: "parent-div",
  },
  [childDiv, childDiv2]
);
const rootID = document.querySelector("#root");
const root = ReactDOM.createRoot(rootID);
root.render(parentDiv);
