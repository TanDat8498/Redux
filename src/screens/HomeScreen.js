import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchingDataRequest} from '../store/actions/fetchingProductAction';
import {addProductToCart} from '../store/actions/cartAction';
import CustomButton from '../components/CustomButton';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';

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
      <CategoryList
        products={products}
        handleSelectedProduct={handleSelectedProduct}
        selectedCate={selectedCate}
      />
      <ProductList items={selectedCate?.items} handleAddCart={handleAddCart} />
      <CustomButton
        items={`(${totalQuantity} items):`}
        price={`$${totalPrice}`}
        onPress={() => navigation.navigate('Cart')}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
