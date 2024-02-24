/* eslint-disable react/prop-types */
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "../components/countryDetails/Button";
import CountryProperties from "../components/countryDetails/CountryProperties";
import NavBar from "../components/homepages/NavBar";
import BorderCountries from "../components/countryDetails/BorderCountries";
import { useNavigate, useParams } from "react-router-dom";

function Country({ isDark, dispatch, countriesData }) {
  const { countryName } = useParams();
  const navigate = useNavigate();

  const selectedCountry = countriesData.filter((country) =>
    country.name.toLowerCase().includes(countryName.toLowerCase())
  );

  console.log(selectedCountry, selectedCountry.borders);

  return (
    <div className=" space-y-12 lg:space-y-14">
      <NavBar isDark={isDark} dispatch={dispatch} />

      <div className="max-w-lg mx-auto md:max-w-2xl lg:max-w-[1300px] px-8 space-y-20 pb-20 ">
        <Button onClick={() => navigate(-1)} isDark={isDark}>
          <FaArrowLeftLong
            className={`${isDark ? "text-white" : "text-veryDarkBlue2"}`}
          />
        </Button>
        <CountryProperties
          selectedCountry={selectedCountry?.at(0)}
          isDark={isDark}
        >
          <BorderCountries
            countriesData={countriesData}
            borderCountries={selectedCountry.at(0)?.borders}
            isDark={isDark}
          />
        </CountryProperties>
      </div>
    </div>
  );
}

export default Country;
