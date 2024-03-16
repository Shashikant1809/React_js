// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   let [counter, setCounter] = useState(15);

//   const addValue = () => {
//     if (counter >= 20) {
//       counter = 20;
//     } else counter = counter + 1;
//     setCounter(counter);
//   };

//   const decreaseValue = () => {
//     if (counter <= 0) {
//       counter = 0;
//     } else counter = counter - 1;
//     setCounter(counter);
//   };

//   return (
//     <>
//       <h1>Chai and React</h1>
//       <h2>Counter value:{counter}</h2>
//       <button onClick={addValue}>increase Value</button>
//       <button onClick={decreaseValue}>Decrease Value</button>
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  };

  const decreaseValue = () => {
    counter = counter - 1;
    setCounter(counter);
  };

  return (
    <>
      <h1>Chai and React</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>increase Value</button>
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  );
}

export default App;
