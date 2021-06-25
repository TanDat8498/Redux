import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/index';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 0,
    marginBottom: 0,
  },
  render: {
    flexDirection: 'row',
    flex: 1,
  },
  renderName: {
    flex: 2,
  },
  textProductName: {
    margin: 10,
    fontSize: 14,
    fontWeight: '600',
  },
  count: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  btnMinus: {
    marginRight: 15,
  },
  btnPlus: {
    marginLeft: 15,
  },
  imageMinus: {
    width: 15,
    height: 15,
    tintColor: Colors.count,
  },
  imagePlus: {
    width: 15,
    height: 15,
    tintColor: Colors.cart,
  },
  totalPrice: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  marginTotalPrice: {
    marginLeft: 10,
  },
  btnRemove: {},
  imageRemove: {
    width: 15,
    height: 15,
    tintColor: Colors.count,
  },
});
