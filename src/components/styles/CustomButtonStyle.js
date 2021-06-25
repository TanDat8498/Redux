import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';
export const styles = StyleSheet.create({
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
