import { all, fork } from "redux-saga/effects";
import { watchGetCountries } from "./CountriesSaga";

const rootSaga = function* () {
  yield all([
    fork(watchGetCountries),
  ]);
};

export default rootSaga;