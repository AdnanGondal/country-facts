import React, { useState } from "react";
import "./CountriesSideBar.css";

function CountriesSideBar(props) {
  const selected = props.selected;
  console.log(selected);

  const handleClick = (evt) => {
    const id = evt.target.id;
    const name = evt.target.value;
    props.handleCountryChange(name, id);
  };

  return (
    <div className="sidebar">
      <h2> Select a Country</h2>
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
          className={`nav-elem ${selected === "de" ? "selected" : null}`}
        >
          <button id={"de"} value="Germany">
            Germany
          </button>
        </li>
      </ul>
    </div>
  );
}

export default CountriesSideBar;
