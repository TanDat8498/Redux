import axios from 'axios';
import {
  fetchingDataRequest,
  fetchingDataSuccess,
  fetchingDataError,
} from '../store/actions/showProductAction';

const API_URL =
  'https://gist.githubusercontent.com/trandongtam/21b7633d121e6e72d1afcc603f484fe5/raw/f9e8558f62d854715fc63fc9eafaafb78d68e7c8/data.json';

export const fetchingProducts = () => {
  return dispatch => {
    dispatch(fetchingDataRequest());
    axios
      .get(API_URL)
      .then(res => {
        dispatch(fetchingDataSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchingDataError(error));
      });
  };
};

export default fetchingProducts;
