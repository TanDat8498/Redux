import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {CARD} from '../constants/index';
import {styles} from './styles/CartOrderButtonStyle';
export const CartOrderButton = props => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.handleGoBackCategory()}>
      <Image source={CARD} style={styles.image} />
      <Text style={styles.textButton}>Order</Text>
    </TouchableOpacity>
  );
};
