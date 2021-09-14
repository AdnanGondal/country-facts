import logo from "./logo.svg";
import React from "react";
import "./App.css";
import CountriesSideBar from "./components/CountriesSideBar/CountriesSideBar.js";
import CountryMain from "./components/CountryMain/CountryMain";
function App() {
  return (
    <div className="App">
      <CountriesSideBar />
      <CountryMain />
    </div>
  );
}

export default App;
