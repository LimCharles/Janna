import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Carousel } from './components/Carousel.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Carousel/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
