import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {CARD} from '../constants/index';
import {styles} from './styles/ProductListStyle';
const ProductList = props => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={props.items}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => props.handleAddCart(item)}>
            <Image
              style={styles.fontImage}
              source={{
                uri: item.image,
              }}
              defaultSource={CARD}
            />
            <ImageBackground
              blurRadius={20}
              style={styles.fontImageBackground}
              source={{
                uri: item.image,
              }}>
              <View style={styles.textImage}>
                <Text style={styles.textName}>{item.name}</Text>
                <Text style={styles.textPrice}>{`$ ${item.price}`}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductList;
