import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Country from "./pages/Country";
import { useCountries } from "./contexts/CountryContext";

function App() {
  const { isDark } = useCountries();

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-veryDarkBlue" : "bg-veryLightGray"
      }  overflow-auto font-nunito transition-colors duration-1000`}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="country/:countryName" element={<Country />} />

          {/* <Route path="africa" element={<RegionalCountries />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
