import { useEffect, useState } from "react";

export function useConvertPopulation(country) {
  const [countryPopulation, setCountryPopulation] = useState();

  useEffect(
    function () {
      const formattedNumber = new Intl.NumberFormat().format(
        country?.population
      );

      setCountryPopulation(formattedNumber);
    },
    [country]
  );

  return countryPopulation;
}
