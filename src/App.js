import React, { useState } from "react";
import "./App.css";
import CountriesSideBar from "./components/CountriesSideBar/CountriesSideBar.js";
import CountryMain from "./components/CountryMain/CountryMain";
function App() {
  const [country, setCountry] = useState("United Kingdom");
  const [code, setCode] = useState("gb");

  function handleCountryChange(country, id) {
    setCountry(country);
    setCode(id);
  }

  return (
    <div className="App">
      <CountriesSideBar
        handleCountryChange={handleCountryChange}
        selected={code}
      />
      <CountryMain country={country} code={code} />
    </div>
  );
}

export default App;
