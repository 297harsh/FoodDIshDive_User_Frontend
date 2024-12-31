<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './Context/StoreContext'

ReactDOM.createRoot(document.getElementById('root')).render(
=======
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";
import { food_list } from "./assets/assets.js";

ReactDOM.createRoot(document.getElementById("root")).render(
>>>>>>> deb05dc44213ea261777655f69f22b2d359fbf69
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
<<<<<<< HEAD
  </BrowserRouter>,
)
=======
  </BrowserRouter>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
);
>>>>>>> deb05dc44213ea261777655f69f22b2d359fbf69
