import React, { Component } from 'react';
import {View, Image,Text,StyleSheet,FlatList, Animated,ImageBackground} from 'react-native'


class Newingredients extends Component {
    
    render() {
        const data = [{name:'apple',id:1},{name:'bar',id:2},{name:'bank',id:3},{name:'chocolate',id:4},{name:'apple',id:5},{name:'clove',id:6},{name:'pepper',id:7},{name:'bell pepper',id:8},{name:'chilli',id:9},{name:'jal;peno',id:10},{name:'nacho',id:11},{name:'cheese',id:12}];
        // const scrollY = new Animated.Value(0);
        // const ITEM_SIZE = 70 + 20 * 3
        return (
            <View style={{width:'100%'}}>
                <View style={styles.cont}><View style={{flex:0.5}}><View style={{width:80,height:80,marginTop:'5%',marginLeft:'10%'}}><ImageBackground style={styles.image} source={require('../../assets/pancake.jpg')}/></View></View><View style={{flex:1}}><Text style={{fontSize: 20,fontWeight:'700',marginTop:'5%'}}>Panckae</Text></View></View>
                {/* <Image style={StyleSheet.absoluteFillObject} blurRadius={1} source={require('../../assets/pancake.jpg')}/> <ImageBackground style={styles.image} source={require('../../assets/pancake.jpg')}/> */}
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    // contentContainerStyle={{
                    //     padding:20,
                    //     paddingTop:42
                    // }}
                    renderItem={({ item })=>  (<View style={styles.div}>
                        <Text style={{fontSize:18,fontWeight:'700',marginLeft:'5%',textTransform: 'capitalize'}}>{item.name}</Text>
                        </View>
                    )}
                    />
            </View>
        );
    }
} 
const styles = StyleSheet.create({
      image:{
          width:'100%',
          flex:1,
          alignContent: 'flex-end',
          height:'100%',
          
      },
      div:{
        width: '100%',
        height: 100,
        flexDirection: 'row', // row
        backgroundColor: 'white',
        alignItems: 'center',
        // marginTop: 5,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
      },
      cont:{
          width:'100%',
          height:90,
          flexDirection:'row'

      }


  });

export default Newingredients;