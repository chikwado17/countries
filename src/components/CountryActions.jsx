import React from "react";
import { Input } from "semantic-ui-react";
import { useCountry } from "../context/CountryContext";
import { useTheme } from "../context/ThemeContext";

const CountryActions = () => {
  const { handleRegionFetch, handleSearch } = useCountry();
  const { themeMode } = useTheme();
  return (
    <>
      <div className="search">
        <form onSubmit={(e) => e.preventDefault()}>
          <Input
            className={`search-field ${themeMode ? "search-field-dark" : ""}`}
            type="text"
            icon="search"
            iconPosition="left"
            placeholder="Search for a country..."
            size="huge"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </form>

        <div className="filter">
          <select
            className={`countrySelect ${themeMode ? "select-field-dark" : ""}`}
            onChange={(e) => handleRegionFetch(e.target.value)}
          >
            <option hidden defaultValue>
              Filter by Region
            </option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default CountryActions;
