import {types} from '../type';

const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
};
const handleTotalPrice = cart => {
  let sum = 0;
  for (let index = 0; index < cart.length; index++) {
    const element = cart[index].totalPrice;
    sum += element;
  }
  return sum;
};
const handleTotalQuantity = cart => {
  let sum = 0;
  for (let index = 0; index < cart.length; index++) {
    const element = cart[index].quantity;
    sum += element;
  }
  return sum;
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_TO_CART:
      const newCartItem = {
        ...action.payload,
        quantity: 1,
        totalPrice: action.payload.product.price,
      };
      let oldCart = [...state.cart];
      const existedIndex = oldCart.findIndex(
        cartItem => cartItem.product.id === newCartItem.product.id,
      );
      if (existedIndex > -1) {
        const oldCartItem = oldCart[existedIndex];

        oldCartItem.quantity = oldCartItem.quantity + action.payload.quantity;

        const newQuantityItem = oldCartItem.quantity;

        oldCartItem.totalPrice = newQuantityItem * oldCartItem.product.price;

        oldCart[existedIndex] = oldCartItem;
      } else {
        oldCart = [...oldCart, newCartItem];
      }
      return {
        ...state, //ke thua lai toan bo initState
        cart: oldCart,
        totalQuantity: handleTotalQuantity(oldCart),
        totalPrice: handleTotalPrice(oldCart),
      };
    case types.REMOVE_PRODUCT_TO_CART: {
      let hashCartRemove = [...state.cart];

      const removeIndex = hashCartRemove.findIndex(
        cartItem => cartItem.product.id === action.payload.productId,
      );
      const hashCopyRemove = hashCartRemove[removeIndex];

      const newQuantity = hashCopyRemove.quantity - action.payload.quantity;

      hashCopyRemove.quantity = newQuantity;

      hashCopyRemove.totalPrice = newQuantity * hashCopyRemove.product.price;

      hashCartRemove[removeIndex] = hashCopyRemove;

      if (newQuantity <= 0) {
        hashCartRemove = hashCartRemove.filter(
          cartItem => cartItem.product.id !== action.payload.productId,
        );
      }
      return {
        ...state,
        cart: hashCartRemove,
        totalQuantity: handleTotalQuantity(hashCartRemove),
        totalPrice: handleTotalPrice(hashCartRemove),
      };
    }
    default:
      return state;
  }
};

//  case 'REMOVE_FROM_CART':
// return state
// .map(item => (item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item))
// .filter(item => item.qty > 0);
