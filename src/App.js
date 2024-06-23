import "./App.css";
// import { Footer, Header } from "./components/Header";

import Student from "./components/Student";

//import order don't matter but name does when we do import multi functions at a time

// for single fucntion we can write any name during import and can use that name during rendering

function App() {
  return (
    <div className="App">
      <Student />
    </div>
  );
}

export default App;
