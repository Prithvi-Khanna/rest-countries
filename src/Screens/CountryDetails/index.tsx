import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { StateType } from "../../Redux/Slices/RootReducer";
import {
  CountryStateType,
  GET_COUNTRIES_REQUEST,
} from "../../Redux/Slices/CountriesSlice";
import { useDispatch } from "react-redux";
import { parseCommas } from "../../Utils";
import useMediaQuery from "../../Hooks/useMediaQuery";

const CountryDetails = () => {
  const isAboveSmall = useMediaQuery("(min-width: 640px)");
  const dispatch = useDispatch();
  const countries = useSelector(
    (state: StateType) => state.countries.countries,
  );
  const [countryName, setCountryName] = useState<string>("");
  const [countryDetails, setCountryDetails] = useState<CountryStateType | null>(
    null,
  );
  const [borderCountriesNames, setBorderCountriesNames] = useState<
    Array<string>
  >([]);

  useEffect(() => {
    if (!countries.length) dispatch(GET_COUNTRIES_REQUEST());
  }, []);

  useEffect(() => {
    const pathName = window.location.pathname;
    const pathSplit = pathName.split("/");
    let borderCountriesNames: Array<string> = [];
    if (pathSplit.length && pathSplit.length === 3) {
      const pathToBeChecked: string = pathSplit[2].replaceAll("%20", " ");
      const selectedCountryArray = countries.filter(
        (country: CountryStateType) =>
          country.name.common.toLowerCase() === pathToBeChecked.toLowerCase(),
      );
      if (selectedCountryArray.length) {
        const selectedCountry: CountryStateType = selectedCountryArray[0];
        if (selectedCountry?.borders && selectedCountry?.borders.length) {
          selectedCountry.borders.forEach((borderCountryCode) => {
            const borderCountryName = countries.filter(
              (country) => country?.cca3 === borderCountryCode,
            );
            borderCountriesNames.push(borderCountryName[0].name.common);
          });
          setBorderCountriesNames(borderCountriesNames);
        }
        setCountryDetails(selectedCountry);
      } else {
        setCountryName("");
      }
    }
  }, [countries, countryName]);

  const getNativeName = useMemo(() => {
    let nativeName = [];
    if (countryDetails) {
      nativeName = Object.keys(countryDetails?.name?.nativeName).map(
        (nativeName: string) => {
          if (countryDetails?.name?.nativeName[nativeName])
            nativeName = countryDetails?.name?.nativeName[nativeName]?.common;
          return nativeName;
        },
      );
      return nativeName[0];
    }
  }, [countryDetails]);

  return (
    <div className="bg-primary-50 dark:bg-primary-dark-50 flex items-center justify-center pt-20">
      <div className=" w-11/12">
        <button className="hover:shadow-lg hover:bg-primary-300 dark:hover:bg-primary-dark-300 bg-primary-200 dark:bg-primary-dark-200 items-center rounded-sm px-6 py-1 sm:px-[26px] sm:py-2 md:mt-10">
          <Link to="/">
            <div>
              <FontAwesomeIcon
                size={isAboveSmall ? "lg" : "sm"}
                icon={faArrowLeft}
              />
              <span className="ml-2 text-sm font-light sm:ml-4 sm:text-base">
                Back
              </span>
            </div>
          </Link>
        </button>
        {countryDetails ? (
          <div className="w-full items-center justify-between pt-10 sm:flex sm:pt-20">
            <img
              alt="logo"
              className="mt-6 h-2/3 w-full rounded-lg sm:mt-0 sm:w-1/2"
              src={countryDetails?.flags.png}
            />
            <div className="w-full sm:w-1/3">
              <div className="mt-12 text-3xl font-bold sm:mt-0">
                {countryDetails?.name?.common}
              </div>
              <div className="mt-6 justify-between ">
                <div
                  className={`${isAboveSmall ? "flex" : "flex-col"} justify-between`}
                >
                  <div className=" w-full sm:w-1/2">
                    <div className="mb-3">
                      <span>Native Name: </span>
                      <span className="font-thin">{getNativeName}</span>
                    </div>
                    <div className="mb-3">
                      <span>Population: </span>
                      <span className="font-thin">
                        {countryDetails
                          ? parseCommas(countryDetails?.population?.toString())
                          : ""}
                      </span>
                    </div>
                    <div className="mb-3">
                      <span>Region: </span>
                      <span className="font-thin">
                        {countryDetails?.region}
                      </span>
                    </div>
                    <div className="mb-3">
                      <span>Sub Region: </span>
                      <span className="font-thin">
                        {countryDetails?.subregion}
                      </span>
                    </div>
                    <div className="mb-3">
                      <span>Capital: </span>
                      {countryDetails?.capital.map(
                        (capital: string, index: number) => {
                          return (
                            <span key={index} className="font-thin">
                              {capital}
                            </span>
                          );
                        },
                      )}
                    </div>
                  </div>
                  <div className="w-full sm:ml-4 sm:w-1/2">
                    <div className="mb-3">
                      <span>Top Level Domain : </span>
                      <span className="font-thin">{getNativeName}</span>
                    </div>
                    <div className="mb-3">
                      <span>Currencies: </span>
                      {Object.keys(countryDetails?.currencies).map(
                        (currencyCode: string, index: number) => {
                          return (
                            <span key={index} className="font-thin">
                              {countryDetails?.currencies[currencyCode].name}
                            </span>
                          );
                        },
                      )}
                    </div>
                    <div className="mb-3">
                      <span>Languages: </span>
                      {countryDetails
                        ? Object.keys(countryDetails?.languages).map(
                            (currency: string, index: number) => {
                              return (
                                <span key={index} className="font-thin">
                                  {countryDetails?.languages[currency]}{" "}
                                </span>
                              );
                            },
                          )
                        : null}
                    </div>
                  </div>
                </div>
                {countryDetails?.borders ? (
                  <div className="my-12">
                    <span>Border Countries: </span>

                    <span>
                      {borderCountriesNames.map((borderCountryName, index) => (
                        <Link
                          onClick={() => {
                            setCountryName(borderCountryName);
                          }}
                          to={`/details/${borderCountryName}`}
                        >
                          <button
                            className="hover:shadow-lg hover:bg-primary-300 dark:hover:bg-primary-dark-300 bg-primary-200 dark:bg-primary-dark-200 mb-3 ml-3 px-4 py-1 text-xs font-thin"
                            key={index}
                          >
                            {borderCountryName}{" "}
                          </button>
                        </Link>
                      ))}
                    </span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-24 flex-1 items-center justify-center text-center text-5xl">
            Oops!! Country Not Found
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDetails;
