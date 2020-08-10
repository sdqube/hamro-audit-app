import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './login';
import { StoreContext } from '../store';
import Home from './home';

const Stack = createStackNavigator();

const Main: React.FC<{}> = () => {
  const { auth } = useContext(StoreContext);
  if (!auth.isAuthenticated) {
    return <Login />;
  }
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default observer(Main);
