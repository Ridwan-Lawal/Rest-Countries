/* eslint-disable react/prop-types */
import { IoSearch } from "react-icons/io5";
import { useCountries } from "../../contexts/CountryContext";

function Form() {
  const { isDark, searchCountryForm, dispatch } = useCountries();

  return (
    <form
      className={` flex gap-8 items-center px-4 py-3 rounded-lg  ${
        isDark
          ? "bg-darkBlue shadow-gray-800 shadow-lg"
          : "bg-white shadow-gray-200 shadow-md"
      } transition-all duration-1000  md:w-[50%] md:w-full`}
    >
      <IoSearch className="text-[24px] text-gray-400" />
      <input
        type="text"
        value={searchCountryForm}
        onChange={(e) =>
          dispatch({ type: "formOnChange", payload: e.target.value })
        }
        placeholder="Search for a country..."
        className={`${
          isDark ? "text-white" : "text-veryDarkBlue2"
        } focus:outline-none bg-inherit  w-[80%] py-1   placeholder:text-gray-300 `}
      />
    </form>
  );
}

export default Form;
