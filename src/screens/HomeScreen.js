import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
} from 'react-native';
import React, {useEffect, useState, useCallback, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchingDataRequest} from '../store/actions/fetchingProductAction';
import {Colors, CARD} from '../constants';
import {addProductToCart} from '../store/actions/cartAction';

const HomeScreen = ({navigation}) => {
  const [selectedCate, setSelectedCate] = useState();

  const dispatch = useDispatch();

  const products = useSelector(state => state.data.products);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const handleSelectedProduct = category => {
    if (category.id !== selectedCate.id) {
      setSelectedCate(category);
    }
  };

  const handleAddCart = product => {
    dispatch(addProductToCart(product, 1));
  };

  useEffect(() => {
    dispatch(fetchingDataRequest());
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      setSelectedCate(products[0]);
    }
  }, [products]);

  return (
    <View style={styles.container}>
      {/* <CategoryList /> */}
      <View style={styles.containerItem}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          // data={Data_Api}s
          data={products}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[
                styles.body,
                selectedCate?.id === item.id && styles.bodySelect,
              ]}
              onPress={() => handleSelectedProduct(item)}>
              <Text
                style={
                  styles.text
                }>{`${item.name} (${item.items.length})`}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.content}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={selectedCate?.items}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => handleAddCart(item)}>
              <Image
                style={{height: 100, width: '40%'}}
                source={{
                  uri: item.image,
                }}
                defaultSource={CARD}
              />
              <ImageBackground
                blurRadius={20}
                style={{height: 100, width: '80%'}}
                source={{
                  uri: item.image,
                }}>
                <View style={styles.textImage}>
                  <Text style={[styles.textName, {color: 'black'}]}>
                    {item.name}
                  </Text>
                  <Text style={[styles.textPrice, {color: 'yellow'}]}>
                    {`$ ${item.price}`}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
      </View>

      {
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}
          activeOpacity={0.4}>
          <View style={styles.btnStyle}>
            <Image source={CARD} style={styles.image} />
            <Text style={styles.text}>({totalQuantity} items):</Text>
            <Text style={styles.text}>${totalPrice}</Text>
          </View>
        </TouchableOpacity>
      }
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerItem: {
    borderBottomWidth: 0.5,
    margin: 10,
    paddingBottom: 20,
    borderBottomColor: 'lightgrey',
  },
  body: {
    margin: 5,
  },
  bodySelect: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.cart,
  },
  text: {
    fontSize: 15,
  },
  content: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.cart,
  },
  // textImage: {
  //   flex: 1,
  // },
  textName: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 18,
    margin: 10,
    marginRight: 50,
  },
  textPrice: {
    textAlign: 'center',
    fontSize: 18,
    marginRight: 50,
  },

  btnStyle: {
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
  round: {
    borderRadius: 15,
  },
  danger: {
    backgroundColor: Colors.danger,
  },
});
