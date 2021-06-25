import React from 'react';
import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import {MINUS, PLUS, REMOVE} from '../constants/index';
import {styles} from './styles/CartListStyle';
const CartList = props => {
  return (
    <FlatList
      style={styles.container}
      showsVerticalScrollIndicator={false}
      data={props.cart}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View style={styles.render}>
          <View style={styles.renderName}>
            <Text style={styles.textProductName}>{item.product.name}</Text>
          </View>
          <View style={styles.count}>
            <TouchableOpacity
              style={styles.btnMinus}
              onPress={() => props.handleDecrease(item.product.id)}>
              <Image source={MINUS} style={styles.imageMinus} />
            </TouchableOpacity>
            <Text style={styles.textProductName}>{item.quantity}</Text>
            <TouchableOpacity
              style={styles.btnPlus}
              onPress={() => props.handleIncrease(item.product)}>
              <Image source={PLUS} style={styles.imagePlus} />
            </TouchableOpacity>
          </View>
          <View style={styles.totalPrice}>
            <Text style={[styles.marginTotalPrice, styles.textProductName]}>
              ${item.totalPrice}
            </Text>
            <TouchableOpacity
              style={styles.btnRemove}
              onPress={() => props.handleRemove(item)}>
              <Image source={REMOVE} style={styles.imageRemove} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};

export default CartList;
