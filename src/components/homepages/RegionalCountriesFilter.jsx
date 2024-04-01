/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useCountries } from "../../contexts/CountryContext";

function RegionalCountriesFilter() {
  const [isFilterOptionOpen, setIsFilterOptionOpen] = useState(false);
  const { isDark, dispatch, regionToFilter } = useCountries();

  return (
    <div
      className={`${
        isDark ? "bg-darkBlue text-white" : "bg-white text-veryDarkBlue2"
      } relative w-[65%] sm:w-[50%] md:w-[40%] lg:w-[33%] transition-all duration-1000`}
    >
      <section
        onClick={() => setIsFilterOptionOpen((curStatus) => !curStatus)}
        className={`flex justify-between items-center px-6 py-4 rounded-md shadow-md  gap-12 md:gap-0 ${
          isDark ? "shadow-gray-800" : "shadow-gray-200 "
        } cursor-pointer`}
      >
        <p className="">
          {regionToFilter ? regionToFilter : "Filter by Region"}
        </p>
        <p
          className={`${
            isFilterOptionOpen ? "rotate-180" : "rotate-0"
          } transtion-transform duration-500`}
        >
          <IoIosArrowDown />
        </p>
      </section>

      {isFilterOptionOpen && (
        <ul
          className={` space-y-2 px-6 py-4 mt-2 rounded-md ${
            isDark ? "shadow-gray-800" : "shadow-gray-200"
          } absolute w-full shadow-md  bg-inherit `}
        >
          {["All", "Africa", "America", "Asia", "Europe", "Oceania"].map(
            (country) => (
              <li
                key={country}
                onClick={() =>
                  dispatch({ type: "regionToFilter", payload: country })
                }
                className="cursor-pointer hover:text-gray-300 transition-colors duration-300"
              >
                {country}
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
}

export default RegionalCountriesFilter;
