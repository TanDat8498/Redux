import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {CARD} from '../constants';
import {styles} from './styles/CustomButtonStyle';
const CustomButton = ({items, price, style, round, danger, onPress}) => {
  let btnStyle = {...styles.container, ...style};

  if (round) {
    btnStyle = {...btnStyle, ...styles.round};
  }
  if (danger) {
    btnStyle = {...btnStyle, ...styles.danger};
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.4}
      style={round ? styles.round : {}}>
      <View style={btnStyle}>
        <Image source={CARD} style={styles.image} />
        <Text style={styles.text}>{items}</Text>
        <Text style={styles.text}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
