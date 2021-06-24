import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Colors} from '../constants';
import {CARD} from '../constants';

const CustomButton = ({items, price, style, danger, round, onPress}) => {
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.cart,
    borderWidth: 1,
    borderRadius: 8,
    margin: 20,
  },
  image: {
    tintColor: Colors.cart,
    marginBottom: 10,
    height: 50,
    width: 50,
    marginRight: 5,
  },
  text: {
    fontSize: 18,
  },
  round: {
    borderRadius: 15,
  },
  danger: {
    backgroundColor: Colors.danger,
  },
});
