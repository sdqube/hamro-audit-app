import React, { useState, useContext } from 'react';
import { View, TextInput, Button } from 'react-native';
import { observer } from 'mobx-react';
import { StoreContext } from '../../store';

const Login: React.FC<{}> = () => {
  const { auth } = useContext(StoreContext);
  const [userInfo, setUserInfo] = useState({ username: '', password: '' });

  const onChangeText = (key: string) => (text: string) => {
    setUserInfo((prev) => ({ ...prev, [key]: text }));
  };
  const onSubmit = () => {
    auth.login();
  };

  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TextInput
        style={{
          height: 40,
          width: '90%',
          borderColor: '#888',
          borderWidth: 1,
          padding: 8,
          margin: 10,
        }}
        placeholder="Username"
        onChangeText={onChangeText('username')}
        value={userInfo.username}
      />
      <TextInput
        style={{
          height: 40,
          width: '90%',
          margin: 10,
          borderColor: '#888',
          borderWidth: 1,
          padding: 8,
        }}
        placeholder="Password"
        secureTextEntry
        onChangeText={onChangeText('password')}
        value={userInfo.password}
      />
      <Button onPress={onSubmit} title="Login"></Button>
    </View>
  );
};

export default observer(Login);
