import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyCamera from './src/camera';

export default function App() {
  return (
    <View style={styles.container}>
      <MyCamera />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
