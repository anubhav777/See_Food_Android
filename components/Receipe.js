import React, { Component } from 'react';
import {View, Image,Text,StyleSheet,FlatList, Animated,ImageBackground} from 'react-native'

class Receipe extends Component {
   
    render() {
        const data = [{name:'apple',id:1,receipe:'Chicken and Dumplings',image:require('../assets/dumpling1.jpg')},{name:'bar',id:2,receipe:'Perfect Chicken Dumpling',image:require('../assets/dumpling2.jpg')},{name:'bank',id:3,receipe:'Homemade Dumplings',image:require('../assets/dumpling3.jpg')},{name:'chocolate',id:4,receipe:'Pork Dumpling',image:require('../assets/dumpling4.jpg')},{name:'apple',id:5,receipe:'Puff pastry',image:require('../assets/dumpling5.jpg')},{name:'clove',id:6,receipe:'Turkey and Dumpling',image:require('../assets/dumpling6.jpg')},{name:'pepper',id:7,receipe:'Chinese Poek Dumpling',image:require('../assets/dumpling7.jpg')},{name:'bell pepper',id:8,receipe:'Pot Stick Dumpling',image:require('../assets/dumpling8.jpg')},{name:'chilli',id:9,receipe:'Mince and Dumplings',image:require('../assets/dumpling9.jpg')},{name:'jalpeno',id:10,receipe:'Light and Fluffy',image:require('../assets/dumpling10.jpg')},{name:'nacho',id:11,receipe:'Steamed Dumpling',image:require('../assets/dumpling11.jpg')},{name:'cheese',id:12,receipe:'Nepali MoMo',image:require('../assets/dumpling12.jpg')}];
        return (
            <View style={{width:'100%'}}>
            
            {/* <Image style={StyleSheet.absoluteFillObject} blurRadius={1} source={require('../../assets/pancake.jpg')}/> <ImageBackground style={styles.image} source={require('../../assets/pancake.jpg')}/> */}
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                // contentContainerStyle={{
                //     padding:20,
                //     paddingTop:42
                // }}
                renderItem={({ item })=>  (<View style={styles.div}>
                   <View style={styles.cont}><View style={{flex:0.5}}><View style={{width:80,height:80,marginTop:'5%',marginLeft:'10%'}}><ImageBackground style={styles.image} source={item.image}/></View></View><View style={{flex:1}}><Text style={{fontSize: 20,fontWeight:'700',marginTop:'5%'}}>{item.receipe}</Text></View></View>
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
export default Receipe;