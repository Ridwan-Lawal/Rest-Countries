/* eslint-disable react/prop-types */
import Form from "../components/homepages/Form";
import CountryCard from "../components/homepages/CountryCard";
import RegionalCountriesFilter from "../components/homepages/RegionalCountriesFilter";
import NavBar from "../components/homepages/NavBar";
import { Link } from "react-router-dom";
import { useCountries } from "../contexts/CountryContext";
import { useEffect } from "react";

function Homepage() {
  const { countriesData, regionToFilter, searchCountryForm } = useCountries();

  const regionalCountries = countriesData
    .filter((country) =>
      regionToFilter === "All"
        ? country
        : regionToFilter
        ? country.region.toLowerCase().includes(regionToFilter.toLowerCase())
        : country
    )
    .filter((country) =>
      searchCountryForm
        ? country.name.toLowerCase().includes(searchCountryForm.toLowerCase())
        : country
    );

  useEffect(
    function () {
      console.log(regionalCountries);
    },
    [regionalCountries]
  );

  return (
    <div className="pb-20">
      <NavBar />

      <div className="max-w-2xl mx-auto md:max-w-6xl px-8 mt-10 md:mt-12">
        <div className="flex flex-col md:flex-row justify-between gap-14 md:gap-8">
          <Form />
          <RegionalCountriesFilter />
        </div>
        {!regionalCountries.length && (
          <p className="flex items-center text-2xl flex-col gap-3  text-center mt-32">
            <span className="text-3xl"> ☹</span>
            Couldn&apos;t find the country you were looking for! try another
            region
          </p>
        )}
        <div className="mt-14 grid grid-cols-1 items-center gap-12 md:gap-14 md:grid-cols-2 lg:grid-cols-3 ">
          {regionalCountries?.map((country, id) => (
            <Link to={`/country/${country.name}`} key={id}>
              <CountryCard country={country} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
