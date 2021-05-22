import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
class TopBar extends React.Component {
  render() {
    
    return (
      <View style={styles.container}>
         <AntDesign name="arrowleft" size={24} color="black" />
        <Text style={{fontSize: 20,fontWeight:'700',marginLeft:-30}}>Ingredients</Text>
        <Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row', // row
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor:'#F8F8F8',
    elevation:1
  }
});

export default TopBar;