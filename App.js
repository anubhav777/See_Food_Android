import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Display from './components/Display';
// import Camerafunc from './components/Camerafunc';
import Homepage from './components/Homepage'
import IngredientsDetailsScreen from './components/ingredients/IngredientsDetailsScreen'
import Newing from './components/ingredients/Newingredients'
import TopBar from './components/TopBar'
import Reciepe from './components/Receipe'
import Navigator from './routes/homeStack'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <Navigator/>
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
