import {Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../constants/index';
import {styles} from './styles/CategoryListStyle';
const CategoryList = props => {
  return (
    <View style={styles.containerItem}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={props.products}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.body,
              props.selectedCate?.id === item.id && styles.bodySelect,
            ]}
            onPress={() => props.handleSelectedProduct(item)}>
            <Text style={styles.text}>
              {`${item.name} (${item.items.length})`}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryList;
