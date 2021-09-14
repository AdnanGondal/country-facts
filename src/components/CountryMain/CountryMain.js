import React, { useEffect, useState } from "react";
import "./CountryMain.css";

function CountryMain(props) {
  const [data, setData] = useState(null);
  async function myFetch(url) {
    let res = await fetch(url);
    return res.json();
  }

  useEffect(() => {
    async function fetchMyAPI() {
      let url =
        "https://restcountries.eu/rest/v2/alpha/gb?fields=name;capital;population;flag";
      const data = await myFetch(url);
      setData(data);
    }
    fetchMyAPI();
  }, []);

  console.log(data);

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
