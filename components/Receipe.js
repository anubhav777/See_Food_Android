import React, { Component } from 'react';
import {View, Image,Text,StyleSheet,FlatList, Animated} from 'react-native'


class Newingredients extends Component {
    
    render() {
        const data = [{name:'apple',id:1},{name:'bar',id:2},{name:'bank',id:3},{name:'chocolate',id:4},{name:'apple',id:5},{name:'clove',id:6},{name:'pepper',id:7},{name:'bell pepper',id:8},{name:'chilli',id:9},{name:'jal;peno',id:10},{name:'nacho',id:11},{name:'cheese',id:12}];
        const scrollY = new Animated.Value(0);
        const ITEM_SIZE = 70 + 20 * 3
        return (
            <View style={{width:'100%'}}>
                <Image style={StyleSheet.absoluteFillObject} blurRadius={1} source={require('../../assets/pancake.jpg')}/> 
                <Animated.FlatList
                    data={data}
                    onscroll ={Animated.event(
                        [{nativeEvent : {contentoffset:{y :scrollY}}}],
                        {useNativeDriver: true}
                    )}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{
                        padding:20,
                        paddingTop:42
                    }}
                    renderItem={({ item, index })=> {
                        const inputRange=[
                            -1,0,ITEM_SIZE * index, ITEM_SIZE * (index + 2) ]
                        const opacityRange=[
                                -1,0,ITEM_SIZE * index, ITEM_SIZE * (index + 1) ]
                        const scale = scrollY.interpolate({
                            inputRange,
                            outputRange:[1,1,1,0]
                        })
                  
                        return <Animated.View style={{flex:1,padding: 20, marginBottom: 20,backgroundColor:'rgba(255,255,255,0.8)',width:'90%', marginLeft:'5%',borderRadius:12, shadowColor:"#000", shadowoffset:{width:0,height:2},shadowOpacity:0.3,elevation: 0.5, shadowRadius:20,transform:[{scale}]}}>
                        <Text style={{fontSize:22,fontWeight:'700'}}>{item.name}</Text>
                        </Animated.View>
    }}
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
          
      }

  });

export default Newingredients;