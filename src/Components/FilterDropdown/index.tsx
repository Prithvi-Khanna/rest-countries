import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type Props = {
  selectedFilter: string;
  setSelectedFilter: (text: string) => void;
};

const FilterDropdown = ({ selectedFilter, setSelectedFilter }: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const handleDropdownOnClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleFilterSelected = (region: string) => {
    if (selectedFilter === region) setSelectedFilter("");
    else setSelectedFilter(region);
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-1/2 sm:max-w-[180px] flex-col items-center">
      <div
        onClick={handleDropdownOnClick}
        className="hover:shadow-lg hover:bg-primary-300 dark:hover:bg-primary-dark-300 bg-primary-200 dark:bg-primary-dark-200 flex h-10 sm:h-14 mt-4 sm:mt-0 items-center justify-between sm:justify-center rounded-md p-6 sm:p-3"
      >
        <div className="mr-6">Filter By Region</div>
        <FontAwesomeIcon icon={isDropdownOpen ? faArrowUp : faArrowDown} />
      </div>
      <div className="relative w-full">
        {isDropdownOpen ? (
          <>
            <div className="bg-primary-200 dark:bg-primary-dark-200 absolute top-1 z-40 w-full rounded-md">
              {regions.map((region, index) => (
                <div
                  onClick={() => handleFilterSelected(region)}
                  key={index}
                  className={` hover:bg-primary-300 dark:hover:bg-primary-dark-300 py-2 pl-3 ${selectedFilter === region ? "bg-primary-50 dark:bg-primary-dark-50" : ""}`}
                >
                  <span>{region}</span>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default FilterDropdown;
