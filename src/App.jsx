import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { useCountries } from "./contexts/CountryContext";
import Loading from "./components/appstate/Loading";

const Homepage = lazy(() => import("./pages/Homepage"));
const Country = lazy(() => import("./pages/Country"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

/* 
 create a message in case if you are searching for a country that is not in a region

 also, create a message for countries that don't have bordering countries

*/

function App() {
  const { isDark } = useCountries();

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-veryDarkBlue" : "bg-veryLightGray"
      }  overflow-auto font-nunito transition-colors duration-1000`}
    >
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="country/:countryName" element={<Country />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
