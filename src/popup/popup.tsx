import React from "react";
import ReactDOM from "react-dom";
import "popup.css";

const test = <img src="icon.png" />;

// const test = React.createElement("p", null, "Hello World!");
const root = document.createElement("div");
document.body.appendChild(root);

ReactDOM.render(test, root);
