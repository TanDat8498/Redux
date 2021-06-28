import {productReducer} from './productReducer';
import {combineReducers} from 'redux';
import {cartReducer} from './cartReducer';

const rootProducts = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export default rootProducts;
