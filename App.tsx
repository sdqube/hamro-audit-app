import React from 'react';
import { configure } from 'mobx';
import 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';
import 'mobx-react-lite/batchingForReactNative';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import Main from './src/container';
import store, { StoreContext } from './src/store';

configure({ enforceActions: 'observed' });

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <StoreContext.Provider value={store}>
          <NavigationContainer>
            <Main />
          </NavigationContainer>
        </StoreContext.Provider>
      </ApplicationProvider>
    </>
  );
}
