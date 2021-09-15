import React from "react";
import "./CountriesSideBar.css";

function CountriesSideBar(props) {
  const selected = props.selected;

  //const [elems, setElems] = useState(null);

  const handleClick = (evt) => {
    const id = evt.target.id;
    const name = evt.target.value;
    props.handleCountryChange(name, id);
  };

  const countriesArray = props.countries;

  const elements =
    countriesArray &&
    countriesArray.map((country, i) => {
      const code = country.alpha2Code;
      const name = country.name;
      return (
        <li
          key={i}
          onClick={handleClick}
          className={`nav-elem ${selected === code ? "selected" : null}`}
        >
          <button id={code} value={name}>
            {name}
          </button>
        </li>
      );
    });

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
        {elements}
      </ul>
    </div>
  );
}

export default CountriesSideBar;
