import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {

  return (
    <View style={styles.Container}>
      <Text>Welcome To First React Native App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
})