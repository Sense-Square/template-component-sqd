/*

      ATTENZIONE: NON DEVI MODIFICARE QUESTO FILE

*/


import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

// Card content
import Card from './card.js';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
          <Card/>
      </View>
    </PaperProvider>
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
