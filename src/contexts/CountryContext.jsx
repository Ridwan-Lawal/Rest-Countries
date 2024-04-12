/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

import worldCountriesData from "../local-data/data.json";

const initialValue = {
  isDark: false,
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

    case "countryData/fromStorage":
      return action.payload;

    default:
      throw new Error("Unknown error");
  }
}

const CountryContext = createContext();

function CountryProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const { isDark, countriesData, regionToFilter, searchCountryForm } = state;

  // effect for storing state in localStorage
  useEffect(
    function () {
      if (state === initialValue) return;
      localStorage.setItem("countryData", JSON.stringify(state));
    },
    [state]
  );

  // effect for getting stored state from the local storage
  useEffect(function () {
    const countryData = JSON.parse(localStorage.getItem("countryData"));
    if (!countryData) return;
    dispatch({ type: "countryData/fromStorage", payload: countryData });
  }, []);

  const values = useMemo(() => {
    return {
      isDark,
      countriesData,
      regionToFilter,
      searchCountryForm,
      dispatch,
    };
  }, [isDark, countriesData, regionToFilter, searchCountryForm, dispatch]);

  return (
    <CountryContext.Provider value={values}>{children}</CountryContext.Provider>
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
