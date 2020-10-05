import React from 'react';
import RegisterPage from './Register'
import LoginPage from './LoginPage'
import mainPage from './mainPage'
import IndexPage from './indexPage'
import Profile from './Profile'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {View, Text} from 'react-native'
import 'react-native-gesture-handler';


const Stack = createStackNavigator()

const App = (props) => {
  return (
    <>
      
 
        <NavigationContainer>
          <Stack.Navigator 
            
            initialRouteName="IndexPage"
          >
            <Stack.Screen
              options={{
                headerShown: false
              }} 
              name="IndexPage" 
              component={IndexPage}
            />
            <Stack.Screen options={{headerShown: false}} name="Register" component={RegisterPage} />
            <Stack.Screen options={{headerShown: false}}  name="Login" component={LoginPage} />
            <Stack.Screen options={{headerShown:false}} name="mainPage" component={mainPage} />
            <Stack.Screen  name="Profile" component={Profile} />
          </Stack.Navigator>
          
        </NavigationContainer>

      
    </>
  );
};


export default App;
