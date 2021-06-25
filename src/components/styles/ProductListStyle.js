import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.cart,
    borderRadius: 20,
    margin: 10,
    overflow: 'hidden',
  },
  textName: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 18,
    margin: 10,
    marginRight: 50,
    color: 'black',
  },
  textPrice: {
    textAlign: 'center',
    fontSize: 18,
    marginRight: 50,
    color: 'yellow',
  },
  fontImage: {
    height: 100,
    width: '40%',
  },
  fontImageBackground: {
    height: 100,
    width: '80%',
  },
});
