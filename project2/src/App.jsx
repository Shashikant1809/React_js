import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card.jsx";

function App() {
  const [count, setCount] = useState(0);
  let arr = [1, 2, 3, 4, 5, 6];
  let myObj = {
    name: "umesh",
    age: 12,
  };
  return (
    <>
      <h1 className="bg-green-400 rounded-xl p-4 mb-5">Tailwind Test</h1>
      {/* <Card name="umesh" myArr={arr} obj={myObj} /> */}
      <Card name="umesh" />
      <Card name="nitesh" />
      <Card name="goldi" />
    </>
  );
}

export default App;
