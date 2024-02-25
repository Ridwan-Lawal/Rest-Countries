import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useReducer } from "react";

import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Country from "./pages/Country";
import Loading from "./components/appstate/Loading";
import Error from "./components/appstate/Error";
// import RegionalCountries from "./pages/RegionalCountries";

/*    
local storage to store theme
commit and create git repository

*/

const initialValue = {
  isDark: JSON.parse(localStorage.getItem("countryTheme")),
  status: "loading",
  countriesData: [],
  errMessage: "",
  regionToFilter: "",
  searchCountryForm: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "themeSwitch":
      return { ...state, isDark: !state.isDark };

    case "dataReady":
      return { ...state, countriesData: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error", errMessage: action.payload };

    case "regionToFilter":
      return { ...state, regionToFilter: action.payload };

    case "formOnChange":
      return { ...state, searchCountryForm: action.payload };

    default:
      throw new Error("Unknown error");
  }
}

function App() {
  // eslint-disable-next-line no-undef, no-unused-vars
  const [state, dispatch] = useReducer(reducer, initialValue);
  const {
    isDark,
    countriesData,
    regionToFilter,
    searchCountryForm,
    status,
    errMessage,
  } = state;

  // effect for fetching countries data
  useEffect(function () {
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function getCountries() {
      try {
        const res = await fetch(`http://localhost:8000/countries`, { signal });

        if (!res.ok)
          throw new Error("Something went wrong fetching countries!");

        const data = await res.json();

        dispatch({ type: "dataReady", payload: data });
      } catch (err) {
        if (err.name === "AbortError") return;

        dispatch({ type: "dataFailed", payload: err.message });
      }
    }
    getCountries();

    return () => abortController.abort();
  }, []);

  // effect for storing theme in localStorage
  useEffect(
    function () {
      localStorage.setItem("countryTheme", JSON.stringify(isDark));
    },
    [isDark]
  );

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-veryDarkBlue" : "bg-veryLightGray"
      }  overflow-auto font-nunito transition-colors duration-1000`}
    >
      {status === "loading" && <Loading />}
      {status === "error" && <Error errMessage={errMessage} />}
      {status === "ready" && (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Homepage
                  isDark={isDark}
                  dispatch={dispatch}
                  countriesData={countriesData}
                  regionToFilter={regionToFilter}
                  searchCountryForm={searchCountryForm}
                />
              }
            />
            <Route
              path="country/:countryName"
              element={
                <Country
                  isDark={isDark}
                  dispatch={dispatch}
                  countriesData={countriesData}
                />
              }
            />
            {/* <Route path="africa" element={<RegionalCountries />} /> */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
