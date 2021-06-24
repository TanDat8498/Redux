import productReducer from './productReducer';
import {combineReducers} from 'redux';
import {cardReducer} from './cartReducer';

const rootProducts = combineReducers({
  data: productReducer,
  cart: cardReducer,
});

export default rootProducts;
