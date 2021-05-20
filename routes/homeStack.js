import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Homepage'
import Receipe from '../components/Receipe' 
import Ingredients from '../components/ingredients/Newingredients'
import * as React from 'react';


const AuthStack = createStackNavigator();

export default () =>(
  <NavigationContainer>
    <AuthStack.Navigator >
    <AuthStack.Screen name ='Home' component={Home} options={{headerShown: false}}/>
    <AuthStack.Screen name ='Receipe' component={Receipe}/>
    <AuthStack.Screen name ='Ingredients' component={Ingredients}/>
    </AuthStack.Navigator>

  </NavigationContainer>
)


// const screens = {
//     Home:{
//         screen:Home
//     },
//     Receipe:{
//         screen:Receipe
//     }
// }

// const HomeStack = createStackNavigator(screens)
// export default NavigationContainer(HomeStack)
// // function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;