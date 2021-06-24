import {types} from '../type';

export const addProductToCart = (product, quantity) => {
  return {
    type: types.ADD_PRODUCT_TO_CART,
    payload: {product, quantity},
  };
};
export const removeProductToCart = (productId, quantity) => {
  return {
    type: types.REMOVE_PRODUCT_TO_CART,
    payload: {productId, quantity},
  };
};
