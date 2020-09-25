import React, {useState} from 'react'
import {View,Text, TouchableOpacity} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
// import Icon1 from 'react-native-vector-icons/Ionicons'
import 'react-native-gesture-handler';
import Animated from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import newsFeed from './newsFeed'
import notifyPage from './notifyPage'
import Marketplace from './marketplace'
import DatingPage from './datingPage'
import Menu from './menu'
import WatchPage from './watchPage';
import SearchTab from './searchTab'

const Tab = createMaterialTopTabNavigator()

const mainPage = props => {
    const [showSearchTab, setShowSearchTab] = useState(true)
    const logout = ()=>{
        console.log("acx")
        props.navigation.navigate("IndexPage")
    }
    return (
        <>
        {<SearchTab/>}
        <Tab.Navigator 
            initialRouteName="newsFeed" 
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color}) => {
                    let iconName
                    let colorr = focused ? "#3360ff" : "gray"
                    switch (route.name){
                        case  'newsFeed': 
                            iconName='home'  
                            // setShowSearchTab(true)                           
                            break

                        case  'marketPlace': 
                            iconName='home-group' 
                            // setShowSearchTab(false)  
                            break

                        case  'datingPage': 
                            iconName='heart-multiple-outline' 
                            // setShowSearchTab(false)
                            break

                        case  'watchPage': 
                            iconName='view-compact' 
                            // setShowSearchTab(false)
                            break

                        case  'notifyPage': 
                            iconName='newspaper-variant-multiple' 
                            // setShowSearchTab(false)
                            break

                        case  'menu': 
                            iconName='menu' 
                            // setShowSearchTab(false)
                            break
                        
                        default : iconName='home'

                    }
                   
                    return <Icon name={iconName} color={colorr} size={25}/>
                }
            })}
            tabBarOptions={{
                showIcon : true,
                showLabel: false,
                
            }}
            backBehavior={"initialRoute"}
        >
            
            <Tab.Screen name="newsFeed" component={newsFeed}/>
            <Tab.Screen name="marketPlace" component={Marketplace}/>
            <Tab.Screen name="watchPage" component={WatchPage}/>
            <Tab.Screen name="datingPage" component={DatingPage}/>
            <Tab.Screen name="notifyPage" component={notifyPage}/>
            <Tab.Screen name="menu" children={()=><Menu logout={logout}/>} />
        </Tab.Navigator>
        </>
    )
}

export default mainPage