import React from 'react';
import { observer } from 'mobx-react';
import { SafeAreaView } from 'react-native';
import { TopNavigation, Divider, Layout, Button } from '@ui-kitten/components';

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
        <Button onPress={navigateToCamera}>OPEN DETAILS</Button>
      </Layout>
    </SafeAreaView>
  );
};

export default observer(Home);
