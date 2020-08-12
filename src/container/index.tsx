import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './login';
import { StoreContext } from '../store';
import Home from './home';
import Camera from '../components/camera';

const Stack = createStackNavigator();

const Main: React.FC<{}> = () => {
  const { auth } = useContext(StoreContext);
  if (!auth.isAuthenticated) {
    return <Login />;
  }
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Camera" component={Camera} />
    </Stack.Navigator>
  );
};

export default observer(Main);
