import { useState } from "react";
import UserContext from "./Context/UserContext";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/login";
import Profile from "./Components/profile";
function App() {
  return (
    <UserContextProvider>
      <h1> react with chai </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
