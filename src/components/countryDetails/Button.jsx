import { useCountries } from "../../contexts/CountryContext";

/* eslint-disable react/prop-types */
function Button({
  content = "Back",
  textSize = "text-[15px]",
  children,
  onClick,
}) {
  const { isDark } = useCountries();
  return (
    <button
      onClick={onClick}
      className={`  flex items-center shadow-custom rounded-sm gap-4 px-6 py-1  ${
        isDark
          ? "text-white bg-darkBlue"
          : "bg-white text-veryDarkBlue2 transition-all duration-1000"
      }  `}
    >
      {children}
      <p className={`${textSize} `}>{content}</p>
    </button>
  );
}

export default Button;
