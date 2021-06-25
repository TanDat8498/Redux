import {all} from 'redux-saga/effects';

import {watchFetchDataSaga} from './fetchingSaga';
// import {watchAddCartSaga} from './cartSaga';

export default function* rootSaga() {
  yield all([watchFetchDataSaga()]);
}
