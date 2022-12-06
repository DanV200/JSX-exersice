import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Counter from "./components/counter";
import Exersice from "./components/exersice";
import Ex from "./components/ex";
import Inputex from "./components/inputex";

import Greetme from "./components/greetme";

import ImgTable from "./components/imgTable";
// import Movies from "./components/movies";
import Allmovies from "./components/allmovies";
import Movieshodi from "./components/movieshodi";
import Addnumber from "./components/addnumber";
import Imgdisapear from "./components/imgDisapear";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Ex/> */}
    {/* <Inputex/> */}
    {/* <Counter/> */}
    {/* <Exersice/> */}
    {/* <Greetme/> */}
    {/* <Movies/> */}
    {/* <ImgTable/> */}
    {/* <Allmovies/> */}
    <Addnumber/>
    <Imgdisapear/>
    
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
