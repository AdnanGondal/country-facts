import React, { useState } from "react";
import "./CountriesSideBar.css";

function CountriesSideBar() {
  const [selected, setSelected] = useState(0);

  const handleClick = (evt) => {
    const id = evt.target.id;
    const name = evt.target.value;
    console.log(name);
    setSelected(parseInt(id));
  };

  return (
    <div className="sidebar">
      <h2> Select a Country</h2>
      <ul className="nav">
        <li
          onClick={handleClick}
          className={`nav-elem ${selected === 0 ? "selected" : null}`}
        >
          <button id={0} value="United Kingdom">
            United Kingdom
          </button>
        </li>
        <li
          onClick={handleClick}
          className={`nav-elem ${selected === 1 ? "selected" : null}`}
        >
          <button id={1} value="Germany">
            Germany
          </button>
        </li>
      </ul>
    </div>
  );
}

export default CountriesSideBar;
