import { createSlice } from "@reduxjs/toolkit";

interface CountryNameType {
  common: string;
  official: string;
  nativeName: Array<object>;
}
interface PostalCodeType {
  format: string;
  regex: string;
}
export interface CountryStateType {
  name: CountryNameType;
  tld: Array<string>;
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    MDL: {
      name: string;
      symbol: string;
    };
  };
  idd: {
    root: string;
    suffixes: Array<string>;
  };
  capital: Array<string>;
  altSpellings: Array<string>;
  region: string;
  subregion: string;
  languages: Array<object>;
  translations: object;
  latlng: Array<number>;
  landlocked: boolean;
  borders: Array<string>;
  area: number;
  demonyms: object;
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  gini: object;
  fifa: string;
  car: object;
  timezones: Array<string>;
  continents: Array<string>;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: object;
  postalCode: PostalCodeType;
}
export interface CountriesType {
  countries: Array<CountryStateType>;
  error: any;
  isLoading: boolean;
}

const initialState: CountriesType = {
  countries: [],
  error: null,
  isLoading: false,
};

const countriesSlice = createSlice({
  name: "countriesSlice",
  initialState,
  reducers: {
    GET_COUNTRIES_REQUEST: (state) => {
      state.isLoading = true;
    },
    GET_COUNTRIES_SUCCESS: (state, action) => {
      state.countries = action.payload;
      state.isLoading = false;
      
    },
    GET_COUNTRIES_FAILED: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const GET_COUNTRIES_ACTION = `countriesSlice/GET_COUNTRIES_REQUEST`;

export const {
  GET_COUNTRIES_FAILED,
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
} = countriesSlice.actions;

export default countriesSlice.reducer;
