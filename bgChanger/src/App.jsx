import "./App.css";
import { useState } from "react";
function App() {
  let [color, setColor] = useState("black");

  return (
    <div
      className=" w-full p-4 h-screen rounded-xl "
      style={{ backgroundColor: color }}
    >
      <div className="fixed justify-center bottom-12 inset-x-0 flex flex-wrap">
        <div className="flex flex-wrap justify-center gap-3 rounded-xl px-3 py-2 shadow-lg  bg-white ">
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>

          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>

          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button
            onClick={() => setColor("cyan")}
            className="outline-none px-4 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "cyan" }}
          >
            Cyan
          </button>

          <button
            onClick={() => setColor("magenta")}
            className="outline-none px-4 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "magenta" }}
          >
            Magenta
          </button>

          <button
            onClick={() => setColor("teal")}
            className="outline-none px-4 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "teal" }}
          >
            Teal
          </button>

          <button
            onClick={() => setColor("gray")}
            className="outline-none px-4 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
