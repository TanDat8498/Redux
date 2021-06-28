import {createActions, createReducer} from 'reduxsauce';

//--Create action types and creators
export const {Types, Creators} = createActions({
  fetchingDataRequest: ['products'],
  fetchingDataSuccess: ['products'],
  fetchingDataError: ['error'],
});

export const productTypes = Types;
export const productActions = Creators;

//--create reducer handlers
const initialState = {
  loading: false,
  products: [],
  error: {},
};

export const request = (state = initialState, action) => {
  return {
    ...state,
    loading: true,
  };
};

export const success = (state = initialState, action) => {
  return {
    ...state,
    loading: false,
    products: action.products,
    error: {},
  };
};

export const error = (state = initialState, action) => {
  return {
    ...state,
    loading: false,
    error: action.error,
    products: [],
  };
};

//--create reducer

const HANDLERS = {
  [Types.FETCHING_DATA_REQUEST]: request,
  [Types.FETCHING_DATA_SUCCESS]: success,
  [Types.FETCHING_DATA_ERROR]: error,
};

export const productReducer = createReducer(initialState, HANDLERS);
