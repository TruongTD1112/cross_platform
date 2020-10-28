import React, { useState } from 'react';
import RegisterPage from './Register'
import LoginPage from './LoginPage'
import mainPage from './mainPage'
import IndexPage from './indexPage'
import Profile from './Profile'
import UserProfile from './userProfile'
import NewPost from './createPost'
import Search from './search'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { TextInput, View } from 'react-native'

import 'react-native-gesture-handler';


const Stack = createStackNavigator()

const SearchTab =
  <View style={{ width: 350, justifyContent: 'center', paddingRight: 10 }} >
    <TextInput
      autoCompleteType="off"
      autoCorrect={false}
      spellCheck={false}
      underlineColorAndroid="#ddd"
      style={{ backgroundColor: "#ddd", width: '100%', height: '80%', borderRadius: 20, paddingHorizontal: 10 }} />
  </View>
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
          <Stack.Screen options={{ headerShown: false }} name="Register" component={RegisterPage} />
          <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginPage} />
          <Stack.Screen options={{ headerShown: false }} name="mainPage" component={mainPage} />
          <Stack.Screen options={{ headerShown: false }} name="newPost" component={NewPost} />
          <Stack.Screen options={{
            headerRight: () => SearchTab,
            headerTitle: ''
          }} name="Profile" component={Profile} />
          <Stack.Screen options={{
            headerRight: () => SearchTab,
            headerTitle: ''
          }} name="UserProfile" component={UserProfile} />
          <Stack.Screen options={{
            headerRight: () => SearchTab,
            headerTitle: ''
          }} name="Search" component={Search} />
        </Stack.Navigator>

      </NavigationContainer>


    </>
  );
};


export default App;
