/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";

import worldCountriesData from "../local-data/data.json";

const initialValue = {
  isDark: JSON.parse(localStorage.getItem("countryTheme")),
  countriesData: worldCountriesData,
  regionToFilter: "",
  searchCountryForm: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "themeSwitch":
      return { ...state, isDark: !state.isDark };

    case "regionToFilter":
      return { ...state, regionToFilter: action.payload };

    case "formOnChange":
      return { ...state, searchCountryForm: action.payload };

    default:
      throw new Error("Unknown error");
  }
}

const CountryContext = createContext();

function CountryProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const { isDark, countriesData, regionToFilter, searchCountryForm } = state;

  // effect for storing theme in localStorage
  useEffect(
    function () {
      localStorage.setItem("countryTheme", JSON.stringify(isDark));
    },
    [isDark]
  );

  return (
    <CountryContext.Provider
      value={{
        isDark,
        countriesData,
        regionToFilter,
        searchCountryForm,
        dispatch,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}

function useCountries() {
  const value = useContext(CountryContext);
  if (value === undefined)
    throw new Error(
      "You trying to consume context in a component that is not a child component of the provider"
    );
  return value;
}

export { CountryProvider, useCountries };
