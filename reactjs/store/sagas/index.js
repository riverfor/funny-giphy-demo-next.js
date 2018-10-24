import { all } from 'redux-saga/effects';
// Put all your sagas here.
import exampleSagas from './example';
import mianSagas from './main'

export default function* rootSaga() {
  yield all([
    ...exampleSagas(),
    ...mianSagas(),
  ]);
}
