import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Display from './components/Display';
// import Camerafunc from './components/Camerafunc';
import Homepage from './components/Homepage'


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <Homepage/>
      {/* <TopBar></TopBar> */}
      {/* <Camerafunc /> */}
      {/* <Newing /> */}
      {/* <Reciepe/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#C2185B',
    height: Constants.statusBarHeight
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
