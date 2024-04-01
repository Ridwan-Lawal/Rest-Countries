/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "./Button";
import { useCountries } from "../../contexts/CountryContext";

function BorderCountries({ borderCountries }) {
  const { isDark, countriesData } = useCountries();

  const borderCountriesInFull = countriesData.filter((country) =>
    borderCountries?.includes(country.alpha3Code)
  );

  return (
    <div
      className={` flex flex-col md:flex-row  md:gap-8 mt-16 md:mt-20 ${
        isDark ? "text-white" : "text-veryDarkBlue2"
      } `}
    >
      <h2 className="text-xl font-bold  w-fit">Border Countries:</h2>

      <div className="flex items-center flex-wrap gap-5 mt-6 md:mt-0 ">
        {borderCountriesInFull.map((borderCountry) => (
          <Link
            key={borderCountry.alpha3Code}
            to={`/country/${borderCountry.name}`}
          >
            <Button isDark={isDark} content={borderCountry.name} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BorderCountries;
