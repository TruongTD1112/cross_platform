import React from 'react';
import RegisterPage from './Register'
import LoginPage from './LoginPage'
import mainPage from './mainPage'
import IndexPage from './indexPage'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {View, Text} from 'react-native'
import 'react-native-gesture-handler';


const Stack = createStackNavigator()

const App = (props) => {
  console.log('ascajcsiuashc')
  return (
    <>
      
 
        <NavigationContainer>
          <Stack.Navigator 
            screenOptions={{
              headerShown: false
            }}
            initialRouteName="IndexPage"
          >
            <Stack.Screen name="IndexPage" component={IndexPage} />
            <Stack.Screen name="Register" component={RegisterPage} />
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="mainPage" component={mainPage} />
          </Stack.Navigator>
          
        </NavigationContainer>

      
    </>
  );
};


export default App;
