import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {Data_Api} from '../Api';
import {Colors} from '../constants';

const ProductList = props => {
  return (
    <View style={styles.container}>
      {console.log(props)}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={props.data}
        keyExtractor={(item, index) => index}
        renderItem={item => (
          <TouchableOpacity>
            <View style={styles.buttonView}>
              {console.log(props.data[0].name)}
              <Image source={props.image} style={styles.image} />
              <View style={styles.textView}>
                <Text style={styles.text}>{props.name}</Text>
                <Text style={styles.text}>{props.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonView: {
    flexDirection: 'row',
    borderWidth: 1,
    margin: 10,
    height: 100,
    width: '100%',
  },
  textView: {
    flex: 1,
    margin: 10,
    borderWidth: 1,
  },
  text: {
    borderWidth: 1,
    margin: 5,
    padding: 5,
    fontSize: 13,
    textAlign: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderWidth: 1,
  },
});
