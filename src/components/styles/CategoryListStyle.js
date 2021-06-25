import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';

export const styles = StyleSheet.create({
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
});
