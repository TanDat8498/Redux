import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {BACK} from '../constants/index';
import {styles} from './styles/CartBackButton';
export const CartBackButton = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image source={BACK} style={styles.image} />
      <Text style={styles.text}>Back</Text>
    </TouchableOpacity>
  );
};
