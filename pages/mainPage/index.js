import React, {useState} from 'react'

import TabBar from '../../components/TopTabBar'
import 'react-native-gesture-handler';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import NewsFeed from './newsFeed'
import NotifyPage from './notifyPage'
import Marketplace from './marketplace'
import DatingPage from './datingPage'
import Menu from './menu'
import WatchPage from './watchPage';


const Tab = createMaterialTopTabNavigator()

const mainPage = props => {
    const createPost = ()=>{
        props.navigation.navigate("newPost")
    }
    const logout = ()=>{
        props.navigation.navigate("IndexPage")
    }

    const goProfile  =()=>{
        props.navigation.navigate("Profile")
    }
    const icons = ["home", "home-group", "heart-multiple-outline", "view-compact", "newspaper-variant-multiple", "menu"]
    return (
        <Tab.Navigator 
            tabBar={props => <TabBar {...props} icons={icons}  />}
            initialRouteName="newsFeed" 
            
            tabBarOptions={{
                showIcon : true,
                showLabel: false,
            }}
            backBehavior={"initialRoute"}
            
        >
            
            <Tab.Screen  icon="home" name="newsFeed" children={()=><NewsFeed createPost={createPost} />}/>
            <Tab.Screen name="marketPlace" children={()=><Marketplace />}/>
            <Tab.Screen name="watchPage" children={()=><WatchPage/>}/>
            <Tab.Screen name="datingPage" children={()=><DatingPage/>}/>
            <Tab.Screen name="notifyPage" children={()=><NotifyPage/>}/>
            <Tab.Screen name="menu" children={()=><Menu logout={logout} goProfile={goProfile}/>} />
        </Tab.Navigator>
        
    )
}

export default mainPage