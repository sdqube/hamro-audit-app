import React, { useState, useContext } from 'react';
import { TextInput, TouchableWithoutFeedback } from 'react-native';
import { observer } from 'mobx-react';
import { Layout, Input, Icon, Button } from '@ui-kitten/components';

import { StoreContext } from '../../store';

const AlertIcon = (props: any) => (
  <Icon {...props} name="alert-circle-outline" />
);

const Login: React.FC<{}> = () => {
  const { auth } = useContext(StoreContext);
  const [userInfo, setUserInfo] = useState({ username: '', password: '' });
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const onChangeText = (key: string) => (text: string) => {
    setUserInfo((prev) => ({ ...prev, [key]: text }));
  };
  const onSubmit = () => {
    auth.login();
  };

  const renderIcon = (props: any) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
      }}
    >
      <Input
        value={userInfo.username}
        label="Username"
        size="large"
        onChangeText={onChangeText('username')}
      />
      <Input
        value={userInfo.password}
        label="Password"
        size="large"
        caption="Should contain at least 8 characters"
        accessoryRight={renderIcon}
        captionIcon={AlertIcon}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText('password')}
      />
      <Button
        onPress={onSubmit}
        status="primary"
        style={{ minWidth: 200, marginTop: 20 }}
      >
        Login
      </Button>
    </Layout>
  );
};

export default observer(Login);
