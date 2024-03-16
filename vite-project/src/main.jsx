import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Chai from "./Chai.jsx";

function Myapp() {
  return (
    <div>
      <h1>custom app</h1>
    </div>
  );
}

// ACCORDING TO US
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   Childern: "Click me to visit Google ",
// };

const AnotherElement = (
  <a href="https://google.com" target="_blank">
    Vist Google
  </a>
);

// CREATING REACTELEMENT USING REACT
const anotherUser = "shashikant verma ";
const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click me to visit Google",
  anotherUser
);
ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// AnotherElement;
// reactElement
