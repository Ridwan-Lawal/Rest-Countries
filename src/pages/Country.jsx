/* eslint-disable react/prop-types */
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "../components/countryDetails/Button";
import CountryProperties from "../components/countryDetails/CountryProperties";
import NavBar from "../components/homepages/NavBar";
import BorderCountries from "../components/countryDetails/BorderCountries";
import { useNavigate, useParams } from "react-router-dom";
import { useCountries } from "../contexts/CountryContext";

function Country() {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const { isDark, dispatch, countriesData } = useCountries();

  const selectedCountry = countriesData.filter((country) =>
    country.name.toLowerCase().includes(countryName.toLowerCase())
  );

  return (
    <div className=" space-y-12 lg:space-y-14">
      <NavBar isDark={isDark} dispatch={dispatch} />

      <div className="max-w-lg mx-auto md:max-w-2xl lg:max-w-[1300px] px-8 space-y-20 pb-20 ">
        <Button onClick={() => navigate(-1)}>
          <FaArrowLeftLong
            className={`${isDark ? "text-white" : "text-veryDarkBlue2"}`}
          />
        </Button>
        <CountryProperties selectedCountry={selectedCountry?.at(0)}>
          <BorderCountries borderCountries={selectedCountry.at(0)?.borders} />
        </CountryProperties>
      </div>
    </div>
  );
}

export default Country;
