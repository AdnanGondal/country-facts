import React from "react";
import "./CountriesSideBar.css";

function CountriesSideBar() {
  return (
    <div className="sidebar">
      <h2> Select a Country</h2>
      <ul className="nav">
        <li className="nav-elem">
          <button>United Kingdom</button>
        </li>
        <li className="nav-elem">
          <button>Germany</button>
        </li>
        <li className="nav-elem">
          <button>Pakistan</button>
        </li>
        <li className="nav-elem">
          <button>China</button>
        </li>
      </ul>
    </div>
  );
}

export default CountriesSideBar;
