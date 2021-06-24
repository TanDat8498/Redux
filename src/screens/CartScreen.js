import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  BACKGROUND,
  CARD,
  MINUS,
  REMOVE,
  PLUS,
  BACK,
  Colors,
} from '../constants/';
import {useDispatch, useSelector} from 'react-redux';
import {
  addProductToCart,
  removeProductToCart,
} from '../store/actions/cartAction';

const CartScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart.cart);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const handleIncrease = productId => {
    dispatch(addProductToCart(productId, 1));
  };

  const handleDecrease = productId => {
    dispatch(removeProductToCart(productId, 1));
  };

  const handleGoBackHome = () => {
    navigation.goBack();
  };
  const handleRemove = cartItem => {
    dispatch(removeProductToCart(cartItem.product.id, cartItem.quantity));
  };

  return (
    <ImageBackground style={styles.container} source={BACKGROUND}>
      <TouchableOpacity
        style={{flexDirection: 'row', margin: 20, marginBottom: 0}}
        onPress={() => navigation.goBack()}>
        <Image source={BACK} style={{width: 10, height: 15}} />
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            marginLeft: 8,
          }}>
          Back
        </Text>
      </TouchableOpacity>
      <View style={styles.title}>
        <Text style={styles.textTitle}>Items</Text>
        <Text style={styles.textTitle}>Quantity</Text>
        <Text style={styles.textTitle}>Price</Text>
      </View>
      <FlatList
        style={styles.card}
        showsVerticalScrollIndicator={false}
        data={cart}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.render}>
            <View style={{flex: 1, marginLeft: 25}}>
              <Text>{item.product.name}</Text>
            </View>
            <View style={styles.count}>
              <TouchableOpacity
                style={styles.btnMinus}
                onPress={() => handleDecrease(item.product.id)}>
                <Image
                  source={MINUS}
                  style={{width: 15, height: 15, tintColor: Colors.count}}
                />
              </TouchableOpacity>
              <Text>{item.quantity}</Text>
              <TouchableOpacity
                style={styles.btnPlus}
                onPress={() => handleIncrease(item.product)}>
                <Image
                  source={PLUS}
                  style={{width: 15, height: 15, tintColor: Colors.cart}}
                />
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={{marginLeft: 20}}>${item.totalPrice}</Text>
              <TouchableOpacity
                style={{marginLeft: 5}}
                onPress={() => handleRemove(item)}>
                <Image
                  source={REMOVE}
                  style={{width: 15, height: 15, tintColor: Colors.count}}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <View style={styles.total}>
        <Text style={styles.textTitle}>Total</Text>
        <Text style={styles.textTitle}>{totalQuantity}</Text>
        <Text style={styles.textTitle}>$ {totalPrice}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleGoBackHome()}>
        <Image source={CARD} style={{width: 50, height: 50}} />
        <Text style={styles.textButton}>Order</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 25,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    padding: 10,
  },
  textTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  card: {
    flex: 1,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 25,
    borderTopWidth: 1,
    borderTopColor: 'grey',
    padding: 10,
  },
  button: {
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'center',
    marginLeft: 200,
    marginRight: 10,
    marginVertical: 10,
  },
  textButton: {
    fontSize: 15,
    marginTop: 20,
  },
  render: {
    flexDirection: 'row',
  },
  count: {
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'center',
    marginRight: 20,
  },
  btnMinus: {
    marginRight: 10,
  },
  btnPlus: {
    marginLeft: 10,
  },
});
