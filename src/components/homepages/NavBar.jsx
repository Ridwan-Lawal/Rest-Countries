/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useCountries } from "../../contexts/CountryContext";

function NavBar() {
  const navigate = useNavigate();

  const { isDark, dispatch } = useCountries();
  return (
    <nav
      className={` ${
        isDark ? "bg-darkBlue shadow-gray-800" : "bg-white shadow-gray-200"
      } shadow-md transition-all duration-1000 `}
    >
      <div
        className={` ${
          isDark && "text-white"
        } flex  text-veryDarkBlue2  justify-between h-[80px] items-center pb-1 max-w-2xl mx-auto md:max-w-6xl px-8 `}
      >
        <h1
          onClick={() => navigate("/")}
          className="text-[20px] md:text-[23px] font-bold cursor-pointer"
        >
          Where in the world?
        </h1>

        <div
          onClick={() => dispatch({ type: "themeSwitch" })}
          className="text-[17px]  md:font-medium flex items-center cursor-pointer gap-3"
        >
          {isDark ? (
            <IoSunnyOutline className="text-lg" />
          ) : (
            <IoMoonOutline className="text-lg" />
          )}
          <p className="">{isDark ? "Light" : "Dark"} Mode</p>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
