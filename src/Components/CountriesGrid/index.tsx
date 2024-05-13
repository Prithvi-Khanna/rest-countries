import { CountryStateType } from "../../Redux/Slices/CountriesSlice";
import { Link } from "react-router-dom";
import { parseCommas } from "../../Utils";

type Props = {
  country: CountryStateType;
  key: number;
};

const CountriesGrid = ({ country, key }: Props) => {
  return (
    <Link
      key={key}
      to={`/details/${country?.name.common}`}
      className="hover:bg-primary-300 dark:hover:bg-primary-dark-300 bg-primary-200 dark:bg-primary-dark-200 min-h-[300px] rounded-lg pb-3 hover:shadow-lg sm:max-w-[264px]"
    >
      <img
        alt="logo"
        className="h-52 w-full rounded-t-lg sm:h-40"
        src={country?.flags.png}
      />
      <div className="px-6 pt-4">
        <div className="mb-4 text-lg font-bold">{country?.name.common}</div>
        <div className="mt-2 sm:mt-1">
          <span>Population: </span>
          <span className="font-thin">
            {parseCommas(country?.population.toString())}
          </span>
        </div>
        <div className="mt-2 sm:mt-1">
          <span>Sub Region: </span>
          <span className="font-thin">{country?.subregion}</span>
        </div>
        <div className="mt-2 sm:mt-1">
          {country?.capital ? (
            <div>
              <span>Capital: </span>
              {country?.capital?.map((capital: string, index: number) => {
                return (
                  <span key={index} className="font-thin">
                    {capital}
                  </span>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  );
};

export default CountriesGrid;
