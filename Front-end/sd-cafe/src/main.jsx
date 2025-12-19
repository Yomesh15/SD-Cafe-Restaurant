import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Menu from './Components/Menu.jsx';
import LocationContact from './Components/Location.jsx';
import Contact from './Components/Contact.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "menu", element: <Menu /> },
      { path: "location", element: <LocationContact /> },
      { path: "contact", element: <Contact /> }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
