import React, {useState, useEffect} from 'react'

import TabBar from '../../components/TopTabBar'
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon1 from 'react-native-vector-icons/Ionicons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import NewsFeed from './newsFeed'
import NotifyPage from './notifyPage'
import Marketplace from './marketplace'
import DatingPage from './datingPage'
import Menu from './menu'
import WatchPage from './watchPage';




const Tab = createMaterialTopTabNavigator()

const mainPage = props => {
    const [time, setTime] = useState(Date.now().toString())
    useEffect(() => {
        if (props.route.params?.time) {
            setTime(props.route.params.time)
        }
    }, [props.route.params])

    const createPost = ()=>{
        props.navigation.navigate("newPost")
    }
    const logout = ()=>{
        props.navigation.navigate("IndexPage")
    }

    const goProfile  =()=>{
        props.navigation.navigate("Profile")
    }

    const gotoSearch = () => {
        props.navigation.navigate("Search")
    }
    global.gotoSearch = gotoSearch
   
    const icons = ["home", "account-group", "heart-half-full", "view-compact", "newspaper-variant-multiple", "menu"]
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
            
            <Tab.Screen  icon="home" name="newsFeed" children={()=><NewsFeed createPost={createPost} time={time} />}/>
            <Tab.Screen name="marketPlace" children={()=><Marketplace />}/>
            <Tab.Screen name="watchPage" children={()=><WatchPage/>}/>
            <Tab.Screen name="datingPage" children={()=><DatingPage/>}/>
            <Tab.Screen name="notifyPage" children={()=><NotifyPage/>}/>
            <Tab.Screen name="menu" children={()=><Menu logout={logout} goProfile={goProfile}/>} />
        </Tab.Navigator>
        
    )
}

export default mainPage