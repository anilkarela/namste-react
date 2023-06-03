import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello World"),
    React.createElement("h1", {}, "This is sibling"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello World"),
    React.createElement("h1", {}, "This is sibling"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading", name: "anil", xyz: "karela" },
  "hello world from React"
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
