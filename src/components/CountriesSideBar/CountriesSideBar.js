import React, { useState, useEffect } from "react";
import "./CountriesSideBar.css";

function CountriesSideBar(props) {
  const selected = props.selected;
  console.log(selected);

  const [data, setData] = useState(null);
  //const [elems, setElems] = useState(null);

  async function myFetch(url) {
    let res = await fetch(url);
    return res.json();
  }

  useEffect(() => {
    async function fetchMyAPI() {
      let url = `https://restcountries.eu/rest/v2/all?fields=name;alpha2Code`;
      const data = await myFetch(url);
      setData(data);
    }

    fetchMyAPI();
  }, []);

  const handleClick = (evt) => {
    const id = evt.target.id;
    const name = evt.target.value;
    props.handleCountryChange(name, id);
  };

  const randomNine = (arr) => {
    // note the initial array is being changed
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 9);
  };

  const getElems = () => {
    const array = randomNine(data);
    console.log(array);
    return array.map((item) => {
      return (
        <li
          onClick={handleClick}
          className={`nav-elem ${
            selected === item.alpha2Code ? "selected" : null
          }`}
        >
          <button id={item.alpha2Code} value={item.name}>
            {item.name}
          </button>
        </li>
      );
    });
  };

  const elems = data && getElems();
  const exID = data && data[0].alpha2Code;
  const exName = data && data[0].name;

  return (
    <div className="sidebar">
      <h2> Select a Country </h2>
      <ul className="nav">
        <li
          onClick={handleClick}
          className={`nav-elem ${selected === "gb" ? "selected" : null}`}
        >
          <button id={"gb"} value="United Kingdom">
            United Kingdom
          </button>
        </li>
        <li
          onClick={handleClick}
          className={`nav-elem ${selected === exID ? "selected" : null}`}
        >
          <button id={exID} value={exName}>
            {exName}
          </button>
        </li>
        {elems}
      </ul>
    </div>
  );
}

export default CountriesSideBar;
