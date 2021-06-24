import {types} from '../type';

export const fetchingDataRequest = data => {
  return {
    type: types.FETCHING_DATA_REQUEST,
    payload: data,
  };
};

export const fetchingDataSuccess = products => {
  return {
    type: types.FETCHING_DATA_SUCCESS,
    payload: products,
  };
};

export const fetchingDataError = error => {
  return {
    type: types.FETCHING_DATA_ERROR,
    payload: {},
    error: error,
  };
};
export const fetchingCategory = () => {
  return {
    type: types.FETCHING_CATEGORY,
  };
};
