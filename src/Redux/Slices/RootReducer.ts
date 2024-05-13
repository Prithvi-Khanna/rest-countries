import countriesReducer, { CountriesType } from "./CountriesSlice";

export type StateType = {
    countries: CountriesType;
  };
  

const rootReducers = {
  countries: countriesReducer,
};

export default rootReducers;