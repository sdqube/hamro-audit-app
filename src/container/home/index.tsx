import React from 'react';
import { observer } from 'mobx-react';
import { SafeAreaView, StyleSheet } from 'react-native';
import {
  TopNavigation,
  Divider,
  Layout,
  Button,
  Text,
} from '@ui-kitten/components';

const Home: React.FC<any> = ({ navigation }) => {
  const navigateToCamera = () => {
    navigation.navigate('Camera');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Dashboard" alignment="center" />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text category="h3">Select your bill type to upload.</Text>
        <Layout
          style={{
            margin: 20,
            alignItems: 'flex-start',
            flexDirection: 'row',
          }}
        >
          <Button
            style={styles.button}
            status="success"
            onPress={navigateToCamera}
          >
            Purchase
          </Button>
          <Button
            style={styles.button}
            status="warning"
            onPress={navigateToCamera}
          >
            Sell
          </Button>
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};

export default observer(Home);

const styles = StyleSheet.create({
  button: {
    margin: 10,
    flex: 1,
  },
});
