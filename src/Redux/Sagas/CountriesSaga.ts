import axios, { AxiosResponse } from "axios";
import { put, takeLatest } from "redux-saga/effects";
import {
  GET_COUNTRIES_FAILED,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_ACTION,
} from "../Slices/CountriesSlice";

function* getCountriesSaga() {
  try {
    const response: AxiosResponse<any> = yield axios.get(
      `https://restcountries.com/v3.1/all`,
    );
    yield put(GET_COUNTRIES_SUCCESS(response.data));
  } catch (error) {
    yield put(GET_COUNTRIES_FAILED(error));
  }
}

export function* watchGetCountries() {
  yield takeLatest(GET_COUNTRIES_ACTION, getCountriesSaga);
}
