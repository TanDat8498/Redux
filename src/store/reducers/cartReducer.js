import {createActions, createReducer} from 'reduxsauce';

const {Types, Creators} = createActions({
  addProductToCart: ['product', 'quantity'],
  removeProductToCart: ['productId', 'quantity'],
});

export const cartTypes = Types;
export const cartActions = Creators;

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

const add = (state = initialState, action) => {
  const newCartItem = {
    ...action.product,
    quantity: 1,
    totalPrice: action.product.price,
  };
  let oldCart = [...state.cart];
  const existedIndex = oldCart.findIndex(
    cartItem => cartItem.id === newCartItem.id,
  );
  if (existedIndex > -1) {
    const oldCartItem = oldCart[existedIndex];

    oldCartItem.quantity = oldCartItem.quantity + action.quantity;

    const newQuantityItem = oldCartItem.quantity;

    oldCartItem.totalPrice = newQuantityItem * oldCartItem.price;

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
};

const remove = (state = initialState, action) => {
  let hashCartRemove = [...state.cart];

  const removeIndex = hashCartRemove.findIndex(
    cartItem => cartItem.id === action.productId,
  );
  const hashCopyRemove = hashCartRemove[removeIndex];

  const newQuantity = hashCopyRemove.quantity - action.quantity;

  hashCopyRemove.quantity = newQuantity;

  hashCopyRemove.totalPrice = newQuantity * hashCopyRemove.price;

  hashCartRemove[removeIndex] = hashCopyRemove;

  if (newQuantity <= 0) {
    hashCartRemove = hashCartRemove.filter(
      cartItem => cartItem.id !== action.productId,
    );
  }
  return {
    ...state,
    cart: hashCartRemove,
    totalQuantity: handleTotalQuantity(hashCartRemove),
    totalPrice: handleTotalPrice(hashCartRemove),
  };
};

const HANDLERS = {
  [Types.ADD_PRODUCT_TO_CART]: add,
  [Types.REMOVE_PRODUCT_TO_CART]: remove,
};

export const cartReducer = createReducer(initialState, HANDLERS);
