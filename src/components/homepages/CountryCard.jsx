/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { useConvertPopulation } from "../customHooks/useConvertPopulation";

/* eslint-disable react/prop-types */
function CountryCard({ isDark, country }) {
  const countryPopulation = useConvertPopulation(country);

  return (
    <div
      className={` pb-10 rounded-lg overflow-hidden max-w-[340px] md:max-w-[320px] ${
        isDark
          ? "bg-darkBlue text-white shadow-gray-900"
          : "bg-white text-veryDarkBlue2 shadow-gray-200"
      } mx-auto shadow-lg transition-all duration-1000  `}
    >
      <section className="h-[200px]  overflow-hidden">
        <img
          src={country?.flags?.png}
          alt=""
          className="object-cover w-full h-full"
        />
      </section>
      <section className="mt-8 px-6">
        <h2 className="text-2xl font-extrabold ">{country?.name}</h2>

        <aside className="mt-3 space-y-2">
          <p>
            <span className="font-semibold">Population: </span>
            {countryPopulation}
          </p>
          <p>
            <span className="font-semibold">Region: </span> {country?.region}
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            {country?.capital}
          </p>
        </aside>
      </section>
    </div>
  );
}

export default CountryCard;
