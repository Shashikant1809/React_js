import "./App.css";
// import { Footer, Header } from "./components/Header";

import Student from "./components/Student";

//import order don't matter but name does when we do import multi functions at a time

// for single fucntion we can write any name during import and can use that name during rendering

function App() {
  // let login = true;

  // if (login == true) {
  //   return " i am learning reat from web3Mantra";
  // } else {
  //   return "i am leaning nothing ";
  // }

  // we can't use directly if else in JSX

  //

  // so we use ternary operator

  return (
    <div className="App">
      {/* how to use if else in JSX  */}

      {(() => {
        {
          /* write if else  */
        }
      })()}
      <Student />
    </div>
  );
}

export default App;
