import React, { useEffect, useState } from "react";
import "./CountryMain.css";

function CountryMain(props) {
  const [data, setData] = useState(null);
  async function myFetch(url) {
    let res = await fetch(url);
    return res.json();
  }

  async function fetchMyAPI(code) {
    let url = `https://restcountries.eu/rest/v2/alpha/${code}?fields=name;capital;population;flag`;
    const data = await myFetch(url);
    setData(data);
  }

  // Initial setup
  useEffect(() => {
    fetchMyAPI("gb");
  }, []);

  // How it changes to different country inputs

  useEffect(() => {
    fetchMyAPI(props.code);
  }, [props.code]);

  return (
    <div className="country-container">
      <h2>{props.country}</h2>
      <div className="facts-container">
        <p>Population: {data ? data.population : "Error Loading"}</p>
        <p>Capital City: {data ? data.capital : "Error Loading"} </p>
        Flag:
        <img
          className="flag-img"
          alt="flag"
          src={`${data ? data.flag : "Error Loading"}`}
        />
      </div>
    </div>
  );
}

export default CountryMain;
