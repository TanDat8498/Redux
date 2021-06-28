import {StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {BACKGROUND} from '../constants/';
import {useDispatch, useSelector} from 'react-redux';
import {CartBackButton} from '../components/CartBackButton';
import CartList from '../components/CartList';
import {CartText} from '../components/CartText';
import {CartOrderButton} from '../components/CartOrderButton';
import {cartActions} from '../store/reducers/cartReducer';

const CartScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart.cart);

  const totalPrice = useSelector(state => state.cart.totalPrice);

  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const handleIncrease = productId => {
    dispatch(cartActions.addProductToCart(productId, 1));
  };

  const handleDecrease = productId => {
    dispatch(cartActions.removeProductToCart(productId, 1));
  };

  const handleGoBackCategory = () => {
    const hashCopyCart = cart;
    for (let index = 0; index < hashCopyCart.length; index++) {
      const element = hashCopyCart[index];
      handleRemove(element);
    }
    navigation.goBack();
  };
  const handleRemove = cartItem => {
    dispatch(cartActions.removeProductToCart(cartItem.id, cartItem.quantity));
  };

  return (
    <ImageBackground style={styles.container} source={BACKGROUND}>
      <CartBackButton onPress={() => navigation.goBack()} />
      <CartText
        styleBorder={styles.styleBorderTitle}
        item={'Items'}
        quantity={'Quantity'}
        price={'Price'}
      />
      <CartList
        cart={cart}
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        handleRemove={handleRemove}
      />
      <CartText
        styleBorder={styles.styleBorderTotal}
        item={'Total'}
        quantity={totalQuantity}
        price={`$ ${totalPrice}`}
      />
      <CartOrderButton handleGoBackCategory={handleGoBackCategory} />
    </ImageBackground>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  styleBorderTitle: {
    borderBottomWidth: 1,
  },
  styleBorderTotal: {
    borderTopWidth: 1,
  },
});
