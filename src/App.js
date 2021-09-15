import React, { useState, useEffect } from "react";
import "./App.css";
import CountriesSideBar from "./components/CountriesSideBar/CountriesSideBar.js";
import CountryMain from "./components/CountryMain/CountryMain";
function App() {
  const [country, setCountry] = useState("United Kingdom");
  const [code, setCode] = useState("gb");
  const [countries, setCountries] = useState(null);

  async function myFetch(url) {
    let res = await fetch(url);
    res = await res.json();
    return res;
  }

  useEffect(() => {
    async function setCountryData() {
      let url = `https://restcountries.eu/rest/v2/all?fields=name;alpha2Code`;
      const res = await myFetch(url);
      const countryArray = randomNine(res);
      setCountries(countryArray);
    }

    setCountryData();
  }, []);

  const randomNine = (arr) => {
    // get nine random countries from them all
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 9);
  };

  function handleCountryChange(country, id) {
    setCountry(country);
    setCode(id);
  }

  return (
    <div className="App">
      <CountriesSideBar
        handleCountryChange={handleCountryChange}
        selected={code}
        countries={countries}
      />
      <CountryMain country={country} code={code} />
    </div>
  );
}

export default App;
