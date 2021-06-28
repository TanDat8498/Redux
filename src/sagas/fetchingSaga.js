import {takeEvery, call, put} from 'redux-saga/effects';
import axios from 'axios';
import {productActions, productTypes} from '../store/reducers/productReducer';
import {API_URL} from '../constants';

function* fetchSagaRequest() {
  try {
    const res = yield call(() => axios.get(API_URL));
    yield put(productActions.fetchingDataSuccess(res.data));
  } catch (er) {
    yield put(productActions.fetchingDataError(er));
  }
}

export function* watchFetchDataSaga() {
  yield takeEvery(productTypes.FETCHING_DATA_REQUEST, fetchSagaRequest);
}
