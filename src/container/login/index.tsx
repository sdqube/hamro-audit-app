import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';

const Login: React.FC<{}> = () => {
  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Login</Text>
    </View>
  );
};

export default observer(Login);
