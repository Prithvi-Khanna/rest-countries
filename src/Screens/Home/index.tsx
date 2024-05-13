import { useEffect, useState } from "react";
import SearchBar from "../../Components/SearchBar";
import { useDispatch } from "react-redux";
import {
  CountryStateType,
  GET_COUNTRIES_REQUEST,
} from "../../Redux/Slices/CountriesSlice";
import { useSelector } from "react-redux";
import { StateType } from "../../Redux/Slices/RootReducer";
import FilterDropdown from "../../Components/FilterDropdown";
import CountriesGrid from "../../Components/CountriesGrid";

const Home = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [countriesToDisplay, setCountriesToDisplay] = useState<
    Array<CountryStateType>
  >([]);
  const countries = useSelector(
    (state: StateType) => state.countries.countries,
  );
  const isCountriesLoading = useSelector(
    (state: StateType) => state.countries.isLoading,
  );
  useEffect(() => {
    if (!countries.length) dispatch(GET_COUNTRIES_REQUEST());
  }, []);

  useEffect(() => {
    if (!isCountriesLoading && countries.length)
      setCountriesToDisplay(countries);
  }, [isCountriesLoading, countries]);

  useEffect(() => {
    if (textInput) {
      const filteredCountries = countries.filter((country) =>
        selectedFilter
          ? country.region
              .toLowerCase()
              .includes(selectedFilter?.toLowerCase()) &&
            country.name.common.toLowerCase().includes(textInput.toLowerCase())
          : country.name.common.toLowerCase().includes(textInput.toLowerCase()),
      );
      setCountriesToDisplay(filteredCountries);
    } else {
      setCountriesToDisplay(countries);
    }
  }, [textInput]);

  useEffect(() => {
    if (selectedFilter) {
      const filteredCountries = countries.filter((country) =>
        textInput
          ? country.region
              .toLowerCase()
              .includes(selectedFilter?.toLowerCase()) &&
            country.name.common.toLowerCase().includes(textInput.toLowerCase())
          : country.region
              .toLowerCase()
              .includes(selectedFilter?.toLowerCase()),
      );
      setCountriesToDisplay(filteredCountries);
    } else {
      setCountriesToDisplay(countries);
    }
  }, [selectedFilter]);

  return (
    <>
      <div className="flex w-full">
        <div className="bg-primary-50 dark:bg-primary-dark-50 fixed w-full ">
          <div className="mx-auto w-11/12 flex-col items-center justify-between pb-6 pt-20 sm:flex sm:flex-row">
            <SearchBar textInput={textInput} setTextInput={setTextInput} />
            <FilterDropdown
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />
          </div>
        </div>
      </div>
      <div className="bg-primary-50 dark:bg-primary-dark-50 mt-40 flex-1">
        <div className="mx-auto grid w-11/12 gap-12 pb-20 sm:grid-cols-2 sm:gap-y-20 md:grid-cols-3 lg:grid-cols-4">
          {countriesToDisplay.map((country, index) => (
            <CountriesGrid key={index} country={country} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
