import React from "react";
import ReactDOM from "react-dom";

const test = <p>Hello World!</p>;
// const test = React.createElement("p", null, "Hello World!");
const root = document.createElement("div");
document.body.appendChild(root);

ReactDOM.render(test, root);
