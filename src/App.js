import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Game from './Game'; // Import the Game component

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to my app</Text>
      <Game /> {/* Render the Game component */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default App;
