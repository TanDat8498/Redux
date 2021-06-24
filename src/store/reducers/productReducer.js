import {types} from '../type';

const initialState = {
  loading: false,
  products: [],
  error: {},
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCHING_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: {},
      };
    case types.FETCHING_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        products: [],
      };
    default:
      return state;
  }
};
export default productReducer;
