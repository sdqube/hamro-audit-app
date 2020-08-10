import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';

const Home: React.FC<{}> = () => {
  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Home</Text>
    </View>
  );
};

export default observer(Home);
