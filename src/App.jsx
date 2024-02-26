import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useReducer } from "react";

import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Country from "./pages/Country";
import Error from "./components/appstate/Error";
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

function App() {
  // eslint-disable-next-line no-undef, no-unused-vars
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
    <div
      className={`min-h-screen ${
        isDark ? "bg-veryDarkBlue" : "bg-veryLightGray"
      }  overflow-auto font-nunito transition-colors duration-1000`}
    >
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
    </div>
  );
}

export default App;
