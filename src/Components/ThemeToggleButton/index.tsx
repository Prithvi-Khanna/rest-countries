import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as faMoonSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import useMediaQuery from "../../Hooks/useMediaQuery";

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState<string | null>(null);
  const isAboveSmall = useMediaQuery("(min-width: 640px)");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitching = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <button
      className="items-center justify-between"
      onClick={handleThemeSwitching}
    >
      <FontAwesomeIcon
        size={isAboveSmall ? "lg" : "sm"}
        icon={theme === "dark" ? faMoonSolid : faMoon}
      />
      <span className=" hover:text-primary-300 dark:hover:text-primary-dark-300 ml-2 text-xs sm:text-sm md:ml-3 md:text-base">
        Dark Mode
      </span>
      {/* <label className="inline-flex cursor-pointer items-center">
        <input type="checkbox" value="" className="peer sr-only" checked={theme === 'dark'} onChange={handleThemeSwitching} />
        <div className="relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Checked toggle
        </span>
      </label> */}
    </button>
  );
};

export default ThemeToggleButton;
