import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import CountriesSideBar from "./components/CountriesSideBar/CountriesSideBar.js";
import CountryMain from "./components/CountryMain/CountryMain";
function App() {
  const [selected, setSelected] = useState(0);
  const [country, setCountry] = useState("United Kingdom");

  function handleCountryChange(country, id) {
    setSelected(id);
    setCountry(country);
  }

  return (
    <div className="App">
      <CountriesSideBar
        handleCountryChange={handleCountryChange}
        selected={selected}
      />
      <CountryMain country={country} countryID={"gb"} />
    </div>
  );
}

export default App;
