import { createContext, useContext, useEffect, useReducer } from "react";

const CountryContext = createContext();

const BASE_URL = "https://restcountries.com/v3.1";

const initialState = {
  countries: [],
  searchTerm: "",
  selectedRegion: "",
  error: "",
  isLoading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: !state.isLoading,
      };

    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };

    case "FETCH_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
      };

    case "FILTER_BY_REGION":
      return {
        ...state,
        selectedRegion: action.payload,
      };
    case "FILTER_BY_SEARCH":
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};

const CountryContextProvider = ({ children }) => {
  const [
    { countries, searchTerm, selectedRegion, error, darkMode, isLoading },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchAllCountry = async () => {
      try {
        dispatch({
          type: "LOADING",
        });
        // setError("");
        const res = await fetch(`${BASE_URL}/all`);
        if (!res.ok) {
          throw new Error(
            "Something went wrong fetching countries. Please, check if country name is correct!"
          );
        }
        const data = await res.json();
        if (data.Response === "False") {
          throw new Error("Country not found!");
        }
        dispatch({
          type: "FETCH_COUNTRIES",
          payload: data,
        });
      } catch (err) {
        dispatch({
          type: "ERROR",
          payload: err.message,
        });
      } finally {
        dispatch({
          type: "LOADING",
        });
      }
    };

    fetchAllCountry();
  }, []);

  //filter the countries and pass it to the country state.
  let filteredCountries = countries.filter((countryItem) =>
    countryItem.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //Sorting by region
  if (selectedRegion) {
    filteredCountries = filteredCountries.filter(
      (countryItem) =>
        countryItem.region.toLowerCase() === selectedRegion.toLowerCase()
    );
  }

  const toggleDarkMode = () => {
    dispatch({
      type: "THEME",
    });
  };

  const handleSearch = (name) => {
    dispatch({
      type: "FILTER_BY_SEARCH",
      payload: name,
    });
  };

  const handleRegionFetch = (region) => {
    dispatch({
      type: "FILTER_BY_REGION",
      payload: region,
    });
  };
  return (
    <CountryContext.Provider
      value={{
        darkMode,
        countries: filteredCountries,
        isLoading,
        toggleDarkMode,
        dispatch,
        error,
        handleRegionFetch,
        handleSearch,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

const useCountry = () => {
  const context = useContext(CountryContext);
  return context;
};

export { useCountry };

export default CountryContextProvider;
