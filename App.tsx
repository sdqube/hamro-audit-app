import React from 'react';
import { configure } from 'mobx';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'mobx-react-lite/batchingForReactNative';

import Main from './src/container';
import store, { StoreContext } from './src/store';

configure({ enforceActions: 'observed' });

export default function App() {
  return (
    <StoreContext.Provider value={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </StoreContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
