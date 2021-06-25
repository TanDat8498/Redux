import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles/CartTextStyle';
export const CartText = ({item, quantity, price, styleBorder}) => {
  return (
    <View style={[styles.container, styleBorder]}>
      <Text style={[styles.textTitle, styles.textItem]}>{item}</Text>
      <Text style={[styles.textTitle, styles.textQuantity]}>{quantity}</Text>
      <Text style={[styles.textTitle, styles.textPrice]}>{price}</Text>
    </View>
  );
};
