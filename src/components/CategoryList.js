import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../constants';
// import ProductList from './ProductList';

import {styles} from './styles/CategoryListStyle';

const CategoryList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={[]}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[styles.body, item.id == '21' && styles.bodySelect]}>
            <Text
              style={styles.text}>{`${item.name} (${item.items.length})`}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryList;
