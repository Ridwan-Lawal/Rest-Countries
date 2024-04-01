import { useCountries } from "../../contexts/CountryContext";
import { useConvertPopulation } from "../customHooks/useConvertPopulation";

/* eslint-disable react/prop-types */
function CountryProperties({ children, selectedCountry }) {
  const selectedCountryPopulation = useConvertPopulation(selectedCountry);

  const { isDark } = useCountries();

  return (
    <div
      className={`${
        isDark ? "text-white" : "text-veryDarkBlue2"
      }  flex flex-col gap-12   lg:flex-row lg:items-center lg:gap-20`}
    >
      {/* image */}
      <section className="lg:w-[50%] ">
        <img
          src={selectedCountry?.flags?.svg}
          alt=""
          className="w-full h-full object-cover"
        />
      </section>
      <div className="lg:w-[50%]">
        <h1 className="text-[25px] md:text-3xl font-extrabold">
          {selectedCountry?.name}
        </h1>

        <div>
          <div className="flex flex-col md:flex-row gap-14 mt-6 md:justify-between md:mt-7">
            <section className="space-y-3">
              <p className="font-light">
                <span className="font-semibold">Native Name: </span>{" "}
                {selectedCountry?.nativeName}
              </p>
              <p className="font-light">
                <span className="font-semibold">Population: </span>{" "}
                {selectedCountryPopulation}
              </p>
              <p className="font-light">
                <span className="font-semibold">Region: </span>{" "}
                {selectedCountry?.region}
              </p>
              <p className="font-light">
                <span className="font-semibold">Sub Region: </span>{" "}
                {selectedCountry?.subregion}
              </p>
              <p className="font-light">
                <span className="font-semibold">Capital: </span>{" "}
                {selectedCountry?.capital}
              </p>
            </section>

            <section className="space-y-3">
              <p className="font-light">
                <span className="font-semibold">Top Level Domain: </span>{" "}
                {selectedCountry?.topLevelDomain.at(0)}
              </p>
              <p className="font-light">
                <span className="font-semibold">Currencies: </span>{" "}
                {selectedCountry?.currencies.at(0).name}
              </p>
              <p className="font-light">
                <span className="font-semibold">Languages: </span>{" "}
                {selectedCountry?.languages
                  .map((language) => language.name)
                  .join(", ")}
              </p>
            </section>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}

export default CountryProperties;
