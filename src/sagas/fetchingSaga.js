import {takeEvery, call, put} from 'redux-saga/effects';
import {types} from '../store/type';
import axios from 'axios';
import {
  fetchingDataError,
  fetchingDataSuccess,
} from '../store/actions/fetchingProductAction';
import {API_URL} from '../constants';

function* fetchRequest() {
  try {
    const res = yield call(() => axios.get(API_URL));
    yield put(fetchingDataSuccess(res.data));
  } catch (error) {
    yield put(fetchingDataError(error));
  }
}

export function* watchFetchDataSaga() {
  yield takeEvery(types.FETCHING_DATA_REQUEST, fetchRequest);
}
