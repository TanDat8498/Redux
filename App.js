import React from 'react';
import {StatusBar} from 'react-native';
import AppNavigator from './src/navigations/AppNavigator';
import store from './src/store';
import {Provider} from 'react-redux';

console.disableYellowBox = true;

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar translucent={false} hidden />
      <AppNavigator />
    </Provider>
  );
};

export default App;
