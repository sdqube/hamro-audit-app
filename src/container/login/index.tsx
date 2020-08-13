import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { observer } from 'mobx-react';
import {
  Layout,
  Input,
  Text,
  Icon,
  Button,
  TopNavigation,
} from '@ui-kitten/components';

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

  const renderTitle = (props: any) => {
    return (
      <Layout style={styles.titleContainer}>
        <Text {...props} category="h2" style={styles.title}>
          Login
        </Text>
      </Layout>
    );
  };

  return (
    <SafeAreaView style={styles.areaContainer}>
      <Layout style={styles.container}>
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
        <Button onPress={onSubmit} status="primary" style={styles.button}>
          Login
        </Button>
      </Layout>
      <TopNavigation
        title={renderTitle}
        alignment="center"
        style={styles.topNavigation}
      />
    </SafeAreaView>
  );
};

export default observer(Login);

const styles = StyleSheet.create({
  titleContainer: { backgroundColor: 'transparent' },
  title: { color: '#ffffff' },
  areaContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    flexDirection: 'column-reverse',
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 40,
    paddingTop: 80,
    marginTop: -30,
    backgroundColor: '#f0f2f6',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  topNavigation: {
    height: 300,
    zIndex: 10,
    backgroundColor: '#7b60db',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  button: {
    minWidth: 200,
    marginTop: 20,
    backgroundColor: '#705dd4',
    borderWidth: 0,
  },
});
