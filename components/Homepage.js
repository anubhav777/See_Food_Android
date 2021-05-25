import React, { Component } from 'react';
import {View, Image,Text,StyleSheet,ImageBackground,TouchableHighlight, TouchableOpacity} from 'react-native'
import * as Font from 'expo-font'
import axios from 'axios'

class Homepage extends Component {
    state={
    iamge:[require('../assets/ingredient.png'),require('../assets/calories.png'),require('../assets/delivery.png'),require('../assets/reciepe.png')],
    fintLoaded:false,
    information:['Carbs','Fat','Protein','Fiber'],
    ingred:false,
    calor:false,
    delv:false,
    receip:false
    }
    async componentDidMount () {
        await this._loadAssets()
      }
      
      async _loadAssets () {
        await Font.loadAsync({
            'times-new': require('../assets/fonts/Times_New_Roman.ttf')

        })
        console.log('your fonts loaded!')
        this.setState({fontLoaded: true})
      }
    touchstate=(i)=>{
      if(i == 0){
        this.props.navigation.navigate('Ingredients')
        this.setState({calor:false})
      }
      else if( i === 1){
        this.setState({calor:!(this.state.calor)})
       
      }
      else if( i === 3){
        this.props.navigation.navigate('Receipe')
        this.setState({calor:false})
      }
      else{
        this.setState({calor:false})
      }
     
       
     
      
    }
    render() {
        let images = this.state.iamge.map((val,i)=>{
            return(
              
                <View  key={i}  style={styles.divcontainer}>
                  <TouchableOpacity onPress={ev => {this.touchstate(i);} }>
                <Image 
                style={styles.childimage}
                source={val}
              />
             </TouchableOpacity>
              </View>
               
                )
        })
        let carbs =  this.state.information.map((val,i)=>{
            return(
                <View key={i} style={styles.chartdiv}>
                  <Text style={styles.charttext}>{val}</Text>
                    <View style={styles.halfcircle}></View>
              </View>
                )
        })
        if (this.state.fontLoaded) {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.image} source={require('../assets/pancake.jpg')}> 
                <View style={styles.childcontainer}>
                    {images}
                </View>
                {this.state.calor ?  <View  style={styles.carbsdiv}> 
                {carbs}
                </View> : <View  style={styles.foodtext}><Text style ={styles.innertxt}>Dumpling</Text></View>}
                
               
                </ImageBackground>
                
            </View>
        );
        }
        else{
            return (
                <View style={styles.container}>
                    <ImageBackground style={styles.image} source={require('../assets/pancake.jpg')}> 
                    <View style={styles.childcontainer}>
                        {images}
                    </View>
                    
            
                    </ImageBackground>
                    
                </View>
            );

        }
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        backgroundColor: '#d64161',
        alignItems: 'center',
        justifyContent: 'center',
      },
      image:{
          width:'100%',
          flex:1,
          alignContent: 'flex-end',
          height:'100%'
      },
      childimage:{
        width:64,
        height:64,
        opacity:1

      },
      childcontainer:{
        width:100,
        height:500,
        position:'absolute',
        zIndex:1,
        right:0,
        top:50
      },
      divcontainer:{
          height:'25%',
          width:'100%',
          alignItems:'center',
          justifyContent: 'center'
          
      },
      foodtext:{
        width:200,
        height:100,
        position:'absolute',
        zIndex:1,
        right:'20%',
        bottom:15,
        backgroundColor:'#c94c4c',
        alignItems:'center',
        justifyContent: 'center',
        borderWidth: 4,
        borderColor: "#FFFFFF",
        borderRadius: 6,
        

      },
      innertxt:{
        fontFamily:'times-new',
        fontSize:34,
        color:'#FFFFFF',
        

      },
      carbsdiv:{
        width:'100%',
        height:100,
        position:'absolute',
        zIndex:1,
        bottom:10,
        display: 'flex',
        flexDirection:'row',
          
      },
      chartdiv:{
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor:'#f5f5f5',
        borderWidth: .5,
        borderColor: "#FFFFFF",
        marginLeft:15,        
        alignItems:'center',
        justifyContent: 'center',

      },
      charttext:{
        position:'absolute',
        zIndex:1,
      },
      halfcircle:{
          borderBottomRightRadius:40,
          borderBottomLeftRadius:40,
          width:'100%',
          height:'50%',
          backgroundColor:'#bedad9',
          marginTop:'50%'



      }
  });

export default Homepage;