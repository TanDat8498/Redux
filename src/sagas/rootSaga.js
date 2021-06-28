import {all} from 'redux-saga/effects';
import {watchFetchDataSaga} from './fetchingSaga';

export default function* rootSaga() {
  yield all([watchFetchDataSaga()]);
}
