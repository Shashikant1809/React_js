import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./layout.jsx";
import Home from "./components/Home/Home.jsx";
import { Route } from "react-router-dom";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Muser from "./components/Muser/Muser.jsx";
import Github from "./components/Github/Github.jsx";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "", element: <Home /> },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

// way 2 to make route
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<Muser />} />
      <Route path="github" element={<Github />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
